// Format milliseconds into MM:SS
export const formatDuration = (millis: number) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = parseInt(((millis % 60000) / 1000).toFixed(0));
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Get year from YYYY-MM-DD
export const getYear = (date: string) => date.split('-')[0];

// Transform Pitch Class Notation to string
export const parsePitchClass = (note: any) => {
  let key = note;

  switch (note) {
    case 0:
      key = 'C';
      break;
    case 1:
      key = 'D♭';
      break;
    case 2:
      key = 'D';
      break;
    case 3:
      key = 'E♭';
      break;
    case 4:
      key = 'E';
      break;
    case 5:
      key = 'F';
      break;
    case 6:
      key = 'G♭';
      break;
    case 7:
      key = 'G';
      break;
    case 8:
      key = 'A♭';
      break;
    case 9:
      key = 'A';
      break;
    case 10:
      key = 'B♭';
      break;
    case 11:
      key = 'B';
      break;
    default:
      return null;
  }

  return key;
}

export const formatWithCommas = (n: number) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
