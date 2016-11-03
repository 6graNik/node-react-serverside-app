import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {renderToString} from 'react-dom/server';

class Main extends Component {
  render() {
    return (
      <div>Hi Tigran!</div>
    );
  }
};


function page() {
  const page = `<html lang="en">
  <head>
    <title>App</title>
    <link rel="stylesheet" href="/assets/css/style.css">
  </head>
  <body>
    <div id="root">
      ${renderToString(<Main />)}
    </div>
  </body>
  <script src="//cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react-dom.js"></script>
  </html>`;
  // <script src="//cdnjs.cloudflare.com/ajax/libs/react-router/1.0.0/ReactRouter.js"></script>

  return page;
}

export default page;
