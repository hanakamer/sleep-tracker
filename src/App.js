import React, { useState } from 'react';
import Styles from './App.module.css';
import { CreateDay } from './pages/CreateDay';
import { EditDay } from './pages/EditDay';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SavedGridContext } from './contexts/SavedGridContext';

function App() {
  const [savedGrid, setSavedGrid] = useState({});
  function saveGrid(newDayData, newDate) {
    setSavedGrid((prev) => {
      return {
        ...prev,
        [newDate]: newDayData
      };
    });
  }

  return (
    <div className={Styles.mainContainer}>
      <SavedGridContext.Provider value={{ savedGrid, setSavedGrid }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/createDay" element={<CreateDay onSaveGrid={saveGrid} />} />
            <Route path="/editDay/:date" element={<EditDay onSaveGrid={saveGrid} />} />
          </Routes>
        </Router>
      </SavedGridContext.Provider>
    </div>
  );
}

export default App;
