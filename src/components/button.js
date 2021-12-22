import './button.css';
import React from 'react';
import PropTypes from 'prop-types';

function Button({ action, name }) {
  return (
    <button className="button" onClick={action}>
      {name}
    </button>
  );
}
Button.propTypes = {
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Button;
