import Styles from './DatePicker.module.css';
import React from 'react';
import PropTypes from 'prop-types';

function DatePicker({ disabled, value, onChange, id }) {
  return (
    <React.Fragment>
      <label className={Styles.label} htmlFor="datepicker">
        Day:
      </label>
      <input
        disabled={disabled ? true : false}
        type="date"
        selected={value}
        onChange={onChange}
        value={disabled}
        id={id}
      />
    </React.Fragment>
  );
}
DatePicker.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string.isRequired
};

export default DatePicker;
