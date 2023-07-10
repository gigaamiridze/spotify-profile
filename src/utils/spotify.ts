import axios from 'axios';
import { requestConfig } from '../config';

// Get Current User's Profile
const getUser = () => axios.get('/', { ...requestConfig });

// Get User's Followed Artists
const getFollowing = () => axios.get('/following?type=artist', { ...requestConfig });

// Get a List of Current User's Playlists
const getPlaylists = () => axios.get('/playlists', { ...requestConfig });

export const getUserInfo = () => {
  return (
    axios
      .all([getUser(), getFollowing(), getPlaylists()])
      .then(
        axios.spread((user, following, playlists) => ({
          user: user.data,
          following: following.data,
          playlists: playlists.data,
        })),
      )
  )
}