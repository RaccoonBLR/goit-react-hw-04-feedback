import { Wrapper, Text, Value } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <Wrapper>
    <Text>
      Good
      <Value>{good}</Value>
    </Text>
    <Text>
      Neutral
      <Value>{neutral}</Value>
    </Text>
    <Text>
      Bad
      <Value>{bad}</Value>
    </Text>
    <Text>
      Total
      <Value>{total}</Value>
    </Text>
    <Text>
      Positive
      <Value>{positivePercentage}%</Value>
    </Text>
  </Wrapper>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
