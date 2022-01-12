import RadioButtonCSS from './RadioButton.module.css';
import React from 'react';
import PropTypes from 'prop-types';

function RadioButton({ onChange, value, defaultChecked = false }) {
  return (
    <div>
      <input
        onChange={onChange}
        id={RadioButtonCSS[value]}
        className={RadioButtonCSS.radioBtn}
        type="radio"
        value={value}
        name="mode"
        defaultChecked={defaultChecked}
      />
      <label
        className={RadioButtonCSS.btnLabel}
        htmlFor={RadioButtonCSS[value]}
        id={RadioButtonCSS[value]}>
        {value}
      </label>
    </div>
  );
}
RadioButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool
};

export default RadioButton;
