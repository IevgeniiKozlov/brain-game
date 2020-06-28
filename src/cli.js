import readlineSync from 'readline-sync';

const letPlay = (description, getData) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${nameUser}!`);
  console.log(`${description}`);
  const levelsCount = 3;
  for (let i = 0; i < levelsCount; i += 1) {
    const [questionGame, answerGame] = getData();
    const answerUser = readlineSync.question(`Question: ${questionGame}?\n`);
    if (answerGame !== answerUser) {
      console.log(`${answerUser} is wrong answer ;(`);
      console.log(`Correct answer was ${answerGame}. Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default letPlay;
