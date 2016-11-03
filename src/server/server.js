import express from 'express';
import bodyParser from 'body-parser';
import pageController from './controllers/pageController.js';

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', pageController);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = function server() {
  return app;
};
