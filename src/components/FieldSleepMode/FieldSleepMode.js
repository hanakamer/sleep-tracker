import React from 'react';
import { RadioButton } from '../RadioButton';
import PropTypes from 'prop-types';
import Styles from './FieldSleepMode.module.css';

function FieldSleepMode({ onChange }) {
  return (
    <div className={Styles.container}>
      <RadioButton onChange={onChange} value="active">
        Active
      </RadioButton>
      <RadioButton onChange={onChange} value="fallingAsleep">
        Falling Asleep
      </RadioButton>
      <RadioButton onChange={onChange} value="sleep" defaultChecked={true}>
        Sleep
      </RadioButton>
    </div>
  );
}
FieldSleepMode.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default FieldSleepMode;
