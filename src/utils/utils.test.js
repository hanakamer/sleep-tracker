import { clusterBase, calculatePercentage } from './utils';
const dataTest = [
  {
    id: 0,
    mode: 'active',
    selected: false,
    time: '00:15'
  },
  {
    id: 1,
    mode: 'active',
    selected: false,
    time: '00:30'
  },
  {
    id: 2,
    mode: 'fallingAsleep',
    selected: false,
    time: '00:45'
  },
  {
    id: 3,
    mode: 'fallingAsleep',
    selected: false,
    time: '01:00'
  },
  {
    id: 4,
    mode: 'sleep',
    selected: false,
    time: '01:15'
  },
  {
    id: 5,
    mode: 'sleep',
    selected: false,
    time: '01:30'
  },
  {
    id: 6,
    mode: 'sleep',
    selected: false,
    time: '01:45'
  },
  {
    id: 7,
    mode: 'active',
    selected: false,
    time: '02:00'
  },
  {
    id: 8,
    mode: 'sleep',
    selected: false,
    time: '02:15'
  },
  {
    id: 9,
    mode: 'sleep',
    selected: false,
    time: '02:30'
  },
  {
    id: 10,
    mode: 'sleep',
    selected: false,
    time: '02:45'
  }
];

const cellsResult = [
  {
    startIndex: 0,
    endIndex: 1,
    mode: 'active'
  },
  {
    startIndex: 2,
    endIndex: 3,
    mode: 'fallingAsleep'
  },
  {
    startIndex: 4,
    endIndex: 6,
    mode: 'sleep'
  },
  {
    startIndex: 7,
    endIndex: 7,
    mode: 'active'
  },
  {
    startIndex: 8,
    endIndex: 10,
    mode: 'sleep'
  }
];
describe('clusterBase()', () => {
  it('returns cells grouped by mode', () => {
    const result = clusterBase(dataTest);
    expect(result).toEqual(cellsResult);
  });
});

describe('calculatePrecentage()', () => {
  it('returns percantage of partial value in total value', () => {
    const result = calculatePercentage(10, 20);
    expect(result).toEqual(50);
  });
  it('returns integer', () => {
    const result = calculatePercentage(25, 75);
    expect(result).toEqual(33);
  });
});
