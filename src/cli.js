#!/usr/bin/env node
import readlineSync from 'readline-sync';


const isNumberEven = (coll) => {
  if (coll % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getLetPlay = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name?' + '\n');
  console.log(`Hello, ${nameUser}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const coll = [15, 6, 7];
  for (let i = 0; i < coll.length; i += 1) {
    const answerUser = readlineSync.question(`Question: ${coll[i]} ? \n`);
    if (isNumberEven(coll[i]) === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`${answerUser} is wrong answer ;(  Correct answer was ${isNumberEven(coll[i])}. Let's try again, ${nameUser}!`);
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};
export default getLetPlay;
