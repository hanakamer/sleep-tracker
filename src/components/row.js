import React, { useState, useEffect } from 'react';
import Cell from './cell';

function Row({ row, mode, onChange }) {
    const [range, setRange] = useState({
        start: null,
        end: null
    });
    const [mouseStatus, setMouseStatus] = useState({
        down: false
    });
    const [grid, setGrid] = useState(row);

    function handleMouseClick(cellID) {
        setGrid((prev) => {
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
    useEffect(() => {
        onChange(grid);
    }, [grid])

    return row.map((cell) => {
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
    });;
}
export default Row;