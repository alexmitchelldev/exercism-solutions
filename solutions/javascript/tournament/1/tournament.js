export const tournamentTally = (games) => {
  const tournament = new Tournament(games);

  return tournament.toTally();
};

class Tournament {
  constructor(gamesString) {
    this.matches = typeof gamesString === 'string' && gamesString.length > 0 ? gamesString.split('\n') : [];
    this.teamScores = {};
  }

  addTeam(teamName) {
    this.teamScores[teamName] = {
      mp: 0,
      w: 0,
      d: 0,
      l: 0,
      p: 0
    }
  }

  calculateScores() {
    let matchArray, result, team1, team2;

    for (const match of this.matches) {
      matchArray = match.split(';');
      [team1, team2] = matchArray;
      result = matchArray.pop();

      if (!this.teamScores[team1]) {
        this.addTeam(team1);
      }
      if (!this.teamScores[team2]) {
        this.addTeam(team2);
      }

      this.teamScores[team1].mp += 1;
      this.teamScores[team2].mp += 1;

      switch (result) {
        case 'win':
          this.teamScores[team1].w += 1;
          this.teamScores[team1].p += 3;

          this.teamScores[team2].l += 1;
          break;
        case 'loss':
          this.teamScores[team2].w += 1;
          this.teamScores[team2].p += 3;

          this.teamScores[team1].l += 1;
          break;
        case 'draw':
          this.teamScores[team1].p += 1;
          this.teamScores[team1].d += 1;
          this.teamScores[team2].p += 1;
          this.teamScores[team2].d += 1;
          break;
      }
    }
  }

  sortTeams() {
    const teams = Object.keys(this.teamScores);
    teams.sort();
    let sortedTeams = [];

    while (sortedTeams.length !== teams.length) {
      let highestScore = null;
      let teamToPush;
      for (const key of teams) {
        if ((highestScore === null || this.teamScores[key].p > highestScore) && sortedTeams.indexOf(key) === -1) {
          highestScore = this.teamScores[key].p;
          teamToPush = key;
        }
      }
      sortedTeams.push(teamToPush);
    }

    return sortedTeams;
  }

  parseRow(teamObject, isFinalTeam) {
    let row = `${teamObject.name}`;

    row = row.padEnd(31, ' ');

    row += `|  ${teamObject.mp} |  ${teamObject.w} |  ${teamObject.d} |  ${teamObject.l} |`;

    let gamesPlayed = `${teamObject.p}`;
    gamesPlayed = gamesPlayed.padStart(3, ' ');

    row += gamesPlayed;

    if (!isFinalTeam) {
      row += `\n`;
    }

    return row;
  }

  toTally() {
    let tally = 'Team                           | MP |  W |  D |  L |  P';

    this.calculateScores();
    const sortedTeams = this.sortTeams();

    if (sortedTeams.length === 0) {
      return tally;
    }

    tally += `\n`;

    let row, teamObject;
    let isFinalTeam = false;
    for (const team of sortedTeams) {
      teamObject = this.teamScores[team];
      teamObject.name = team;
      isFinalTeam = sortedTeams.indexOf(team) === sortedTeams.length - 1;
      row = this.parseRow(teamObject, isFinalTeam);
      tally += row;
    }

    return tally;
  }
}