import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import './components/cell.css';
import Cell from './components/cell';
import Row from './components/row';

const GRID_ROW_LENGTH =10;
const GRID_COL_LENGTH =10;
const GRID_DATA = [];

  for (let row = 0; row<GRID_ROW_LENGTH; row++) {
    for(let col = 0; col<GRID_COL_LENGTH; col++){
      const cell = {
        row: row,
        col: col,
        id: row * GRID_COL_LENGTH + col,
        active: false,
        selected: false
      };
      GRID_DATA.push(cell);
    }
   

  }

const ROWS_ARRAY = new Array(GRID_ROW_LENGTH).fill(undefined);

function App() {
  const [grid, setGrid] = useState(GRID_DATA);
  const [range, setRange] = useState({
    start:null,
    end:null
  });
  const [mouseStatus, setMouseStatus] = useState({
    down:false
  });
  const wrapperRef = useRef();
  const [startDate, setStartDate] = useState(new Date());
  

  function handleMouseClick(cell) { 
    console.log(cell);
    const clickedCell = {...cell};
    setGrid((prev=>{
      const newGrid = prev.map(cell=>{
        let newCell = {...cell};
        if (clickedCell.id === newCell.id){
        newCell.active = !newCell.active;
        }
        
        return newCell;
      });
      return newGrid;
    }));

  }

  function handleMouseDown(cell) {
    setMouseStatus({down:true});
    setRange(prev=>({
      start: {...cell},
      end: null,
    }));      
  }

  function handleMouseUp() {
    
    setGrid((prev=>{
      const newGrid = prev.map(cell=>{
        let newCell = {...cell};
        newCell.selected = false;
        return newCell;
      });
      return newGrid;
    }));
    setMouseStatus({down:false});
    setRange({end:null, start:null});
    
  }
  function handleMouseMove(cell) {
   setRange(prev=>({
      ...prev,
      end:{...cell}
    }));
  }
  function clearGrid() {
    setGrid((prev=>{
      const newGrid = prev.map(cell=>{
        let newCell = {...cell};
        newCell.active = false;
        newCell.selected = false;
        return newCell;
      });
      return newGrid;
    }));
  }
  function calculateDaysInMonth (month, year) {
    
    return new Date(year, month, 0).getDate();
  }

  function handleMonthChange(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    let daysInMonth = calculateDaysInMonth(month, year);;
    console.log(daysInMonth);
    return setStartDate(date)
  }

  useEffect(()=>{
    document.addEventListener("mouseup",handleMouseUp);
    // document.addEventListener("click",handleMouseClick)
    
  },[])

  useEffect(() => {
    setGrid((prev=>{
      const prevGrid = [...prev];
      let newGrid = []
      if (range.start && range.end) {
      const start = range.start.id;
      const end = range.end.id;
        newGrid = prevGrid.map(cell=>{
          const newCell = {...cell};
          if(start <=end ) {
            if(newCell.id >= start && newCell.id <= end){
              newCell.active = true;
              newCell.selected = mouseStatus.down;
            }

          } else if (end < start && mouseStatus.down) {
            if(newCell.id >= end && newCell.id <= start){
              newCell.active = true;
              newCell.selected = mouseStatus.down;
            }
          }
          
          return newCell;
        })
        return newGrid;
      }
      return prevGrid;
      
    }));


    
    
    }, [range]);


  return (
    
    <div className="App">
      <header className="App-header">
      Sleep Tracker
      </header>
      <div ref={wrapperRef}>
      

      {ROWS_ARRAY.map((_,i)=>{
         const cells = [];
        for(let j = 0; j < GRID_COL_LENGTH; j++){
          const index = i * GRID_COL_LENGTH + j;
          const cell = {...grid[index]};
          cells.push(<Cell 
            cell={cell} 
            key={cell.id} 
            onClick={handleMouseClick} 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            />);
        }
        ROWS_ARRAY[i]=cells;
        return <div key={i} className="row">{cells}</div>
      })}

      </div>

      <button onClick={clearGrid}>Clear</button>
      <DatePicker
      selected={startDate}
      onChange={handleMonthChange}
      dateFormat="MM/yyyy"
      showMonthYearPicker
      showFullMonthYearPicker
    />

    </div>
  );
}

export default App;
