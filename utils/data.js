const mongoose = require('mongoose');

const thoughts = [
  {
    thoughtText: 'Do you see this sample thought?',
    thoughtId: new mongoose.Types.ObjectId(),
    createdAt: new Date(),
    username: 'lernantino', 
    reactions: [],
  },
  {
    thoughtText: 'Bootcamp is almost done, yes!',
    thoughtId: new mongoose.Types.ObjectId(),
    createdAt: new Date(),
    username: 'PixelMaster', 
    reactions: [],
  },
  {
    thoughtText: 'Is the week almost done yet?',
    thoughtId: new mongoose.Types.ObjectId(),
    createdAt: new Date(),
    username: 'SkyWalker23', 
    reactions: [],
  },
  {
    thoughtText: 'The weather is bipolar.',
    thoughtId: new mongoose.Types.ObjectId(),
    createdAt: new Date(),
    username: 'CyberPhoenix', 
    reactions: [],
  },
  {
    thoughtText: 'Should I eat?',
    thoughtId: new mongoose.Types.ObjectId(),
    createdAt: new Date(),
    username: 'VelvetVortex', 
    reactions: [],
  },
];

const users = [
  {
    username: 'lernantino',
    email: 'lernantino@gmail.com',
    thoughts: [thoughts[0].thoughtId],
    friends: [],
  },
  {
    username: 'SkyWalker23',
    email: 'skywalker@gmail.com',
    thoughts: [thoughts[2].thoughtId],
  },
  {
    username: 'PixelMaster',
    email: 'pixelmaster@gmail.com',
    thoughts: [thoughts[1].thoughtId],
  },
  {
    username: 'CyberPhoenix',
    email: 'cyberphoenix@gmail.com',
    thoughts: [thoughts[3].thoughtId],
  },
  {
    username: 'VelvetVortex',
    email: 'velvetvortex@gmail.com',
    thoughts: [thoughts[4].thoughtId],
  },
];

const reactions = [
  {
   reactionBody: 'Nice thought!',
   reactionId: new mongoose.Types.ObjectId(),
   username: users[1].username,
   createdAt: new Date(),
  },
  {
   reactionBody: 'Seriously.',
   reactionId: new mongoose.Types.ObjectId(),
   username: users[4].username,
   createdAt: new Date(),
  },
  {
   reactionBody: 'Hang in there!',
   reactionId: new mongoose.Types.ObjectId(),
   username: users[3].username,
   createdAt: new Date(),
  },
  {
   reactionBody: 'Ready to sleep.',
   reactionId: new mongoose.Types.ObjectId(),
   username: users[0].username,
   createdAt: new Date(),
  },
  {
   reactionBody: 'TGIF!',
   reactionId: new mongoose.Types.ObjectId(),
   username: users[2].username,
   createdAt: new Date(),
  },
];

console.log(users);
console.log(thoughts);
console.log(reactions);

module.exports = { users, thoughts, reactions };