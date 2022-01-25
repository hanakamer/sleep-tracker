import React, { useState } from 'react';
import { Day } from '../Day';
import { RadioButton } from '../RadioButton';
import { Button } from '../Button';
import generalStyles from '../../common/general.module.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
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

function DayRecorder({ ...props }) {
  const [mode, setMode] = useState({ mode: 'sleep' });
  const [grid, setGrid] = useState(ROW_DATA);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
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
  function saveGrid() {
    // setSavedGrid((prev) => {
    //   return [...prev, grid];
    // });
    props.onSaveGrid(grid);
    clearGrid();
    navigate('/');
  }
  return (
    <React.Fragment>
      <div className={generalStyles.sectionContainer}>
        <Day row={grid} mode={mode} changeRow={setGrid} />
      </div>

      <div className={generalStyles.sectionContainer}>
        <RadioButton onChange={handleModeChange} value="active" />
        <RadioButton onChange={handleModeChange} value="sleep" defaultChecked={true} />
        <RadioButton onChange={handleModeChange} value="fallingAsleep" />
      </div>
      <div className={generalStyles.sectionContainer}>
        <input type="date" selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
      <div className={generalStyles.sectionContainer}>
        <Button onClick={saveGrid} name={'Save Sleep'} />
      </div>
    </React.Fragment>
  );
}
DayRecorder.propTypes = {
  onSaveGrid: PropTypes.func
};

export default DayRecorder;
