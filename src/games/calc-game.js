import calcGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const countExpression = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return `Error: This opperation '${operation}' is not supported!`;
  }
};

const getRound = () => {
  const number1 = getRandomNumber(1, 25);
  const number2 = getRandomNumber(1, 25);
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = countExpression(number1, number2, operation);
  return [String(question), String(correctAnswer)];
};

export default () => {
  calcGame(description, getRound);
};
