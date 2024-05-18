import readlineSync from 'readline-sync';

export default (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello ${name}!`);

  console.log(description);
  let count = 3;
  while (count) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      count -= 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`);
      break;
    }
  }
  if (count === 0) {
    console.log(`Congratulations, ${name}`);
  }
};
