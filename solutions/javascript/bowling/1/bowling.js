export class Bowling {
  constructor() {
    this.game = {
    };
    this.framesPlayed = 1;
    this.currentFrameRolls = [];
  }

  frameScore(frame) {
    return frame.reduce((accumulator, currentValue) => { return accumulator + currentValue });
  }

  isSpare(frame) {
    let [roll1, roll2] = frame;
    return this.frameScore([roll1, roll2]) === 10;
  }

  isStrike(frame) {
    return frame[0] === 10;
  }

  roll(pinsKnockedDown) {
    // If there are exactly 2 rolls in the current frame or if it is a strike we know the frame is over so we reset currentFrameRolls
    if (this.currentFrameRolls.length === 2 || this.isStrike(this.currentFrameRolls)) {
      this.currentFrameRolls = [];
    }

    if (pinsKnockedDown > 10 || (this.currentFrameRolls.length === 1 && (this.currentFrameRolls[0] + pinsKnockedDown) > 10)) {
        throw new Error(`Pin count exceeds pins on the lane`);
    }

    if (pinsKnockedDown < 0) {
      throw new Error(`Negative roll is invalid`);
    }

    const finalFrame = this.game['10'];
    if (finalFrame) {
      if ((this.frameScore(finalFrame) < 10 && finalFrame.length === 2) || finalFrame.length === 3) {
        throw new Error(`Cannot roll after game is over`);
      }
    }

    this.currentFrameRolls.push(pinsKnockedDown);
    let currentFrame = this.framesPlayed;

    if (this.game[currentFrame]) {
      this.game[currentFrame].push(pinsKnockedDown);
    } else {
      this.game[currentFrame] = [pinsKnockedDown];
    }

    if ((this.isStrike([pinsKnockedDown]) || this.game[currentFrame].length === 2) && this.framesPlayed < 10) {
      this.framesPlayed += 1;
    }
  }

  score() {
    if (this.framesPlayed < 10 || ((this.isStrike(this.game['10']) || this.isStrike([this.game['10'][1]]) || this.isSpare(this.game['10'])) && this.game['10'].length <= 2)) {
      throw new Error(`Score cannot be taken until the end of the game`);
    }

    let total = 0;
    let currentFrame, nextFrame;

    for (const frame in this.game) {
      currentFrame = this.game[frame];
      nextFrame = (parseInt(frame) + 1).toString();
      total += this.frameScore(currentFrame);

      // If the current frame is a spare and there is a next frame, add the first roll of the next frame as a bonus
      if (this.isSpare(currentFrame) && this.game[nextFrame]) {
        total += this.game[nextFrame][0];
      }

      if (this.isStrike(currentFrame) && this.game[nextFrame]) {
        // If the next frame only has exactly 1 roll, we know it is a strike so we can add that roll as a bonus plus first roll from the next frame
        if (this.game[nextFrame].length === 1) {
          total += this.game[nextFrame][0];
          nextFrame = (parseInt(frame) + 2).toString();
          total += this.game[nextFrame][0];
        }
        // If the next frame has exactly 2 rolls we can safely add the value of both (i.e. the frameScore) as a bonus
        else if (this.game[nextFrame].length === 2) {
          total += this.frameScore(this.game[nextFrame]);
        }
        // If the next frame has exactly 3 rolls, we know it is the final frame with a fill ball so we can safely add the value of the first 2 rolls as a bonus 
        else if (this.game[nextFrame].length === 3) {
          total += this.frameScore([this.game[nextFrame][0], this.game[nextFrame][1]]);
        }
      }
    }

    return total;
  }
}