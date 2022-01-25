import React from 'react';
import PropTypes from 'prop-types';
import { DayView } from '../Day';

function Days({ days = [] }) {
  return (
    <div>
      {days.map((day, i) => {
        return <DayView key={i} row={day}></DayView>;
      })}
    </div>
  );
}
Days.propTypes = {
  days: PropTypes.array
};

export default Days;
