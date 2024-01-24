const { Schema, model } = require('mongoose');

// schema for User
const userSchema = new Schema({
    username: { 
        type: String, 
        unique: true, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true, 
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    thoughts: [
      { 
        type: Schema.Types.ObjectId, 
        ref: 'thought' 
      }
    ],
    friends: [
      { 
        type: Schema.Types.ObjectId, 
        ref: 'user' 
      }
    ],
});

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.friends.length}`;
  })

// user model
const User = model('user', userSchema);

const handleError = (err) => console.error(err);

User
  .create({
    username: 'lernantino',
    email: 'lernantino@gmail.com',
  })
  .then(result => console.log('New user created.', result))
  .catch(err => handleError(err));

module.exports = User;
