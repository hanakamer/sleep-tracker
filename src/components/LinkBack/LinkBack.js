import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LinkBack({ urlBack, className }) {
  return (
    <div className={className}>
      <Link to={urlBack}>{`<`}</Link>
    </div>
  );
}
LinkBack.defaultProps = {
  disabled: false
};
LinkBack.propTypes = {
  urlBack: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default LinkBack;
