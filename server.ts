import routes from './api/routes';
import express = require('express');

const app: express.Application = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
  console.log("dev environment variables loaded");
}

app.use(express.json());
routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('Webhook ready on: ' + port);