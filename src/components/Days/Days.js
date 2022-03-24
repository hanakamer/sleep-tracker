import React from 'react';
import PropTypes from 'prop-types';
import { DayView } from '../Day';
import { Button } from '../Button';
import { useNavigate, generatePath } from 'react-router-dom';
import { useSavedGrid } from '../../contexts/SavedGridContext';
import { Card } from '../Card';
import StylesGeneral from '../../common/general.module.css';
import { SleepModes } from '../../utils/utils';

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
    <div className={StylesGeneral.verticalAlignLargeContainer}>
      {Object.keys(days).length
        ? Object.keys(days).map((date, i) => {
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
                      {SleepModes[mode]}: {summary[mode]}
                    </div>
                  );
                })}
                buttons={
                  <>
                    <Button name={'delete'} onClick={() => handleDelete(date)} />
                    <Button name={'edit'} onClick={() => handleEdit(date)} />
                  </>
                }
              />
            );
          })
        : `No sleep recorded yet`}
    </div>
  );
}
Days.propTypes = {
  days: PropTypes.object,
  onDelete: PropTypes.func
};

export default Days;
