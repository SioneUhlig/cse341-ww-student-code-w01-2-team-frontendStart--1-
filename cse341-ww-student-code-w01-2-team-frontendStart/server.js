const express = require('express');
const cors = require('cors');
const app = express();
const mongodb = require('./routes/data/database');

const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static('frontend'));

app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening and node running on port ${port}`);
    });
  }
});