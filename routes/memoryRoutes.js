const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const Memory = mongoose.model('memories');

module.exports = app => {
  app.post('/api/memories', requireLogin, async (req, res) => {
    await new Memory({
      author_id: req.user.googleId,
      memory: req.body.text,
    }).save();

    Memory.find({ author_id: req.user.googleId }, function(err, memories) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(memories);
      }
    });
  });

  app.get('/api/memories', requireLogin, async (req, res) => {
    //TODO::AM DRY this up
    Memory.find({ author_id: req.user.googleId }, function(err, memories) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(memories);
      }
    });
  });
};
