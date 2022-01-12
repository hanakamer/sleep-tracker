import ButtonCSS from './Button.module.css';
import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, name }) {
  return (
    <button className={ButtonCSS.button} onClick={onClick}>
      {name}
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Button;
