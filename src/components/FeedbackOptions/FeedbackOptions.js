import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.buttons}>
      {options.map(option => (
        <button
          type="button"
          className={s.FeedBack}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedBackOptions.protoType = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;
