export type formattedData = {
  mean: number;
  median: number;
  min: number;
  max: number;
  mode: number[];
  frequencies: { [key: number]: number };
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

const getFrequencies = (data: Array<number>) => {
  const count: { [key: number]: number } = {};

  data.forEach((num) => {
    if (!(num in count)) {
      count[num] = 1;
    } else {
      count[num]++;
    }
  });
  return count;
};

/**
 * If there is no single mode (i,e [1, 2, 3]) where all rolls occur once
 * Then we should return [1, 2, 3]
 */
const getMode = (data: Array<number>) => {
  const frequency = getFrequencies(data);
  let highestCount: number = 0;
  let mode: number[] = [];

  Object.entries(frequency).forEach(([rollNumber, count]) => {
    const number = parseInt(rollNumber);

    if (count === highestCount) {
      mode.push(number);
    } else if (count > highestCount) {
      mode = [];
      mode.push(number);
      highestCount = count;
    }
  });
  return mode;
};

export const formatData = (data: Array<number>): formattedData => {
  const [min, max] = getMinMax(data);

  return {
    mean: getMean(data),
    median: getMedian(data),
    min: min,
    max: max,
    mode: getMode(data),
    frequencies: getFrequencies(data),
  };
};
