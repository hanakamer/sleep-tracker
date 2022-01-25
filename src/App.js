import React, { useState } from 'react';
// import { Day, DayView } from './components/Day';
// import { RadioButton } from './components/RadioButton';
import styles from './App.module.css';
// import { Button } from './components/Button';
import { DayRecorder } from './components/DayRecorder';
import { Home } from './components/Home';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SavedGridContext } from './contexts/SavedGridContext';
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
  // const [mode, setMode] = useState({ mode: 'sleep' });
  // const [grid, setGrid] = useState(ROW_DATA);
  const [savedGrid, setSavedGrid] = useState([]);
  // const [startDate, setStartDate] = useState(new Date());
  // const navigate = useNavigate();
  // function handleModeChange(e) {
  //   setMode({ mode: e.target.value });
  // }
  // function clearGrid() {
  //   setGrid((prev) => {
  //     return prev.map((cell) => {
  //       return {
  //         ...cell,
  //         selected: false,
  //         mode: 'active'
  //       };
  //     });
  //   });
  // }
  function saveGrid(newGrid) {
    console.log(newGrid);
    setSavedGrid((prev) => {
      console.log(prev);
      return [...prev, newGrid];
    });
  }

  return (
    <div className={styles.mainContainer}>
      <SavedGridContext.Provider value={{ savedGrid, setSavedGrid }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dayRecorder" element={<DayRecorder onSaveGrid={saveGrid} />} />
          </Routes>
        </Router>
      </SavedGridContext.Provider>
    </div>
  );
}

export default App;
