import GeneralStyles from '../../common/general.module.css';
import React from 'react';
import PropTypes from 'prop-types';

function DatePicker({ disabled, value, onChange, id }) {
  return (
    <React.Fragment>
      <input
        disabled={disabled ? true : false}
        type="date"
        selected={value}
        onChange={onChange}
        value={disabled}
        id={id}
      />
      <label className={GeneralStyles.visuallyHidden} htmlFor="datepicker">
        date picker
      </label>
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
