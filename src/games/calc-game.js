import calcGame from '../index.js';
import { getRandomNumber, getRandomMathOper } from '../tools.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const getFirstNum = getRandomNumber(1, 25);
  const getSecondNum = getRandomNumber(1, 25);
  const getOperation = getRandomNumber(0, 2);
  const [question, correctAnswer] = getRandomMathOper(getFirstNum, getSecondNum, getOperation);
  return [question, correctAnswer];
};

export default () => {
  calcGame(description, getQuestionAndAnswer);
};
