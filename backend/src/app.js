const express = require('express');
const cors = require('cors');

const {
  newsRouter,
  regionsRouter,
  tvRouter,
  videosRouter,
} = require('./routes');

const app = express();
const port = 3001;

app.use(cors());
app.use(newsRouter);
app.use(regionsRouter);
app.use(tvRouter);
app.use(videosRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
