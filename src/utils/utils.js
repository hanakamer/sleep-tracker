export function calculateTime(totalCells, cellNo) {
  const aDayInMin = 1440;
  const result = (aDayInMin / totalCells) * cellNo;
  return minsToTime(result);
}
export function minsToTime(totalminutes) {
  const hours = Math.floor(totalminutes / 60);
  const minutes = totalminutes % 60;
  let resultH = hours > 23 ? hours - 24 : hours;
  resultH = resultH.toString().length < 2 ? `0${resultH}` : resultH;
  let resultM = minutes.toString().length < 2 ? `0${minutes}` : minutes;
  return `${resultH}:${resultM}`;
}
export function minsToHours(totalMinutes) {
  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;
  console.log(totalMinutes, hours, minutes);
  if (hours === 0) {
    return `${minutes} mins`;
  } else if (minutes === 0) {
    return `${hours} hours`;
  }
  return `${hours}:${minutes} hours`;
}
export function createNewDayCells() {
  const ROW_LENGTH = NUMBER_OF_CELLS;
  const ROW_DATA = [];
  for (let col = 0; col < ROW_LENGTH; col++) {
    const time = calculateTime(ROW_LENGTH, col + 1);
    const cell = {
      id: col,
      mode: 'active',
      selected: false,
      time: time
    };
    ROW_DATA.push(cell);
  }
  return ROW_DATA;
}
export function calculateSummaryOfSleep(cells) {
  const reducer = (map, val) => {
    if (map[val] == null) {
      map[val] = 1;
    } else {
      ++map[val];
    }
    return map;
  };
  const result = cells.map((cell) => cell.mode).reduce(reducer, {});
  return result;
}
export function clusterCells(cells) {
  let currentMode = null;
  let obj = {
    startIndex: null,
    endIndex: null,
    mode: null
  };
  const clusteredCells = cells.reduce((result, current, i) => {
    if (currentMode !== current.mode && currentMode != null) {
      obj = { ...obj, endIndex: i - 1 };
      result.push(obj);
      currentMode = current.mode;
      obj = {
        endIndex: null,
        startIndex: i,
        mode: current.mode
      };
    }
    if (i === cells.length - 1) {
      obj = { ...obj, endIndex: i };
      result.push(obj);
    }
    if (currentMode === null) {
      currentMode = current.mode;
      obj = { ...obj, startIndex: i, mode: current.mode };
    }

    return result;
  }, []);

  return clusteredCells;
}
export function calculatePercentage(partialVal, totalVal) {
  if (partialVal === 0) {
    return 0;
  }
  return Math.round((partialVal * 100) / totalVal);
}
export const SLEEP_MODES = {
  sleep: 'Sleep',
  active: 'Active',
  fallingAsleep: 'Falling asleep'
};
export const NUMBER_OF_CELLS = 96;
