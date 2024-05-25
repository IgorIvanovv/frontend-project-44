import calcGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';

const startArithmometer = (a, b, operation) => {
  let correctAnswer = 0;
  switch (operation) {
    case '+':
      correctAnswer = a + b;
      break;
    case '-':
      correctAnswer = a - b;
      break;
    case '*':
      correctAnswer = a * b;
      break;
    default:
      return `Error: ${operation}`;
  }
  return String(correctAnswer);
};

const getRound = () => {
  const arithmeticOperations = ['+', '-', '*'];
  const getFirstNumber = getRandomNumber(1, 25);
  const getSecondNumber = getRandomNumber(1, 25);
  const getOperation = arithmeticOperations[getRandomNumber(0, arithmeticOperations.length - 1)];
  const question = `${getFirstNumber} ${getOperation} ${getSecondNumber}`;
  const correctAnswer = startArithmometer(getFirstNumber, getSecondNumber, getOperation);
  return [question, correctAnswer];
};

export default () => {
  calcGame(description, getRound);
};
