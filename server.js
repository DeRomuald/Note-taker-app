const express = require('express');
const apiRouter = require('./routes/apiRoutes');
const htmlRouter = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRouter);
app.use('/', htmlRouter);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
