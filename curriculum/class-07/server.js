'use strict';

const express = require('express');
const logger = require('./logger.js');
const superagent = require('superagent');

let app = express();

app.use(express.json());

// logger
app.use(logger);

let dumbMW = (req, res, next) => {
  console.log('why are you doing something to do nothing?');
  next();
}

let smartMW = (person) => {
  return (req, res, next) => {
    req.person = person;
    next();
  }
}

app.get('/', (req, res) => {
  console.log(' in the / route');
  res.status(200);
  res.send('hello world');
});

app.get('/a', dumbMW, dumbMW, dumbMW, (req, res) => {
  res.status(200);
  res.send('dumb route A');
});

app.get('/b', smartMW('Boe'), (req, res) => {
  console.log(`the nae of the person for the route is, ${req.person}`);
  res.status(200);
  res.send(`the nae of the person for the route is, ${req.person}`);
});

app.listen(3000, console.log('up on 3000'));
