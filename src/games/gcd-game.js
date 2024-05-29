import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const getRound = () => {
  const number1 = getRandomNumber(1, 25);
  const number2 = getRandomNumber(1, 25);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);
  return [question, String(correctAnswer)];
};

export default () => {
  startGame(description, getRound);
};
