import React, { Component } from 'react';
import FeedBackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';

// import PropTypes from 'prop-types';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  heandleIncrement = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedBack = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedBackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedBack();
    const positive = Math.floor((good * 100) / total);
    return positive;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave FeedBack">
          <FeedBackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.heandleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedBack() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedBack()}
              positivePercentage={this.countPositiveFeedBackPercentage()}
            />
          ) : (
            <Section title="No FeedBack given" />
          )}
        </Section>
      </div>
    );
  }
}

// FeedBack.prototype = {};

export default FeedBack;
