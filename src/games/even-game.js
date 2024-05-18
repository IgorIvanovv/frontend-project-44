import evenGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const parityCheck = (value) => value % 2 === 0;

const getRandomNumber = () => {
  const min = Math.ceil(1);
  const max = Math.floor(15);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = parityCheck(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  evenGame(description, getQuestionAndAnswer);
};
