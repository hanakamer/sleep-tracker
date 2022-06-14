import React, { useState, useEffect } from 'react';
import { Day } from '../../components/Day';
import { Button } from '../../components/Button';
import { DatePicker } from '../../components/DatePicker';
import { FieldSleepMode } from '../../components/FieldSleepMode';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { createNewDayCells } from '../../utils/utils';
import { useSavedGrid } from '../../contexts/SavedGridContext';
import { EditScreen } from '../../components/EditScreen';

const ROW_DATA = createNewDayCells();

function CreateDay() {
  let { date: editDate } = useParams();
  const [mode, setMode] = useState({ mode: 'sleep' });
  const [grid, setGrid] = useState(ROW_DATA);
  const [startDate, setStartDate] = useState(editDate);
  const [isPresent, setIsPresent] = useState(false);
  const navigate = useNavigate();
  const { savedGrid, saveGrid } = useSavedGrid();

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
    <EditScreen
      cells={<Day row={grid} mode={mode} changeRow={setGrid} />}
      warning={
        isPresent && (
          <p>
            This date is already saved please select another day or edit{' '}
            <Link to={{ pathname: `/editDay/${startDate}` }}>{startDate}</Link>
          </p>
        )
      }
      sleepModes={<FieldSleepMode onChange={handleModeChange}></FieldSleepMode>}
      date={
        <DatePicker
          value={startDate}
          disabled={editDate}
          onChange={handleDateChange}
          id={startDate ? startDate : 'initialID'}></DatePicker>
      }
      buttons={
        <Button disabled={startDate ? false : true} onClick={createDay} name={'Save Sleep'} />
      }
    />
  );
}

export default CreateDay;
