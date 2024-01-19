import { Roll } from "../context/DashboardContext";

const getMean = (rollData: Array<Roll>) => {
  const data = rollData.map((rolls) => rolls.roll);
  return data.reduce((acc, value) => acc + value, 0) / data.length;
};

const getMedian = (rollData: Array<Roll>) => {
  const data = rollData.map((rolls) => rolls.roll);
  const sorted = data.sort((a, b) => a - b);
  const half = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 1 ? sorted[half] : (sorted[half - 1] + sorted[half]) / 2;
};

const getMinMax = (rollData: Array<Roll>) => {
  const data = rollData.map((rolls) => rolls.roll);
  const sorted = data.sort((a, b) => a - b);
  return [sorted.at(0) || 0, sorted.at(-1) || 0];
};

const getFrequencies = (rollData: Array<Roll>) => {
  const count: { [key: number]: number } = {};
  const data = rollData.map((rolls) => rolls.roll);

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
const getMode = (rollData: Array<Roll>) => {
  const frequency = getFrequencies(rollData);
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

export const useStats = () => {
  return {
    getMean,
    getMedian,
    getMinMax,
    getFrequencies,
    getMode,
  };
};
