import { getAccessToken } from '../utils/token';

const accessToken = getAccessToken();

export const requestConfig = {
  baseURL: 'https://api.spotify.com/v1/me',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  }
}