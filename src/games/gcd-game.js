import gcdGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const getRound = () => {
  const getFirstNum = getRandomNumber(1, 25);
  const getSecondNum = getRandomNumber(1, 25);
  const question = `${getFirstNum} ${getSecondNum}`;
  const correctAnswer = getGcd(getFirstNum, getSecondNum);
  return [question, String(correctAnswer)];
};

export default () => {
  gcdGame(description, getRound);
};
