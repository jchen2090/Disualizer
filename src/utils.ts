export const generateNumber = () => {
  return Math.floor(Math.random() * 6 + 1);
};

export const roundToMillionths = (decimal: number) => {
  return Math.round((decimal + Number.EPSILON) * 1000000) / 1000000;
};
