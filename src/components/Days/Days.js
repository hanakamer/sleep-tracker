import React, { useContext } from 'react';
import { SavedGridContext } from '../../contexts/SavedGridContext';
import PropTypes from 'prop-types';
import { DayView } from '../Day';
import { Button } from '../Button';
import { useNavigate, generatePath } from 'react-router-dom';

function Days({ days = [], ...props }) {
  const { savedGrid, setSavedGrid } = useContext(SavedGridContext);
  const navigate = useNavigate();
  function handleDelete(date) {
    const newSavedGrid = { ...savedGrid };
    delete newSavedGrid[date];
    setSavedGrid(newSavedGrid);
  }
  function handleEdit(date) {
    navigate(generatePath('/editDay/:date', { date: date }));
  }
  return (
    <div>
      {Object.keys(days).map((date, i) => {
        const data = days[date];
        return (
          <React.Fragment key={date}>
            <DayView data={data} date={date} deleteDay={() => handleDelete(date)}></DayView>
            <Button name={'delete'} onClick={() => handleDelete(date)} />
            <Button name={'edit'} onClick={() => handleEdit(date)} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
Days.propTypes = {
  days: PropTypes.object,
  onDelete: PropTypes.func
};

export default Days;
