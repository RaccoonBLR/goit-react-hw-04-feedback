import { OptionButton, OptionWrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionWrapper>
    {options.map(option => (
      <OptionButton key={option} onClick={onLeaveFeedback} id={option}>
        {option}
      </OptionButton>
    ))}
  </OptionWrapper>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
