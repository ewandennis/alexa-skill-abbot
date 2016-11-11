'use strict';

let alexa = require('alexa-app')
  , app = new alexa.app('abbot');

app.intent('who', {
    utterances: [
      "Who's on first",
      "Who's on first base",
      "Who's the guy on first",
      "Who's the guy on first base",
      "Who is on first",
      "Who is on first base",
      "Who is the guy on first",
      "Who is the guy on first base"
    ]
  }, (req, res) => {
    res.say('Yes');
  }
);

app.error = (err, req, res) => {
  console.log(err);
  console.log(req);
  console.log(res);
  res.say('Sorry I dropped my guts');
};

module.exports = app;
