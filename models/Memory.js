const mongoose = require('mongoose');
const { Schema } = mongoose;

const MemorySchema = new Schema({
  author_id: String,
  memory: String,
});

mongoose.model('memories', MemorySchema);
