const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('API root');
});

app.get('/api/test', (req, res) => {
  res.send('You successfully reached the API');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
