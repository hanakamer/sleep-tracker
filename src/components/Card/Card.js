import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Card.module.css';
import StylesGeneral from '../../common/general.module.css';

function Card({ date, data, buttons, summary }) {
  return (
    <div className={Styles.card}>
      {data}
      <div>
        <h4>{date}</h4>
        {summary}
      </div>
      <div className={`${StylesGeneral.verticalAlignSmallContainer}`}>{buttons}</div>
    </div>
  );
}
Card.propTypes = {
  date: PropTypes.node.isRequired,
  data: PropTypes.node.isRequired,
  buttons: PropTypes.node.isRequired,
  summary: PropTypes.node.isRequired
};
export default Card;
