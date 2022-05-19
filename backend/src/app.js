const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    msg: 'hello world from backend',
    status: res.statusCode,
  });
});

app.get('/user', (req, res) => {
  res.json([
    {
      name: 'big',
      age: 25,
    },
    {
      name: 'red',
      age: 26,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
