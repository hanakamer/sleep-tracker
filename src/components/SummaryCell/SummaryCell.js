import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import Styles from './SummaryCell.module.css';
import { calculatePercentage, NUMBER_OF_CELLS } from '../../utils/utils';

function SummaryCell({ mode, cell, ...props }) {
  const height = calculatePercentage(cell.endIndex - cell.startIndex, NUMBER_OF_CELLS);
  return (
    <React.Fragment>
      <div style={{ height: `${height}%` }} className={classNames(Styles.cell, Styles[mode])}></div>
    </React.Fragment>
  );
}
SummaryCell.propTypes = {
  mode: PropTypes.string,
  cell: PropTypes.object
};

export default SummaryCell;
