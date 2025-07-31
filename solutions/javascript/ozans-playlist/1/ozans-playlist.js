// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const playListSet = createPlaylistSet(playlist);

  let playlistWithoutDuplicates = [];

  playListSet.forEach(song => {
    playlistWithoutDuplicates.push(song);
  })

  return playlistWithoutDuplicates;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const playListSet = createPlaylistSet(playlist);

  return playListSet.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const playListSet = createPlaylistSet(playlist);

  playListSet.add(track);

  let playListWithTrackAdded = [];

  playListSet.forEach(track => {
    playListWithTrackAdded.push(track);
  })

  return playListWithTrackAdded;
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const playListSet = createPlaylistSet(playlist);

  playListSet.delete(track);

  let playListWithTrackRemoved = [];

  playListSet.forEach(track => {
    playListWithTrackRemoved.push(track);
  })

  return playListWithTrackRemoved;
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  playlist = playlist.map(song => song.split('-').pop().trim());
  const ArtistSet = createPlaylistSet(playlist);

  let uniqueArtists = [];

  ArtistSet.forEach(artist => {
    uniqueArtists.push(artist);
  })

  return uniqueArtists;
}

function createPlaylistSet (playlist) {
  const playListSet = new Set();

  for (const song of playlist) {
    playListSet.add(song);
  }

  return playListSet;
}