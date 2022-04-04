import React from 'react';
import PropTypes from 'prop-types';
import { SummaryCell } from '../SummaryCell';
import Styles from './Day.module.css';
function DayView({ data }) {
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
