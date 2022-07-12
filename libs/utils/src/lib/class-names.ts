export const classNames = (...classNames: string[]): string =>
  classNames.filter(Boolean).join(' ').replace(/\s\s+/g, ' ').trim();
