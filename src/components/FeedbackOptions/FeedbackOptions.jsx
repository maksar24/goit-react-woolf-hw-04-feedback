import Button from 'components/Button/Button';
import { List } from './FeedbackOptions.styles';
import { toUpperFirstLetter } from 'commonJs/commonJs';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <li key={option}>
            <Button
              action={() => {
                onLeaveFeedback(option);
              }}
            >
              {toUpperFirstLetter(option)}
            </Button>
          </li>
        );
      })}
    </List>
  );
};

export default FeedbackOptions;
