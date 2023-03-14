import { NotificationText } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <NotificationText>{message}</NotificationText>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
