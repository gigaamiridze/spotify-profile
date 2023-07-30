import { Spotify } from '../constants';

const getAccessTokenFromHash = () => {
  const hash = location.hash.substring(1);

  if (hash) {
    const accessToken = hash.split('&')[0].split('=')[1];
    return accessToken;
  }
}

export const getLocalAccessToken = () => localStorage.getItem(Spotify.ACCESS_TOKEN);
const setLocalAccessToken = (token: string) => localStorage.setItem(Spotify.ACCESS_TOKEN, token);

export const getAccessToken = () => {
  const accessToken = getAccessTokenFromHash();
  const localAccessToken = getLocalAccessToken();

  if ((!localAccessToken || localAccessToken === 'undefined') && accessToken) {
    setLocalAccessToken(accessToken);
    return accessToken;
  }

  return localAccessToken;
}

export const handleLogout = () => {
  localStorage.removeItem(Spotify.ACCESS_TOKEN);
  location.reload();
}
