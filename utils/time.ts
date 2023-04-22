export function formatDigits(n: number) {
  return n >= 10 ? String(n) : `0${n}`;
}

export function formatTime(time: number) {
  const minutes = formatDigits(Math.floor(time / 60));
  const seconds = formatDigits(time % 60);
  return `${minutes}:${seconds}`;
}
