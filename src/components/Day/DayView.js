import React from 'react';
import PropTypes from 'prop-types';
import { SummaryCell } from '../SummaryCell';
import Styles from './Day.module.css';
import { clusterBase } from '../../utils/utils';
function DayView({ data }) {
  const clusteredCells = clusterBase(data);
  return (
    <div className={Styles.dayViewContainer}>
      {clusteredCells.map((cell) => {
        return <SummaryCell key={cell.startIndex} cell={cell} mode={cell.mode} />;
      })}
    </div>
  );
}
DayView.propTypes = {
  data: PropTypes.array
};

export default DayView;
