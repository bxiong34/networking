const { Schema, model, mongoose } = require('mongoose');

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
        type: mongoose.Types.ObjectId,
        ref: 'thought' 
      }
    ],
    friends: [
      { 
        type: mongoose.Types.ObjectId,
        ref: 'user' 
      }
    ],
});

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })

// user model
const User = model('user', userSchema);

module.exports = User;