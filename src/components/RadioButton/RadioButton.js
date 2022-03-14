import Styles from './RadioButton.module.css';
import React from 'react';
import PropTypes from 'prop-types';

function RadioButton({ onChange, value, defaultChecked = false, children }) {
  return (
    <div>
      <input
        onChange={onChange}
        id={Styles[value]}
        className={Styles.radioBtn}
        type="radio"
        value={value}
        name="mode"
        defaultChecked={defaultChecked}
      />
      <label className={Styles.btnLabel} htmlFor={Styles[value]} id={Styles[value]}>
        {children}
      </label>
    </div>
  );
}
RadioButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default RadioButton;
