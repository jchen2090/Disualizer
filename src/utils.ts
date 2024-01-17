export type formattedData = {
  mean: number;
  median: number;
  min: number;
  max: number;
  mode: string;
};

export const generateNumber = () => {
  return Math.floor(Math.random() * 6 + 1);
};

const getMean = (data: Array<number>) => {
  return data.reduce((acc, value) => acc + value, 0) / data.length;
};

const getMedian = (data: Array<number>) => {
  const sorted = data.sort((a, b) => a - b);
  const half = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 1 ? sorted[half] : (sorted[half - 1] + sorted[half]) / 2;
};

const getMinMax = (data: Array<number>) => {
  const sorted = data.sort((a, b) => a - b);
  return [sorted.at(0) || 0, sorted.at(-1) || 0];
};

const getMode = (data: Array<number>) => {
  const count: { [key: number]: number } = {};

  data.forEach((num) => {
    if (!(num in count)) {
      count[num] = 1;
    } else {
      count[num]++;
    }
  });

  let highestCount: number = 0;
  let mostRolledNumber!: string;

  Object.entries(count).forEach(([number, count]) => {
    if (count > highestCount) {
      mostRolledNumber = number;
      highestCount = count;
    }
  });
  return mostRolledNumber;
};

export const formatData = (data: Array<number>): formattedData => {
  const [min, max] = getMinMax(data);

  getMode(data);
  return {
    mean: getMean(data),
    median: getMedian(data),
    min: min,
    max: max,
    mode: getMode(data),
  };
};
