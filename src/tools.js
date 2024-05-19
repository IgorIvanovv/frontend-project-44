const getRandomNumber = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};

const getRandomMathOper = (a, b, operation) => {
  const arithmeticOperations = ['+', '-', '*'];
  const value = arithmeticOperations[operation];
  let correctAnswer = 0;
  let question = '';
  switch (value) {
    case '+':
      correctAnswer = a + b;
      question = `${a} + ${b}`;
      break;
    case '-':
      question = `${a} - ${b}`;
      correctAnswer = a - b;
      break;
    case '*':
      question = `${a} * ${b}`;
      correctAnswer = a * b;
      break;
    default:
      break;
  }
  return [question, String(correctAnswer)];
};

export {
  getRandomNumber,
  getRandomMathOper,
};
