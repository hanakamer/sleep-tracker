import React, { useState } from 'react';
import { Day } from '../../components/Day';
import { FieldSleepMode } from '../../components/FieldSleepMode';
import { Button } from '../../components/Button';
import { DatePicker } from '../../components/DatePicker';
import { useNavigate, useParams } from 'react-router-dom';
import { useSavedGrid } from '../../contexts/SavedGridContext';
import { EditScreen } from '../../components/EditScreen';

function EditDay() {
  let { date } = useParams();
  const [mode, setMode] = useState({ mode: 'sleep' });
  const { savedGrid, saveGrid } = useSavedGrid();
  const [grid, setGrid] = useState(savedGrid[date].data);
  const navigate = useNavigate();

  function handleModeChange(e) {
    setMode({ mode: e.target.value });
  }

  function editDay() {
    saveGrid(grid, date);
    navigate('/');
  }

  return (
    <EditScreen
      cells={<Day row={grid} mode={mode} changeRow={setGrid} />}
      sleepModes={<FieldSleepMode onChange={handleModeChange} />}
      date={<DatePicker disabled={date} id={date} />}
      buttons={
        <>
          <Button onClick={editDay} name={'Save Sleep'} />
        </>
      }
    />
  );
}

export default EditDay;
