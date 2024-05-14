import readlineSync from 'readline-sync';

const parityCheck = (value) => (value % 2 === 0);
const getRandomNumber = () => {
  const min = Math.ceil(1);
  const max = Math.floor(15);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const checkBoolValue = (value) => ((value) ? 'yes' : 'no');

const logicBrainEven = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let count = 3;
  while (count) {
    const getCurrentRandomNumber = getRandomNumber();
    const getCurrentParity = parityCheck(getCurrentRandomNumber);
    const getCorrectCurrentParity = checkBoolValue(getCurrentParity);
    console.log(`Question: ${getCurrentRandomNumber}`);
    const getUserAnswer = readlineSync.question('Your answer: ');
    if ((getCurrentParity === true && getUserAnswer === 'yes') || (getCurrentParity === false && getUserAnswer === 'no')) {
      console.log('Correct!');
      count -= 1;
    } else if (getCurrentParity === true && getUserAnswer === 'no') {
      console.log(`"${getUserAnswer}" is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}`);
      break;
    } else if (getCurrentParity === false && getUserAnswer === 'yes') {
      console.log(`'${getUserAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`);
      break;
    } else {
      console.log(`'${getUserAnswer}' is wrong answer ;(. Correct answer was '${getCorrectCurrentParity}'.\nLet's try again, ${name}`);
      break;
    }
  }
  if (count === 0) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default logicBrainEven;
