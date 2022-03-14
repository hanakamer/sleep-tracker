import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const SavedGridContext = createContext();

export function useSavedGrid() {
  return useContext(SavedGridContext);
}

export function SavedGridProvider({ children }) {
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
    <SavedGridContext.Provider value={{ savedGrid, setSavedGrid, saveGrid }}>
      {children}
    </SavedGridContext.Provider>
  );
}
SavedGridProvider.propTypes = {
  children: PropTypes.node.isRequired
};
