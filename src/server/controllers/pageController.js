import page from '../../routes/main.jsx';

var pageController = function (req, res) {
  res.send(page());
};

export default pageController;
