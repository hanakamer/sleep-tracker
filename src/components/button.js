import './button.css';
import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, name }) {
  return (
    <button className="button" onClick={onClick}>
      {name}
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Button;
