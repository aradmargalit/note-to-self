# :rocket: Node Boilerplate :rocket:

## What It Is

I've tried to get backend federated auth with Google to work for like 3 years and finally stumbled across a course that explained it well!

### It's using

1. [NodeJS](https://nodejs.org/en/) - Javascript backend server
2. [Express](https://expressjs.com/) - Routing, cookie management, HTTP helpers
3. [PassportJS](http://www.passportjs.org) - Handle OAuth 2.0 with Google
4. [Passport Google OAuth 2.0 Strategy](http://www.passportjs.org/packages/passport-google-oauth20/) - Specific Google provider plugin for Passport
5. [Google Developer API](https://console.developers.google.com/) - set up our OAuth
6. [MongoDB](https://www.mongodb.com/) - Persist user IDs to a Mongo store
7. [MLab](https://mlab.com/) - SaaS MongoDB hosting
8. [Heroku](https://www.heroku.com/) - PaaS server hosting - to run the Node/Express Server

## How This Works

![OAuth2.0 with_Google](resources/architecture.png)

## Gotchas

This boilerplate expects there to be secrets available at `config/keys.js`. More specifically, the keys it expects are:

- `googleClientID` - the Client ID provided by Google when you set up OAuth
- `googleClientSecret` - the Client Secret that comes with the above key
- `mongoURI` - the Mongo connection string, which contains an admin user in your MLab instance
- `cookieKey` - a key used to encrypt your cookie data

### Credits

Big thanks to [Stephen Grider](https://github.com/StephenGrider) for creating fantastic Udemy courses on the modern web tech stack. I highly recommend any curious parties to check out his classes!
