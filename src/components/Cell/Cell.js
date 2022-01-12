import CellCSS from './Cell.module.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Cell({ mode, selected, ...props }) {
  return (
    <div
      className={classNames(CellCSS.cell, CellCSS[mode], { [CellCSS.selected]: selected })}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onMouseMove={props.onMouseMove}></div>
  );
}
Cell.propTypes = {
  mode: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired
};

export default Cell;
