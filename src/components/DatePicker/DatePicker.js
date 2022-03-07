import GeneralStyles from '../../common/general.module.css';
import React from 'react';
import PropTypes from 'prop-types';

function DatePicker({ editDate, startDate, onChange }) {
  return (
    <React.Fragment>
      <input
        disabled={editDate ? true : false}
        type="date"
        selected={startDate}
        onChange={onChange}
        value={editDate}
        id="datepicker"
      />
      <label className={GeneralStyles.visuallyHidden} htmlFor="datepicker">
        date picker
      </label>
    </React.Fragment>
  );
}
DatePicker.propTypes = {
  onChange: PropTypes.func,
  editDate: PropTypes.string,
  startDate: PropTypes.string
};

export default DatePicker;
