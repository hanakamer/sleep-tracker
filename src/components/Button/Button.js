import Styles from './Button.module.css';
import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, name, disabled }) {
  return (
    <button disabled={disabled} className={Styles.button} onClick={onClick}>
      {name}
    </button>
  );
}
Button.defaultProps = {
  disabled: false
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default Button;
