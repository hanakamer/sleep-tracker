import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from '../Cell';
import DayCSS from './Day.module.css';

function DayView({ row }) {
  return (
    <div className={DayCSS.container}>
      {row.map((cell) => {
        return <Cell cell={cell} key={cell.id} mode={cell.mode} />;
      })}
    </div>
  );
}
DayView.propTypes = {
  row: PropTypes.array,
  mode: PropTypes.object,
  changeRow: PropTypes.func
};

export default DayView;
