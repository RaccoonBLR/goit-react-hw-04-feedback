import React, { Component } from 'react';
import { Container } from './Container/Container';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = evt => {
    const { id } = evt.target;
    const increment = 1;

    this.setState(prevState => ({ [id]: prevState[id] + increment }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, num) => (acc += num), 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const stateKeys = Object.keys(this.state);

    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </Container>
    );
  }
}
