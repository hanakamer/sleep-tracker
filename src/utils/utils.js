export function calculateTime(totalCells, cellNo) {
  const aDayInMin = 1440;
  const result = (aDayInMin / totalCells) * cellNo;
  return minsToHours(result);
}
export function minsToHours(totalminutes) {
  const hours = Math.floor(totalminutes / 60);
  const minutes = totalminutes % 60;
  let resultH = hours > 23 ? hours - 24 : hours;
  resultH = resultH.toString().length < 2 ? `0${resultH}` : resultH;
  let resultM = minutes.toString().length < 2 ? `0${minutes}` : minutes;
  return `${resultH}:${resultM}`;
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
