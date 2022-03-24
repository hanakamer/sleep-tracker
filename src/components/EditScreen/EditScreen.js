import PropTypes from 'prop-types';
import React from 'react';
import StylesGeneral from '../../common/general.module.css';

function EditScreen({ cells, warning, sleepModes, date, buttons }) {
  return (
    <div className={StylesGeneral.container}>
      <div>{cells}</div>
      <div>{warning}</div>
      <div className={StylesGeneral.horizontalAlignContainer}>{sleepModes}</div>
      <div className={StylesGeneral.horizontalAlignContainer}>{date}</div>
      <div className={StylesGeneral.horizontalAlignContainer}>{buttons}</div>
    </div>
  );
}
EditScreen.propTypes = {
  date: PropTypes.node.isRequired,
  cells: PropTypes.node.isRequired,
  warning: PropTypes.node,
  sleepModes: PropTypes.node.isRequired,
  buttons: PropTypes.node.isRequired
};
export default EditScreen;
