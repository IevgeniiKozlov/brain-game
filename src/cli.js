#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getLetPlay = (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${nameUser}!`);
  console.log(`${description}`);
  for (let i = 0; i < 3; i += 1) {
    const [questionGame, answerGame] = gameData();
    const answerUser = readlineSync.question(`Question: ${questionGame} ? \n`);
    if (answerGame.toString() === answerUser) {
      console.log('Correct!');
      continue;
    } else {
      console.log(`${answerUser} is wrong answer ;(  Correct answer was ${answerGame}. Let's try again, ${nameUser}!`);
    } break;
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default getLetPlay;
