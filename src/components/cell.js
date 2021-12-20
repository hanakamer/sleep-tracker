import './cell.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Cell({ mode, selected, ...props }) {
  return (
    <div
      className={classNames('cell', mode, { selected: selected })}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onMouseMove={props.onMouseMove}
      onMouseUp={props.onMouseUp}></div>
  );
}
Cell.propTypes = {
  mode: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired
};

export default Cell;
