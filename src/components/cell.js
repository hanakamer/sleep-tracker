import './cell.css';

function Cell(props) {
 
  const cell = {...props.cell};

  function handleMouseClick() {
    props.onClick(cell);
    
  }
  function handleMouseDown() {
    props.onMouseDown(cell);
  }
  function handleMouseUp() {
    props.onMouseUp(cell);
  }
  function handleMouseMove() {
    props.onMouseMove(cell);
  }

  return (
    <div 
    className={`cell ${cell.active ? "active" : ""} ${cell.selected ? "selected" : ""} `}  
    onClick={handleMouseClick}
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    > 
    </div>
  );
}

export default Cell;