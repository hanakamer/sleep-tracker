import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from '../Cell';
import Styles from './Day.module.css';

function DayView({ data, date, ...props }) {
  return (
    <div className={Styles.container}>
      <p>{date}</p>
      {data.map((cell) => {
        return <Cell cell={cell} key={cell.id} mode={cell.mode} />;
      })}
    </div>
  );
}
DayView.propTypes = {
  data: PropTypes.array,
  mode: PropTypes.object,
  changeRow: PropTypes.func,
  date: PropTypes.string
};

export default DayView;
