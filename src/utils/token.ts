export const getAccessTokenFromHash = () => {
  const hash = window.location.hash.substring(1);

  if (hash) {
    const accessToken = hash.split('&')[0].split('=')[1];
    return accessToken;
  }
}