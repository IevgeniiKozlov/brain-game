import getRandomInt from '../random-integer.js';
import letPlay from '../cli.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};


const getPrime = () => {
  const num = getRandomInt(1, 100);
  const answer = isPrime(num) ? 'yes' : 'no';
  return [String(question), answer];
};

export default () => letPlay(description, getPrime);
