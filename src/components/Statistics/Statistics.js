import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className="s.lict">
    <li className={s.item}>Good: {good}</li>
    <li className={s.item}>Neutral: {neutral}</li>
    <li className={s.item}>Bad: {bad}</li>
    <li className={s.FeedBackClick}>Total: {total}</li>
    <li className={s.FeedBackClick}>
      Positive FeedBack: {positivePercentage}%
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
