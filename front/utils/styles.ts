export const cx = (...classNames: (string | undefined)[]) =>
  classNames.filter(Boolean).join(' ');
