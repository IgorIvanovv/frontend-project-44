import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, length, step) => {
  let num = start;
  const result = [num];

  for (let i = 1; i < length; i += 1) {
    num += step;
    result.push(num);
  }

  return result;
};

const getRound = () => {
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(6, 12);
  const start = getRandomNumber(0, 10);
  const progression = getProgression(start, length, step);
  const hiddenSymbol = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenSymbol];
  progression[hiddenSymbol] = '..';
  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

export default () => {
  startGame(description, getRound);
};
