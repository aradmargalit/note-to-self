const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');
const keys = require('../config/keys');
const { Schema } = mongoose;

var MemorySchema = new Schema(
  {
    author_id: String,
    memory: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

const options = {
  encryptionKey: keys.encKey,
  signingKey: keys.sigKey,
  encryptedFields: ['memory'],
};

MemorySchema.plugin(encrypt, options);

mongoose.model('memories', MemorySchema);
