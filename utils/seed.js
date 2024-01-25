const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts, reactions } = require('./data');

connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

connection.once('open', async () => {
  try {
    // delete from collections if they exist
    await Promise.all([Thought.deleteMany(), User.deleteMany()]);

    // insert users
    const insertedUsers = await User.insertMany(users);

    // map usernames to their corresponding _id values
    const usernameToId = {};
    insertedUsers.forEach((user) => {
      usernameToId[user.username] = user._id;
    });

    // update thought and reaction with correct user references
    const thoughtsWithUserIds = thoughts.map((thought) => ({
      ...thought,
      username: usernameToId[thought.username],
    }));

    const reactionsWithUserIds = reactions.map((reaction) => ({
      ...reaction,
      username: usernameToId[reaction.username],
    }));
    
    // insert thoughts and reactions
    await Thought.insertMany(thoughtsWithUserIds);
    await Thought.updateMany({}, { $push: { reactions: { $each: reactionsWithUserIds } } });

    console.log('Seeding complete 🌱');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    // close the MongoDB connection after seeding
    await connection.close();
  }
});