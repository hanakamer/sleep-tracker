import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Cell } from '../Cell';
import Styles from './Day.module.css';

function Day({ row, mode, changeRow }) {
  const [range, setRange] = useState({
    start: null,
    end: null
  });
  const [mouseStatus, setMouseStatus] = useState({
    down: false
  });

  function handleMouseClick(cellID) {
    changeRow((prev) => {
      return prev.map((cell) => {
        if (cellID !== cell.id) {
          return cell;
        }
        return {
          ...cell,
          mode: mode.mode
        };
      });
    });
  }

  function handleMouseDown(cell) {
    setRange({
      start: { ...cell },
      end: null
    });
    setMouseStatus({ down: true });
  }
  function handleMouseMove(cell) {
    setRange((prev) => ({
      ...prev,
      end: { ...cell }
    }));
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
    function handleMouseUp() {
      setMouseStatus({ down: false });
      setRange({ end: null, start: null });
      changeRow((prev) => {
        return prev.map((cell) => {
          let newCell = { ...cell };
          newCell.selected = false;
          return newCell;
        });
      });
    }
    document.addEventListener('mouseup', handleMouseUp);
    return function cleanUpEventListener() {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [changeRow]);

  useEffect(() => {
    if (range.start && range.end) {
      let { start, end } = setRangeMinToMax(range.start.id, range.end.id);
      changeRow((prev) => {
        return prev.map((cell) => {
          const newCell = { ...cell };
          if (newCell.id >= start && newCell.id <= end) {
            if (mouseStatus.down) {
              newCell.selected = true;
            } else {
              newCell.selected = false;
              newCell.mode = mode.mode;
            }
          } else {
            newCell.selected = false;
          }
          return newCell;
        });
      });
    }
  }, [range, mouseStatus.down, mode.mode, changeRow]);

  return (
    <div className={Styles.container}>
      {row.map((cell) => {
        return (
          <Cell
            cell={cell}
            key={cell.id}
            mode={cell.mode}
            selected={cell.selected}
            onClick={() => handleMouseClick(cell.id)}
            onMouseDown={() => handleMouseDown(cell)}
            onMouseMove={() => handleMouseMove(cell)}
          />
        );
      })}
    </div>
  );
}
Day.propTypes = {
  row: PropTypes.array,
  mode: PropTypes.object,
  changeRow: PropTypes.func
};

export default Day;
