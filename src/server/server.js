import express from 'express';
import bodyParser from 'body-parser';
import pageController from './controllers/pageController.js';

const app = express();

const noFallthrough = {
  // если файл не найден или произошла ошибка — не передавать
  // обработку следующему обработчику, а отправлять ответ клиенту
  fallthrough: false
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/scripts', express.static('public/scripts', noFallthrough));


app.get('/', pageController);

app.listen(3000, function () {
  console.log('Express server started');
});

module.exports = function server() {
  return app;
};
