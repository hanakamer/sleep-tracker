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
export function minsToHours(totalminutes) {
  let hours = Math.floor(totalminutes / 60);
  let minutes = totalminutes % 60;
  console.log(totalminutes, hours, minutes);
  if (hours === 0) {
    return `${minutes} mins`;
  } else if (minutes === 0) {
    return `${hours} hours`;
  }
  return `${hours}:${minutes} hours`;
}
export function createNewDayCells() {
  const ROW_LENGTH = 96;
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
export const SleepModes = {
  sleep: 'Sleep',
  active: 'Active',
  fallingAsleep: 'Falling asleep'
};
