import { createContext, useContext } from 'react';
import { useLocalStorageState } from '../state/useLocalStorage';
import { calculateSummaryOfSleep } from '../utils/utils';
import PropTypes from 'prop-types';
import { minsToHours } from '../utils/utils';

const SavedGridContext = createContext();

export function useSavedGrid() {
  return useContext(SavedGridContext);
}

export function SavedGridProvider({ children }) {
  const [savedGrid, setSavedGrid] = useLocalStorageState('SavedGrid', {});

  function saveGrid(newDayData, newDate) {
    setSavedGrid((prev) => {
      const summary = calculateSummaryOfSleep(newDayData);
      console.log(summary);
      Object.keys(summary).map((key) => {
        const totalMins = summary[key] * 15; //calculate total mins
        summary[key] = minsToHours(totalMins);
        return summary[key];
      });

      console.log(summary);
      return {
        ...prev,
        [newDate]: {
          data: newDayData,
          summary: summary
        }
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
