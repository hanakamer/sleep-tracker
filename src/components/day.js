import React, { useState, useEffect } from 'react';
import Cell from './cell';

function Day({ row, mode, ...props }) {
    const [range, setRange] = useState({
        start: null,
        end: null
    });
    const [mouseStatus, setMouseStatus] = useState({
        down: false
    });

    function handleMouseClick(cellID) {
        row = row.map((cell) => {
            if (cellID !== cell.id) {

                return cell;
            }
            return {
                ...cell,
                mode: mode.mode
            };
        })

        handleDataChange(row);
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
        setMouseStatus({ down: false });
        setRange({ end: null, start: null });
        row = row.map((cell) => {
            let newCell = { ...cell };
            newCell.selected = false;
            return newCell;
        })


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
    function handleDataChange(data) {
        props.changeRow(data);
    }
    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp);
    }, []);
    useEffect(() => {
        if (range.start && range.end) {
            let { start, end } = setRangeMinToMax(range.start.id, range.end.id);
            row = row.map((cell) => {
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
            handleDataChange(row);
        }


    }, [range, mouseStatus.down, mode.mode]);

    return (
        <div>
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
    )
}
export default Day;