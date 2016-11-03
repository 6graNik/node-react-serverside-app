import kickstartServer from '../kickstart/kickstartServer.jsx';

var pageController = function (req, res) {
  if (true) {
    // будем делать проверки валидности запроса
    kickstartServer(req, res).then( data => {
      res.send(data);
    });
  }
};

export default pageController;
