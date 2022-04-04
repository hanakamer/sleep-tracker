import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Card.module.css';

function Card({ date, data, buttons, summary }) {
  return (
    <>
      {data && (
        <div className={Styles.card}>
          {data}
          <div className={Styles['card-column']}>
            <h4 className={Styles.summaryHeader}>{date}</h4>
            <div className={Styles.summaryContainer}>{summary}</div>
          </div>
          <div className={Styles['card-column']}>{buttons}</div>
        </div>
      )}
      {!data && (
        <div className={Styles.cardEmpty}>
          <p>No sleep record yet</p>
        </div>
      )}
    </>
  );
}
Card.propTypes = {
  date: PropTypes.node.isRequired,
  data: PropTypes.node.isRequired,
  buttons: PropTypes.node.isRequired,
  summary: PropTypes.node.isRequired
};
export default Card;
