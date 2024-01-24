const { Schema, model } = require('mongoose');

// schema for Reaction
const reactionSchema = new Schema({
  reactionId: [
    { 
    type: Schema.Types.ObjectId,
    default: () => new Schema.Types.ObjectId(), 
    }
  ],
  reactionBody: {
    type: String, 
    required: true, 
    maxlength: 280,
  },
  username: {
    type: String, 
    required: true, 
  },
  createdAt: { 
    type: Date, 
    default: Date.now
    ////// Use a getter method to format the timestamp on query //////
  },
});

// gets length of thought's reactions array
reactionSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.thought.length}`;
  })

// schema for thought
const thoughtSchema = new Schema({
  thoughtText: { 
    type: String, 
    required: true, 
    minlength: 1,
    maxlength: 280,
  },
  createdAt: { 
    type: Date, 
    default: Date.now
  },
  username: {
    type: String, 
    required: true, 
  },
  reactions: [reactionSchema],
});

// thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;