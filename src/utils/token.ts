import { Spotify } from '../constants';

const EXPIRATION_TIME = 3600 * 1000;

const getAccessTokenFromHash = () => {
  const hash = location.hash.substring(1);

  if (hash) {
    const accessToken = hash.split('&')[0].split('=')[1];
    return accessToken;
  }
}

const getTokenTimestamp = () => localStorage.getItem(Spotify.TOKEN_TIMESTAMP);
const getLocalAccessToken = () => localStorage.getItem(Spotify.ACCESS_TOKEN);

const setTokenTimestamp = () => localStorage.setItem(Spotify.TOKEN_TIMESTAMP, String(Date.now()));
const setLocalAccessToken = (token: string) => {
  setTokenTimestamp();
  localStorage.setItem(Spotify.ACCESS_TOKEN, token);
};

export const getAccessToken = () => {
  const accessToken = getAccessTokenFromHash();
  const localAccessToken = getLocalAccessToken();

  if ((!localAccessToken || localAccessToken === 'undefined') && accessToken) {
    setLocalAccessToken(accessToken);
    return accessToken;
  }

  return localAccessToken;
}

export const handleExpiredToken = () => {
  const tokenTimestamp = Number(getTokenTimestamp());

  if (Date.now() - tokenTimestamp > EXPIRATION_TIME) {
    handleLogout();
  }
}

export const handleLogout = () => {
  localStorage.removeItem(Spotify.TOKEN_TIMESTAMP);
  localStorage.removeItem(Spotify.ACCESS_TOKEN);
  location.reload();
}
