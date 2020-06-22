
import readlineSync from 'readline-sync';

const letPlay = (description, getData) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${nameUser}!`);
  console.log(`${description}`);
  const levelCount = 3;
  for (let i = 0; i < levelCount; i += 1) {
    const [questionGame, answerGame] = getData();
    const answerUser = readlineSync.question(`Question: ${questionGame}?\n`);
    if (answerGame === answerUser) {
      console.log('Correct!');
      // eslint-disable-next-line no-continue
      continue;
    } else {
      console.log(`${answerUser} is wrong answer ;(`);
      console.log(`Correct answer was ${answerGame}. Let's try again, ${nameUser}!`);
    } break;
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default letPlay;
