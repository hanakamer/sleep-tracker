import React, { useState, useContext } from 'react';
import { SavedGridContext } from '../../contexts/SavedGridContext';
import { Day } from '../Day';
import { RadioButton } from '../RadioButton';
import { Button } from '../Button';
import { HomeButton } from '../HomeButton';
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

function EditDay({ ...props }) {
  let { date } = useParams();
  const [mode, setMode] = useState({ mode: 'sleep' });
  const { savedGrid } = useContext(SavedGridContext);
  const [grid, setGrid] = useState(savedGrid[date]);
  const navigate = useNavigate();

  function handleModeChange(e) {
    setMode({ mode: e.target.value });
  }

  function editDay() {
    props.onSaveGrid(grid, date);
    navigate('/');
  }

  return (
    <>
      <div className={generalStyles.sectionContainer}>
        <Day row={grid} mode={mode} changeRow={setGrid} />
      </div>

      <div className={generalStyles.sectionContainer}>
        <RadioButton onChange={handleModeChange} value="active" />
        <RadioButton onChange={handleModeChange} value="sleep" defaultChecked={true} />
        <RadioButton onChange={handleModeChange} value="fallingAsleep" />
      </div>
      <div className={generalStyles.sectionContainer}>
        <input disabled type="date" value={date} />
      </div>
      <div className={generalStyles.sectionContainer}>
        <Button onClick={editDay} name={'Save Sleep'} />
        <HomeButton />
      </div>
    </>
  );
}
EditDay.propTypes = {
  onSaveGrid: PropTypes.func
};

export default EditDay;