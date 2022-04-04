import React from 'react';
import PropTypes from 'prop-types';
import { DayView } from '../Day';
import { Button } from '../Button';
import { useNavigate, generatePath } from 'react-router-dom';
import { useSavedGrid } from '../../contexts/SavedGridContext';
import { Card } from '../Card';
import { SLEEP_MODES } from '../../utils/utils';
import Styles from './Days.module.css';

function Days({ days = [], ...props }) {
  const { savedGrid, setSavedGrid } = useSavedGrid();
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
      {Object.keys(days).length ? (
        Object.keys(days).map((date, i) => {
          const data = days[date].data;
          const summary = days[date].summary;
          return (
            <Card
              key={date}
              data={<DayView data={data} deleteDay={() => handleDelete(date)}></DayView>}
              date={date}
              summary={Object.keys(summary).map((mode, i) => {
                return (
                  <div key={i}>
                    {SLEEP_MODES[mode]}:<span className={Styles.summary}> {summary[mode]}</span>
                  </div>
                );
              })}
              buttons={
                <>
                  <Button name={'Edit'} onClick={() => handleEdit(date)} />
                  <Button name={'Delete'} onClick={() => handleDelete(date)} />
                </>
              }
            />
          );
        })
      ) : (
        <Card />
      )}
    </div>
  );
}
Days.propTypes = {
  days: PropTypes.object,
  onDelete: PropTypes.func
};

export default Days;
