export function getFormattedTime(ms) {

  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const minutesDisplay = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsDisplay = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${minutesDisplay}:${secondsDisplay}`;
}

export function getFormattedTimeSettings(ms) {
    
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);

  return `${minutes}`;
}
