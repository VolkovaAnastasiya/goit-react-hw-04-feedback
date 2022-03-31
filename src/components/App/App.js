import { useState } from 'react';
import FeedBackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';

// import PropTypes from 'prop-types';

export default function FeedBack() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackButton = ['Good', 'Neutral', 'Bad'];

  const heandleIncrement = e => {
    const name = e.currentTarget.innerText;

    switch (name) {
      case 'Good':
        setGood(good + 1);
        break;
      case 'Neutral':
        setNeutral(neutral + 1);
        break;
      case 'Bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedBack = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedBackPercentage = () => {
    const positive = Math.floor((good * 100) / countTotalFeedBack());
    return positive;
  };

  return (
    <div>
      <Section title="Please leave FeedBack">
        <FeedBackOptions
          options={feedbackButton}
          onLeaveFeedback={heandleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedBack() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedBack()}
            positivePercentage={countPositiveFeedBackPercentage()}
          />
        ) : (
          <Section title="No FeedBack given" />
        )}
      </Section>
    </div>
  );
}
