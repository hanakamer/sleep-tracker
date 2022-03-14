import React from 'react';
import { RadioButton } from '../RadioButton';
import PropTypes from 'prop-types';

function FieldSleepMode({ onChange }) {
  return (
    <React.Fragment>
      <RadioButton onChange={onChange} value="active">
        active
      </RadioButton>
      <RadioButton onChange={onChange} value="sleep" defaultChecked={true}>
        sleep
      </RadioButton>
      <RadioButton onChange={onChange} value="fallingAsleep">
        Falling Asleep
      </RadioButton>
    </React.Fragment>
  );
}
FieldSleepMode.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default FieldSleepMode;
