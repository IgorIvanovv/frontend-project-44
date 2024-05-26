import readlineSync from 'readline-sync';

export default (description, getRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  let roundsCount = 3;
  while (roundsCount) {
    const [question, correctAnswer] = getRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    roundsCount -= 1;
  }
  console.log(`Congratulations, ${name}!`);
};
