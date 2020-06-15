
import readlineSync from 'readline-sync';

const getLetPlay = (description, getData) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? \n');
  console.log(`Hello, ${nameUser}!`);
  console.log(`${description}`);
  const round = 3;
  for (let i = 0; i < round; i += 1) {
    const [questionGame, answerGame] = getData();
    const answerUser = readlineSync.question(`Question: ${questionGame} ? \n`);
    if (answerGame === answerUser) {
      console.log('Correct!');
      // eslint-disable-next-line no-continue
      continue;
    } else {
      console.log(`${answerUser} is wrong answer ;(  Correct answer was ${answerGame}. Let's try again, ${nameUser}!`);
    } break;
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default getLetPlay;
