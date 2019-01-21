const mongoose = require('mongoose');
const { Schema } = mongoose;

const MemorySchema = new Schema(
  {
    author_id: String,
    memory: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

mongoose.model('memories', MemorySchema);
