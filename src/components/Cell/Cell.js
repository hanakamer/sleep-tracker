import CellCSS from './Cell.module.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useState } from 'react';

function Cell({ mode, selected, cell, ...props }) {
  const [hoverState, setHoverState] = useState(false);
  return (
    <React.Fragment>
      <div
        className={classNames(CellCSS.cell, CellCSS[mode], { [CellCSS.selected]: selected })}
        onClick={props.onClick}
        onMouseDown={props.onMouseDown}
        onMouseMove={props.onMouseMove}
        onMouseOver={() => setHoverState(true)}
        onMouseOut={() => {
          setHoverState(false);
        }}>
        {hoverState && <span className={classNames(CellCSS.info)}>{cell.time}</span>}
        {cell.time === '00:00' || cell.time === '06:00' ? (
          <span className={classNames(CellCSS.info)}>{cell.time}</span>
        ) : (
          ''
        )}
      </div>
    </React.Fragment>
  );
}
Cell.propTypes = {
  mode: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  cell: PropTypes.object
};

export default Cell;
