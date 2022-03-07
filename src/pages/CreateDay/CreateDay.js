import React, { useState, useContext, useEffect } from 'react';
import { SavedGridContext } from '../../contexts/SavedGridContext';
import { Day } from '../../components/Day';
import { RadioButton } from '../../components/RadioButton';
import { Button } from '../../components/Button';
import { DatePicker } from '../../components/DatePicker';
import GeneralStyles from '../../common/general.module.css';
import PropTypes from 'prop-types';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { createNewDayCells } from '../../utils/utils';

const ROW_DATA = createNewDayCells();

function CreateDay() {
  let { date: editDate } = useParams();
  const [mode, setMode] = useState({ mode: 'sleep' });
  const [grid, setGrid] = useState(ROW_DATA);
  const [startDate, setStartDate] = useState(editDate);
  const [isPresent, setIsPresent] = useState(false);
  const navigate = useNavigate();
  const { savedGrid, saveGrid } = useContext(SavedGridContext);

  useEffect(() => {
    if (editDate) {
      const dayToEdit = savedGrid.filter((day) => day.date === editDate);
      setGrid(dayToEdit[0].data);
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
  function createDay() {
    if (savedGrid[startDate]) {
      setIsPresent(true);
    } else {
      setIsPresent(false);
      saveGrid(grid, startDate);
      clearGrid();
      navigate('/');
    }
  }
  function handleDateChange(event) {
    const newDate = event.target.value;
    setStartDate(newDate);
  }
  return (
    <>
      <div className={GeneralStyles.sectionContainer}>
        <Day row={grid} mode={mode} changeRow={setGrid} />
      </div>
      {isPresent && (
        <div className={GeneralStyles.sectionContainer}>
          <p>
            date:{startDate} is already saved please select another day or go back to{' '}
            <Link to="/">Home</Link> page to edit this day
          </p>
        </div>
      )}

      <div className={GeneralStyles.sectionContainer}>
        <RadioButton onChange={handleModeChange} value="active" />
        <RadioButton onChange={handleModeChange} value="sleep" defaultChecked={true} />
        <RadioButton onChange={handleModeChange} value="fallingAsleep" />
      </div>
      <div className={GeneralStyles.sectionContainer}>
        <DatePicker
          startDate={startDate}
          editDate={editDate}
          onChange={handleDateChange}></DatePicker>
      </div>
      <div className={GeneralStyles.sectionContainer}>
        <Button disabled={startDate ? false : true} onClick={createDay} name={'Save Sleep'} />
      </div>
    </>
  );
}
CreateDay.propTypes = {
  onSaveGrid: PropTypes.func
};

export default CreateDay;
