const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const app = express();
const port = 5000;

// Use keys because mongo URI contains login credentials
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express knows how to serve production assets (like main.js)
  app.use(express.static('client/build'));
  // Express will serve up the HTML file if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Heroku is going to inject port here, unless it's localhost
const PORT = process.env.PORT || port;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
