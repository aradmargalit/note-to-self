const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    googleId: String,
    displayName: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

mongoose.model('users', UserSchema);
