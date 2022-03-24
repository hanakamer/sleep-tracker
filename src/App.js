import React from 'react';
import { CreateDay } from './pages/CreateDay';
import { EditDay } from './pages/EditDay';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SavedGridProvider } from './contexts/SavedGridContext';
import StylesGeneral from './common/general.module.css';

function App() {
  return (
    <SavedGridProvider>
      <div className={StylesGeneral.container}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/createDay" element={<CreateDay />} />
            <Route path="/editDay/:date" element={<EditDay />} />
          </Routes>
        </Router>
      </div>
    </SavedGridProvider>
  );
}

export default App;
