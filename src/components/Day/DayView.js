import React from 'react';
import PropTypes from 'prop-types';
import { SummaryCell } from '../SummaryCell';
import Styles from './Day.module.css';
function DayView({ data }) {
  console.log(data);

  function clusterCells(cells) {
    let currentMode = '';
    let currentID;
    const clusteredCells = cells.reduce((clusteredCells = {}, current, i) => {
      if (currentMode === current.mode) {
        clusteredCells[`${currentMode}_${currentID}`].push(current);
      } else {
        currentMode = current.mode;
        currentID = i;
        clusteredCells[`${current.mode}_${i}`] = [];
        clusteredCells[`${current.mode}_${i}`].push(current);
      }

      return clusteredCells;
    });
    console.log(clusteredCells);

    return clusteredCells;
  }
  clusterCells(data);
  return (
    <div className={Styles.dayViewContainer}>
      {data.map((cell) => {
        return <SummaryCell cell={cell} key={cell.id} mode={cell.mode} />;
      })}
    </div>
  );
}
DayView.propTypes = {
  data: PropTypes.array
};

export default DayView;
