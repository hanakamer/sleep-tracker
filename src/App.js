import React, { useState } from 'react';
import Day from './components/day';
import DayView from './components/dayView';
import Button from './components/Button';
import AppCSS from './App.module.css';

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

function App() {
  const [mode, setMode] = useState({ mode: 'sleep' });
  const [grid, setGrid] = useState(ROW_DATA);
  const [savedGrid, setSavedGrid] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
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
    setSavedGrid((prev) => {
      return [...prev, grid];
    });
    clearGrid();
  }

  return (
    <div className={AppCSS.App}>
      <div className={AppCSS.mainContainer}>
        <header className={AppCSS.sectionContainer}>
          <h1> Sleep Tracker </h1>
        </header>
        <div className={AppCSS.daysContainer}>
          {savedGrid.map((day, i) => {
            return <DayView key={i} row={day} />;
          })}
        </div>

        <div>
          <Day row={grid} mode={mode} changeRow={setGrid} />
        </div>

        <div className={AppCSS.sectionContainer}>
          <input onChange={handleModeChange} id="active" type="radio" value="active" name="mode" />
          <label htmlFor="active">Active</label>

          <input
            onChange={handleModeChange}
            id="falling-asleep"
            type="radio"
            value="falling-asleep"
            name="mode"
          />
          <label htmlFor="falling-asleep">Falling asleep</label>
          <input
            onChange={handleModeChange}
            id="sleep"
            type="radio"
            value="sleep"
            name="mode"
            defaultChecked
          />
          <label htmlFor="sleep">Sleep</label>
        </div>
        <div className={AppCSS.sectionContainer}>
          <input type="date" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <div className={AppCSS.sectionContainer}>
          <Button onClick={saveGrid} name={'Save Sleep'} />
        </div>
      </div>
    </div>
  );
}

export default App;
