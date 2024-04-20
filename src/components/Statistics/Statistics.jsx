import { Text } from './Statistics.styles';

const Statistics = ({
  goodMark,
  neutralMark,
  badMark,
  countTotal,
  countGoodPercent,
}) => {
  return (
    <div>
      <Text>Good: {goodMark}</Text>
      <Text>Neutral: {neutralMark}</Text>
      <Text>Bad: {badMark}</Text>
      <Text>Total: {countTotal}</Text>
      <Text>Positive feedback: {countGoodPercent}%</Text>
    </div>
  );
};

export default Statistics;
