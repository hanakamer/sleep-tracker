import React from 'react';
import { RadioButton } from '../RadioButton';
import PropTypes from 'prop-types';
import StylesGeneral from '../../common/general.module.css';

function FieldSleepMode({ onChange }) {
  return (
    <div className={StylesGeneral.horizontalAlignContainer}>
      <RadioButton onChange={onChange} value="active">
        Active
      </RadioButton>
      <RadioButton onChange={onChange} value="sleep" defaultChecked={true}>
        Sleep
      </RadioButton>
      <RadioButton onChange={onChange} value="fallingAsleep">
        Falling Asleep
      </RadioButton>
    </div>
  );
}
FieldSleepMode.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default FieldSleepMode;
