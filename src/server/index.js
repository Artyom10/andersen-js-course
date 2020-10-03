const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const personRouter = require('./routes/personRouter');
const companyRouter = require('./routes/companyRouter');

const PORT = 3000;
const DB =
  'mongodb+srv://course:course@cluster0.l7cpp.mongodb.net/<dbname>?retryWrites=true&w=majority';

const app = express();

app.use(cors());
app.use('/', personRouter);
app.use('/', companyRouter);

app.get('/', (req, res) => {
  res.send('What do you need on this server? /people or /company');
});

mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  () => console.log('connect our DataBase')
);

app.listen(PORT, () => {
  console.log('Server working');
});
