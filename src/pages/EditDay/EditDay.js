import React, { useState, useContext } from 'react';
import { SavedGridContext } from '../../contexts/SavedGridContext';
import { Day } from '../../components/Day';
import { RadioButton } from '../../components/RadioButton';
import { Button } from '../../components/Button';
import Styles from '../../common/general.module.css';
import PropTypes from 'prop-types';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { calculateTime } from '../../utils/utils';
const ROW_LENGTH = 96;
const ROW_DATA = [];
const SPAN = 6;

for (let col = 0; col < ROW_LENGTH; col++) {
  const time = calculateTime(ROW_LENGTH, col + 1, SPAN);
  const cell = {
    id: col,
    mode: 'active',
    selected: false,
    time: time
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
      <div className={Styles.sectionContainer}>
        <Day row={grid} mode={mode} changeRow={setGrid} />
      </div>

      <div className={Styles.sectionContainer}>
        <RadioButton onChange={handleModeChange} value="active" />
        <RadioButton onChange={handleModeChange} value="sleep" defaultChecked={true} />
        <RadioButton onChange={handleModeChange} value="fallingAsleep" />
      </div>
      <div className={Styles.sectionContainer}>
        <input disabled type="date" value={date} />
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
