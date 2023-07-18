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
const getTopArtistsShort = () =>
  axios.get('/top/artists?limit=50&time_range=short_term', { ...requestConfig });

const getTopArtistsMedium = () =>
  axios.get('/top/artists?limit=50&time_range=medium_term', { ...requestConfig });

const getTopArtistsLong = () =>
  axios.get('/top/artists?limit=50&time_range=long_term', { ...requestConfig });

// Get User's Top Tracks
const getTopTracksShort = () =>
  axios.get('/top/tracks?limit=50&time_range=short_term', { ...requestConfig });

const getTopTracksMedium = () =>
  axios.get('/top/tracks?limit=50&time_range=medium_term', { ...requestConfig });

const getTopTracksLong = () =>
  axios.get('/top/tracks?limit=50&time_range=long_term', { ...requestConfig });

// Get an artist
export const getArtist = (artistId: number) => 
  axios.get(`https://api.spotify.com/v1/artists/${artistId}`, { headers });

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