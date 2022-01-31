import React, { useState, useContext, useEffect } from 'react';
import { SavedGridContext } from '../../contexts/SavedGridContext';
import { Day } from '../Day';
import { RadioButton } from '../RadioButton';
import { HomeButton } from '../HomeButton';
import { Button } from '../Button';
import generalStyles from '../../common/general.module.css';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';

const ROW_LENGTH = 96;
const ROW_DATA = [];

for (let col = 0; col < ROW_LENGTH; col++) {
  const cell = {
    id: col,
    mode: 'active',
    selected: false
  };
  ROW_DATA.push(cell);
}

function SaveDay({ ...props }) {
  let { date: editDate } = useParams();
  const [mode, setMode] = useState({ mode: 'sleep' });
  const [grid, setGrid] = useState(ROW_DATA);
  const [startDate, setStartDate] = useState(editDate);
  const [isPresent, setIsPresent] = useState(false);
  const navigate = useNavigate();
  const { savedGrid } = useContext(SavedGridContext);

  useEffect(() => {
    if (editDate) {
      console.log(editDate, 'in if');
      const dayToEdit = savedGrid.filter((day) => day.date === editDate);
      console.log(dayToEdit);
      if (dayToEdit.length > 0) {
        setGrid(dayToEdit[0].data);
      } else {
        navigate('/DayRecorder');
      }
    }
  }, [editDate, navigate, savedGrid]);

  function handleModeChange(e) {
    setMode({ mode: e.target.value });
  }
  function clearGrid() {
    setGrid((prev) => {
      return prev.map((cell) => {
        return {
          ...cell,
          selected: false,
          mode: 'active'
        };
      });
    });
  }
  function saveDay() {
    if (savedGrid[startDate]) {
      setIsPresent(true);
    } else {
      setIsPresent(false);
      props.onSaveGrid(grid, startDate);
      clearGrid();
      navigate('/');
    }
  }
  function handleDateChange(event) {
    console.log(event);
    const newDate = event.target.value;
    setStartDate(newDate);
  }
  return (
    <>
      <div className={generalStyles.sectionContainer}>
        <Day row={grid} mode={mode} changeRow={setGrid} />
      </div>
      {isPresent && (
        <div className={generalStyles.sectionContainer}>
          <p>
            date:{startDate} is already saved please select another day or go back to{' '}
            {<HomeButton />} page to edit this day
          </p>
        </div>
      )}

      <div className={generalStyles.sectionContainer}>
        <RadioButton onChange={handleModeChange} value="active" />
        <RadioButton onChange={handleModeChange} value="sleep" defaultChecked={true} />
        <RadioButton onChange={handleModeChange} value="fallingAsleep" />
      </div>
      <div className={generalStyles.sectionContainer}>
        <input
          disabled={editDate ? true : false}
          type="date"
          selected={startDate}
          onChange={handleDateChange}
          value={editDate}
        />
      </div>
      <div className={generalStyles.sectionContainer}>
        <Button disabled={startDate ? false : true} onClick={saveDay} name={'Save Sleep'} />
      </div>
    </>
  );
}
SaveDay.propTypes = {
  onSaveGrid: PropTypes.func
};

export default SaveDay;
