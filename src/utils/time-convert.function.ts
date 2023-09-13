export function timeConvert(time: string): string {
  const hours: string = time.split(' ')[1];
  return new Date('1970-01-01T' + hours + 'Z').toLocaleTimeString('en-US', {
    timeZone: 'UTC',
    hour12: true,
    hour: 'numeric',
  });
}
