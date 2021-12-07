import './cell.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Cell(props) {
  const cell = { ...props.cell };

  function handleMouseClick() {
    props.onClick(cell);
  }
  function handleMouseDown() {
    props.onMouseDown(cell);
  }
  function handleMouseMove() {
    props.onMouseMove(cell);
  }

  return (
    <div
      className={classNames('cell', cell.mode, { selected: cell.selected })}
      onClick={handleMouseClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}></div>
  );
}
Cell.propTypes = {
  cell: PropTypes.object,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseMove: PropTypes.func
};

export default Cell;
