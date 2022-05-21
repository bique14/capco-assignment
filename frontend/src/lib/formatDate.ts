export const formatDate = (dStr: string): string => {
  const month: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date(dStr);

  return `${
    month[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};
