// Format milliseconds into MM:SS
export const formatDuration = (millis: number) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = parseInt(((millis % 60000) / 1000).toFixed(0));
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Get year from YYYY-MM-DD
export const getYear = (date: string) => date.split('-')[0];

export const formatWithCommas = (n: number) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
