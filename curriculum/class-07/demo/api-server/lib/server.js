'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3003;

const schema = {
  name: 'string',
  id: 'number',
  hasDog: 'boolean',
};
const db = [];

// takes in requests and parses JSON to req.body
app.use(express.json());

const logger = (req, res, next) => {
  console.log('LOG ', req.method, req.path);
  next();
};

app.use(logger);

const checkBody = (req, res, next) => {
  const {body} = req;

  const keysArray = Object.keys(schema);

  let hasKeys = keysArray.every(key => {
    console.log(body.hasOwnProperty(key));
    return body.hasOwnProperty(key);
  });

  if(hasKeys && Object.keys(body).length === keysArray.length) {
    console.log('has the same keys');
    next();
  } else {
    console.llg('has different keys');
    next('you did not match the schema');
  }

  const errorHandler = (err, req, res, next) => {
    res.status(400).send(err);
  };
};

app.use(checkBody);
if (body.hasOwnProperty)

app.get('/things', (req, res) => {
  res.status(200);
  res.send(db);
});

app.post('/things', (req, res) => {
  const record = {...req.body};
  record.id = db.length ? db[db.length - 1].id + 1 : 1;
  db.push(record);
  res.status(201).send(record);
});


// Error handling must go at the end

module.exports = exports = {
  start: (PORT) => {
    app.listen(PORT, () => {console.log(`up on port ${PORT}`)});
  }
};
