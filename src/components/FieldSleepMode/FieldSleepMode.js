import React from 'react';
import { RadioButton } from '../RadioButton';
import PropTypes from 'prop-types';

function FieldSleepMode({ onChange }) {
  return (
    <React.Fragment>
      <RadioButton onChange={onChange} value="active" />
      <RadioButton onChange={onChange} value="sleep" defaultChecked={true} />
      <RadioButton onChange={onChange} value="fallingAsleep" />
    </React.Fragment>
  );
}
FieldSleepMode.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default FieldSleepMode;
