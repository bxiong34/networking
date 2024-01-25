const usernames = [
  {
    username: 'lernantino',
    email: 'lernantino@gmail.com',
  },
  {
    username: 'SkyWalker23',
    email: 'skywalker@gmail.com',
  },
  {
    username: 'PixelMaster',
    email: 'pixelmaster@gmail.com',
  },
  {
    username: 'CyberPhoenix',
    email: 'cyberphoenix@gmail.com',
  },
  {
    username: 'VelvetVortex',
    email: 'velvetvortex@gmail.com',
  },
];

const thoughts = [
'Do you see this sample thought?',
'Bootcamp is almost done, yes!',
'Is the week almost done yet?',
'The weather is bipolar.',
'Should I eat?',
];

const reactions = [
 'Nice thought!',
 'Seriously.',
 'Hang in there!',
 'Ready to sleep.',
 'TGIF!',
];

const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

// get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// generate random reactions
const getRandomReactions = () => `${reactions[genRandomIndex(reactions)]}`;

// generate random users
const getRandomUser = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push(getRandomArrItem(usernames));
  }
  return results;
};

// generate random thoughts
const getRandomThoughts = (react) => {
  let thought = '';
  for (let i = 0; i < react; i++) {
    thought += ` ${getRandomReactions()}`;
  }
  return thought;
};

console.log(usernames);
console.log(thoughts);
console.log(reactions);
// console.log(getRandomUser);
// console.log(getRandomThoughts);
// console.log(getRandomReactions);

module.exports = { getRandomUser, getRandomThoughts, getRandomReactions };