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
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseMove: PropTypes.func
};

export default Cell;
