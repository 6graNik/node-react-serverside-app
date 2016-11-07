import serialize from 'serialize-javascript';
import {renderToString} from 'react-dom/server';


function page(component, store) {
  const state = store.getState();
  const initialScript = `
  <script>
    window.__initialState__ = ${serialize(state)};
  </script>
  `;

  // скрипты сгенерированные вебпаком
  const bundleJs = `<script src="/scripts/bundle.js"></script>`


  // component должен быть реакт компонентом
  const page = `<html lang="en">
  <head>
    <title>App</title>
  </head>
  <body>
    <div id="root">
      ${renderToString(component)}
    </div>
    ${initialScript}
    ${bundleJs}
  </body>
  </html>`;
  // <script src="//cdnjs.cloudflare.com/ajax/libs/react-router/1.0.0/ReactRouter.js"></script>
  // <script src="//cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react.js"></script>
  // <script src="//cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react-dom.js"></script>
  //  <link rel="stylesheet" href="/assets/css/style.css">

  return page;
}

export default page;
