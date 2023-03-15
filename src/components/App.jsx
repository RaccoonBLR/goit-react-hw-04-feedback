import { useState } from 'react';
import { Container } from './Container/Container';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from './Notification/Notification';
import content from 'textContent.json';

export const App = () => {
  const INITIAL_VALUE = 0;
  const options = ['good', 'neutral', 'bad'];

  const [goodFeedback, setGoodFeedback] = useState(INITIAL_VALUE);
  const [neutralFeedback, setNeutralFeedback] = useState(INITIAL_VALUE);
  const [badFeedback, setBadFeedback] = useState(INITIAL_VALUE);

  const handleClick = evt => {
    const { id } = evt.target;
    const increment = 1;

    const setFeedback = prevState => prevState + increment;

    switch (id) {
      case 'good':
        setGoodFeedback(setFeedback);
        break;

      case 'neutral':
        setNeutralFeedback(setFeedback);
        break;

      case 'bad':
        setBadFeedback(setFeedback);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => goodFeedback + neutralFeedback + badFeedback;

  const countPositiveFeedbackPercentage = () => {
    const multiplier = 100;

    return Math.round((goodFeedback / countTotalFeedback()) * multiplier);
  };

  return (
    <Container>
      <Section title={content.optionsTitle}>
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>

      <Section title={content.statisticsTitle}>
        {countTotalFeedback() ? (
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={content.noFeedbackNotify} />
        )}
      </Section>
    </Container>
  );
};
