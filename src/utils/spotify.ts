import axios from 'axios';
import { getAccessToken } from './token';

const accessToken = getAccessToken();

const headers = {
  Authorization: `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
};

// Get Current User's Profile
const getUser = () => axios.get('https://api.spotify.com/v1/me', { headers });

// Get User's Followed Artists
const getFollowing = () =>
  axios.get('https://api.spotify.com/v1/me/following?type=artist', { headers });

// Get a List of Current User's Playlists
const getPlaylists = () => axios.get('https://api.spotify.com/v1/me/playlists', { headers });