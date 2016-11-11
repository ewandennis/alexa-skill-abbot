'use strict';

let alexa = require('alexa-app')
  , app = new alexa.app('abbot');

function choices(n) {
  return Math.floor(Math.random() * n);
}

app.optionMap = (name, calls, answers) => {
  return app.intent(name,
  {
    utterances: calls,
  }, (req, res) => {
    let choice = choices(answers.length);
    res.say(answers[choice]);
  });
};

app.launch( (req, res) => {
  res.say("On the St. Louis team we have who's on first, what's on second, I don't know is on third");
});

app.optionMap('who', [
  "Who",
  "{Who's|Who is} {the guy|} on first {base|}",
], [
  'Yeah. Who is on first base.',
  "That is the man's name",
  "Who is on first",
]);

app.optionMap('what', [
  "What",
  "{What's|What is} on second {base|}",
  "What is the guy's name on second base"
], [
  "Naturally",
  "He certainly is"
]); 

app.optionMap('who2',[
  "{Who's|Who is} on second {base|}",
],[
  'No, who is on first. What is on second',
  "The man's name on first base is who"
]);

app.optionMap('why', [
  "Why",
  "The left fielder's name",
  "What's the left fielder's name",
], [
  "Why"
]);

app.optionMap('why2', [
  "{Who's|What's} the left fielder",
], [
  "No, that's why"
]);

app.optionMap('because', [
  "Because",
], [ 
  "He's centre field"
]);

app.optionMap('tomorrow', [
  "Tell me the pitcher's name",
  "{What is|What's} the pitcher's name",
],[
  "Tomorrow"
]);

app.optionMap('tomorrow2', [
  "Who's the pitcher?"
], [
  "No, tomorrow is the pitcher"
]);

app.optionMap('dontcare', [
  "I don't care"
], [
  "That's our shortstop"
]);

app.error = (err, req, res) => {
  console.log(err);
  console.log(req);
  console.log(res);
  res.say('Sorry I dropped my guts');
};

module.exports = app;
