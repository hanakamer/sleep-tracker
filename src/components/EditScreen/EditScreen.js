import PropTypes from 'prop-types';
import React from 'react';
import StylesGeneral from '../../common/general.module.css';
import Styles from './EditScreen.module.css';
import LinkBack from '../LinkBack/LinkBack';

function EditScreen({ cells, warning, sleepModes, date, buttons }) {
  return (
    <div className={StylesGeneral.container}>
      <div className={Styles.row}>
        <LinkBack className={Styles.link} urlBack="/" />
        <h2 className={Styles.title}>Day Recorder</h2>
      </div>

      <div className={Styles.editScreenContainer}>
        <div className={`${Styles.row} ${Styles.cells}`}>{cells}</div>
        <div className={Styles.row}>{warning}</div>
        <div className={Styles.row}>{sleepModes}</div>
        <div className={`${Styles.row} ${Styles.date}`}>{date}</div>
      </div>

      <div className={Styles.row}>{buttons}</div>
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
