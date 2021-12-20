import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
import './components/cell.css';
import Day from './components/day';
import DayView from './components/dayView';

const ROW_LENGTH = 20;
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
    <div className="App">
      <header className="App-header">Sleep Tracker</header>
      {savedGrid.map((day, i) => {
        return <DayView key={i} row={day} />;
      })}
      <Day row={grid} mode={mode} changeRow={setGrid} />
      <button onClick={clearGrid}>Clear</button>
      <button onClick={saveGrid}>Save</button>
      <div>
        <input
          onChange={handleModeChange}
          id="sleep"
          type="radio"
          value="sleep"
          name="mode"
          defaultChecked
        />
        <label htmlFor="sleep">Sleep</label>
        <input onChange={handleModeChange} id="awake" type="radio" value="awake" name="mode" />
        <label htmlFor="awake">Awake</label>
        <input onChange={handleModeChange} id="active" type="radio" value="active" name="mode" />
        <label htmlFor="active">Active</label>
      </div>
    </div>
  );
}

export default App;
