import { createContext, useContext } from 'react';
import { useLocalStorageState } from '../hooks/hooks';
import PropTypes from 'prop-types';

const SavedGridContext = createContext();

export function useSavedGrid() {
  return useContext(SavedGridContext);
}

export function SavedGridProvider({ children }) {
  const [savedGrid, setSavedGrid] = useLocalStorageState('SavedGrid', {});

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
