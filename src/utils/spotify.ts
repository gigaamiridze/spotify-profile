import axios from 'axios';
import { requestConfig } from '../config';
import { IPlaylistTrackItem } from '../interfaces';

const { headers } = requestConfig;

// Get Current User's Profile
export const getUser = () => axios.get('/', { ...requestConfig });

// Get User's Followed Artists
const getFollowing = () => axios.get('/following?type=artist', { ...requestConfig });

// Get List of Current User's Playlists
export const getPlaylists = () => axios.get('/playlists', { ...requestConfig });

// Get User's Top Artists
export const getTopArtistsShort = () =>
  axios.get('/top/artists?limit=50&time_range=short_term', { ...requestConfig });

export const getTopArtistsMedium = () =>
  axios.get('/top/artists?limit=50&time_range=medium_term', { ...requestConfig });

export const getTopArtistsLong = () =>
  axios.get('/top/artists?limit=50&time_range=long_term', { ...requestConfig });

// Get User's Top Tracks
export const getTopTracksShort = () =>
  axios.get('/top/tracks?limit=50&time_range=short_term', { ...requestConfig });

export const getTopTracksMedium = () =>
  axios.get('/top/tracks?limit=50&time_range=medium_term', { ...requestConfig });

export const getTopTracksLong = () =>
  axios.get('/top/tracks?limit=50&time_range=long_term', { ...requestConfig });

// Get Current User's Recently Played Tracks
export const getRecentlyPlayed = () =>
  axios.get('/player/recently-played', { ...requestConfig });

// Return a comma separated string of track IDs from the given array of tracks
const getTrackIds = (tracks: IPlaylistTrackItem[]) => tracks.map(({ track }) => track.id).join(',');

// Get Audio Features for Several Tracks
export const getAudioFeaturesForTracks = (tracks: IPlaylistTrackItem[]) => {
  const ids = getTrackIds(tracks);
  return axios.get(`https://api.spotify.com/v1/audio-features?ids=${ids}`, { headers });
};

// Get an Artist
export const getArtist = (artistId: string) =>
  axios.get(`https://api.spotify.com/v1/artists/${artistId}`, { headers });

// Get a Track
const getTrack = (trackId: string) =>
  axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, { headers });

// Get a Playlist
export const getPlaylist = (playlistId: string) =>
  axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, { headers });

// Get Audio Analysis for a Track
const getTrackAudioAnalysis = (trackId: string) =>
  axios.get(`https://api.spotify.com/v1/audio-analysis/${trackId}`, { headers });

// Get Audio Features for a Track
const getTrackAudioFeatures = (trackId: string) =>
  axios.get(`https://api.spotify.com/v1/audio-features/${trackId}`, { headers });

// Check if Users Follow a Playlist
export const doesUserFollowPlaylist = (playlistId: string, userId: string) =>
  axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/followers/contains?ids=${userId}`, {
    headers,
  });

// Add Tracks to a Playlist
export const addTracksToPlaylist = (playlistId: string, uris: string) => {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${uris}`;
  return axios({ method: 'post', url, headers });
};

// Follow a Playlist
export const followPlaylist = (playlistId: string) => {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}/followers`;
  return axios({ method: 'put', url, headers });
};

// Create a Playlist (The playlist will be empty until you add tracks)
export const createPlaylist = (userId: string, name: string) => {
  const url = `https://api.spotify.com/v1/users/${userId}/playlists`;
  const data = JSON.stringify({ name });
  return axios({ method: 'post', url, headers, data });
};

// Get Recommendations Based on Seeds
export const getRecommendationsForTracks = (tracks: IPlaylistTrackItem[]) => {
  const shuffledTracks = tracks.sort(() => 0.5 - Math.random());
  const seed_tracks = getTrackIds(shuffledTracks.slice(0, 5));
  const seed_artists = '';
  const seed_genres = '';

  return axios.get(
    `https://api.spotify.com/v1/recommendations?seed_tracks=${seed_tracks}&seed_artists=${seed_artists}&seed_genres=${seed_genres}`,
    {
      headers,
    },
  );
};

export const getUserInfo = () => {
  return (
    axios
      .all([getUser(), getFollowing(), getPlaylists(), getTopArtistsLong(), getTopTracksLong()])
      .then(
        axios.spread((user, following, playlists, topArtists, topTracks) => ({
          user: user.data,
          following: following.data,
          playlists: playlists.data,
          topArtists: topArtists.data,
          topTracks: topTracks.data,
        })),
      )
  )
}

export const getTrackInfo = (trackId: string) => {
  return (
    axios
      .all([getTrack(trackId), getTrackAudioAnalysis(trackId), getTrackAudioFeatures(trackId)])
      .then(
        axios.spread((track, audioAnalysis, audioFeatures) => ({
          track: track.data,
          audioAnalysis: audioAnalysis.data,
          audioFeatures: audioFeatures.data,
        })),
      )
  )
}
