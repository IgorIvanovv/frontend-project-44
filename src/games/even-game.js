import evenGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const parityCheck = (value) => value % 2 === 0;

const getRound = () => {
  const question = getRandomNumber(1, 15);
  const correctAnswer = parityCheck(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  evenGame(description, getRound);
};
