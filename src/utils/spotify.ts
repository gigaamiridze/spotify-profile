import axios from 'axios';
import { requestConfig } from '../config';

const { headers } = requestConfig;

// Get Current User's Profile
const getUser = () => axios.get('/', { ...requestConfig });

// Get User's Followed Artists
const getFollowing = () => axios.get('/following?type=artist', { ...requestConfig });

// Get List of Current User's Playlists
const getPlaylists = () => axios.get('/playlists', { ...requestConfig });

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

// Get an Artist
export const getArtist = (artistId: string) =>
  axios.get(`https://api.spotify.com/v1/artists/${artistId}`, { headers });

// Get a Track
const getTrack = (trackId: string) =>
  axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, { headers });

// Get Audio Analysis for a Track
const getTrackAudioAnalysis = (trackId: string) =>
  axios.get(`https://api.spotify.com/v1/audio-analysis/${trackId}`, { headers });

// Get Audio Features for a Track
const getTrackAudioFeatures = (trackId: string) =>
  axios.get(`https://api.spotify.com/v1/audio-features/${trackId}`, { headers });

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
