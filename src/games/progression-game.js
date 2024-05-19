import progressionGame from '../index.js';
import { getRandomNumber } from '../tools.js';

const description = 'What number is missing in the progression?';

const getProgression = (step, length) => {
  const result = [];
  for (let i = step; i < step * length; i += step) {
    result.push(i);
  }
  const hiddenSymbol = getRandomNumber(0, result.length - 1);
  const correctAnswer = result[hiddenSymbol];
  result[hiddenSymbol] = '..';
  const question = result.join(' ');
  return [question, correctAnswer];
};

const getQuestionAndAnswer = () => {
  const stepProg = getRandomNumber(1, 15);
  const lengthProg = getRandomNumber(5, 10);
  const [question, correctAnswer] = getProgression(stepProg, lengthProg);
  return [question, String(correctAnswer)];
};
export default () => {
  progressionGame(description, getQuestionAndAnswer);
};
