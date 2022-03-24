import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import Styles from './SummaryCell.module.css';

function SummaryCell({ mode, cell, ...props }) {
  return (
    <React.Fragment>
      <div className={classNames(Styles.cell, Styles[mode])}></div>
    </React.Fragment>
  );
}
SummaryCell.propTypes = {
  mode: PropTypes.string,
  cell: PropTypes.object
};

export default SummaryCell;
