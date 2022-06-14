import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Card.module.css';

function Card({ date, data, buttons, summary }) {
  return (
    <>
      {data && (
        <div className={Styles.card}>
          {data}
          <div className={`${Styles['card-column']} ${Styles['summaryContainer']}`}>
            <h4 className={Styles.summaryHeader}>{date}</h4>
            <div className={Styles.summaryContent}>{summary}</div>
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
  date: PropTypes.node,
  data: PropTypes.node,
  buttons: PropTypes.node,
  summary: PropTypes.node
};
export default Card;
