import React, { useState, useContext } from 'react';
import { SavedGridContext } from '../../contexts/SavedGridContext';
import { Day } from '../../components/Day';
import { FieldSleepMode } from '../../components/FieldSleepMode';
import { Button } from '../../components/Button';
import { DatePicker } from '../../components/DatePicker';
import Styles from '../../common/general.module.css';
import PropTypes from 'prop-types';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditDay() {
  let { date } = useParams();
  const [mode, setMode] = useState({ mode: 'sleep' });
  const { savedGrid, saveGrid } = useContext(SavedGridContext);
  const [grid, setGrid] = useState(savedGrid[date]);
  const navigate = useNavigate();

  function handleModeChange(e) {
    setMode({ mode: e.target.value });
  }

  function editDay() {
    saveGrid(grid, date);
    navigate('/');
  }

  return (
    <>
      <div className={Styles.sectionContainer}>
        <Day row={grid} mode={mode} changeRow={setGrid} />
      </div>

      <div className={Styles.sectionContainer}>
        <FieldSleepMode onChange={handleModeChange}></FieldSleepMode>
      </div>
      <div className={Styles.sectionContainer}>
        <DatePicker editDate={date}></DatePicker>
      </div>
      <div className={Styles.sectionContainer}>
        <Button onClick={editDay} name={'Save Sleep'} />
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
EditDay.propTypes = {
  onSaveGrid: PropTypes.func
};

export default EditDay;
