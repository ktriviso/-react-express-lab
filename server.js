const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
<<<<<<< HEAD
const path = require('path');
=======
const path       = require('path');

>>>>>>> 17caee0cb4fc93892a2b9cd88a25249dbfb789a3

const quotesRouter = require('./routes/quotes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
<<<<<<< HEAD

app.use('/api/quotes', quotesRouter);

app.get('/', (req, res) => {
    res.json({message: 'react will live here'})
})
=======


app.use('/api/quotes', quotesRouter);
>>>>>>> 17caee0cb4fc93892a2b9cd88a25249dbfb789a3

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
