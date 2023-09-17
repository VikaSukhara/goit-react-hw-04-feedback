import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOption } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Notification } from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerGoodIncrement = () => {
    setGood(prevItems => prevItems + 1);
    console.log(options);
  };

  const handlerNeutralIncrement = () => {
    setNeutral(prevItems => prevItems + 1);
  };

  const handlerBadIncrement = () => {
    setBad(prevItems => prevItems + 11);
  };

  const options = [
    { key: 1, name: 'good', function: handlerGoodIncrement },
    { key: 2, name: 'neutral', function: handlerNeutralIncrement },
    { key: 3, name: 'bad', function: handlerBadIncrement },
  ];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div style={{ padding: '10px 50px' }}>
      <Section title={'Please leave feedback'}>
        <div style={{ display: 'flex', gap: '10px' }}>
          {options.map(option => (
            <FeedbackOption
              key={option.key}
              option={option}
              onLeaveFeedback={option.function}
            />
          ))}
        </div>

        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
