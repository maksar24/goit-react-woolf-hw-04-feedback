import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const sum = Object.values(this.state).reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const mark = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={mark} onLeaveFeedback={this.handleClick} />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              goodMark={good}
              neutralMark={neutral}
              badMark={bad}
              countTotal={total}
              countGoodPercent={percent}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
