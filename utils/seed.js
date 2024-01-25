const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThoughts, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  // delete from collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  const thoughts = [...getRandomThoughts(10)];
  const reactions = [];
  const users = [];

  // makes thoughts array
  const makeThought = (thoughtText) => {
    thoughts.push({
      thoughtText,
      username: getRandomUser().split(' ')[0],
      reactions: [reactions[genRandomIndex(reactions)]._id],
    });
  };

  await Thought.collection.insertMany(reactions);

  reactions.forEach(() => makeThought(getRandomThoughts(30)));

  await Thought.collection.insertMany(thoughts);

  await User.collection.insertMany(users);

  console.table(thoughts);
  console.table(reactions);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});