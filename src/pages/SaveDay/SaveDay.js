import React, { useState, useContext, useEffect } from 'react';
import { SavedGridContext } from '../../contexts/SavedGridContext';
import { Day } from '../../components/Day';
import { RadioButton } from '../../components/RadioButton';
import { Button } from '../../components/Button';
import Styles from '../../common/general.module.css';
import PropTypes from 'prop-types';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { createNewDayCells } from '../../utils/utils';

const ROW_DATA = createNewDayCells();
console.log(ROW_DATA);

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
      <div className={Styles.sectionContainer}>
        <Day row={grid} mode={mode} changeRow={setGrid} />
      </div>
      {isPresent && (
        <div className={Styles.sectionContainer}>
          <p>
            date:{startDate} is already saved please select another day or go back to{' '}
            <Link to="/" name={'Home'}>
              Home
            </Link>{' '}
            page to edit this day
          </p>
        </div>
      )}

      <div className={Styles.sectionContainer}>
        <RadioButton onChange={handleModeChange} value="active" />
        <RadioButton onChange={handleModeChange} value="sleep" defaultChecked={true} />
        <RadioButton onChange={handleModeChange} value="fallingAsleep" />
      </div>
      <div className={Styles.sectionContainer}>
        <input
          disabled={editDate ? true : false}
          type="date"
          selected={startDate}
          onChange={handleDateChange}
          value={editDate}
        />
      </div>
      <div className={Styles.sectionContainer}>
        <Button disabled={startDate ? false : true} onClick={saveDay} name={'Save Sleep'} />
      </div>
    </>
  );
}
SaveDay.propTypes = {
  onSaveGrid: PropTypes.func
};

export default SaveDay;
