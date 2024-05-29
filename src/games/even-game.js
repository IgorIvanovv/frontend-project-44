import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (value) => value % 2 === 0;

const getRound = () => {
  const question = getRandomNumber(1, 15);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  startGame(description, getRound);
};
