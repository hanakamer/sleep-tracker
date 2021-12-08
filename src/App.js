import React, { useState, useEffect, useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
import './components/cell.css';
import Cell from './components/cell';

const GRID_ROW_LENGTH = 1;
const GRID_COL_LENGTH = 20;
const GRID_DATA = [];

for (let row = 0; row < GRID_ROW_LENGTH; row++) {
  for (let col = 0; col < GRID_COL_LENGTH; col++) {
    const cell = {
      row: row,
      col: col,
      id: row * GRID_COL_LENGTH + col,
      mode: 'active',
      selected: false
    };
    GRID_DATA.push(cell);
  }
}

const ROWS_ARRAY = new Array(GRID_ROW_LENGTH).fill(undefined);

function App() {
  const [grid, setGrid] = useState(GRID_DATA);
  const [range, setRange] = useState({
    start: null,
    end: null
  });
  const [mouseStatus, setMouseStatus] = useState({
    down: false
  });
  const wrapperRef = useRef();
  const [mode, setMode] = useState({ mode: 'sleep' });

  function handleMouseClick(cell) {
    console.log(cell);
    const clickedCell = { ...cell };
    setGrid((prev) => {
      const newGrid = prev.map((cell) => {
        let newCell = { ...cell };
        if (clickedCell.id === newCell.id) {
          newCell.mode = mode.mode;
        }

        return newCell;
      });
      return newGrid;
    });
  }

  function handleMouseDown(cell) {
    setMouseStatus({ down: true });
    setRange({
      start: { ...cell },
      end: null
    });
  }

  function handleMouseUp() {
    setGrid((prev) => {
      const newGrid = prev.map((cell) => {
        let newCell = { ...cell };
        newCell.selected = false;
        return newCell;
      });
      return newGrid;
    });
    setMouseStatus({ down: false });
    setRange({ end: null, start: null });
  }
  function handleMouseMove(cell) {
    setRange((prev) => ({
      ...prev,
      end: { ...cell }
    }));
  }

  function handleModeChange(e) {
    setMode({ mode: e.target.value });
  }
  function clearGrid() {
    setGrid((prev) => {
      const newGrid = prev.map((cell) => {
        let newCell = { ...cell };
        newCell.selected = false;
        newCell.mode = 'active';
        return newCell;
      });
      return newGrid;
    });
  }
  function setRangeMinToMax(startID, endID) {
    //function checks which one is bigger than the other, and returns => min, max

    if (startID > endID) {
      return {
        start: endID,
        end: startID
      };
    }
    return {
      start: startID,
      end: endID
    };
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
  }, []);
  useEffect(() => {
    setGrid((prev) => {
      const prevGrid = [...prev];
      let newGrid = [];
      if (range.start && range.end) {
        let { start, end } = setRangeMinToMax(range.start.id, range.end.id);
        newGrid = prevGrid.map((cell) => {
          const newCell = { ...cell };
          if (newCell.id >= start && newCell.id <= end) {
            if (mouseStatus.down) {
              newCell.selected = true;
            }
            newCell.mode = mode.mode;
          }
          return newCell;
        });
        return newGrid;
      }
      return prevGrid;
    });
  }, [range, mouseStatus.down, mode.mode]);

  return (
    <div className="App">
      <header className="App-header">Sleep Tracker</header>
      <div ref={wrapperRef}>
        {ROWS_ARRAY.map((_, i) => {
          const cells = [];
          for (let j = 0; j < GRID_COL_LENGTH; j++) {
            const index = i * GRID_COL_LENGTH + j;
            const cell = { ...grid[index] };
            cells.push(
              <Cell
                cell={cell}
                key={cell.id}
                onClick={handleMouseClick}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
              />
            );
          }
          ROWS_ARRAY[i] = cells;
          return (
            <div key={i} className="row">
              {cells}
            </div>
          );
        })}
      </div>

      <button onClick={clearGrid}>Clear</button>
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
