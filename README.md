# An Alexa Skill: Who's On First?

This is a small Alexa skill which autoresponds to various prompts from Abbott and Costello's Whos On First? sketch. The service is built on the [alexa-app-server](https://www.npmjs.com/package/alexa-app-server) and [alexa-app](https://www.npmjs.com/package/alexa-app) packages.

[Reference material](http://www.psu.edu/dept/inart10_110/inart10/whos.html).

## Requirements
- [Node.js](https://nodejs.org/en/) (v4.4.1 tested)
- An [Amazon Alexa Skills Kit](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/getting-started-guide) account
- An [Amazon Echo](https://www.amazon.com/echo) or [Echo Dot](https://www.amazon.com/echo-dot) device

## Setting Up The Service

```bash
git clone https://github.com/ewandennis/alexa-skill-abbot 
npm install
npm start
```

The service is now listening on port 3000.  You can test it by pointing your browser at [http://localhost:3000/alexa/abbot](http://localhost:3000/alexa/abbot).

To use it with your Echo, you will have to deploy it somewhere public such as Amazon Lambda or Heroku (the project has a Procfile for Heroku) and then register the skill in your Amazon Alex Skills Kit account.

