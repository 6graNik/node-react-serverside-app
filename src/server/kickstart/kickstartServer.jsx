import React from 'react';
import { Provider } from 'react-redux'
import {createStore} from 'redux'

import renderPage from '../renderPage.jsx';
import Main from '../../routes/main.jsx';

// здесь будем подключать редюссеры
const initialState = {
  test: true
};
const reducers = () => ({test: true});
const store = createStore(reducers, initialState);

// формируем ответ, используем реакт обертки, создаем редакс стор, диспатчим инитиал экшены
const kickstartServer = () => {
    return new Promise((resolve, reject) => {
      // прверки инициализации
      const component = (
        <Provider store={store}>
          <Main />
        </Provider>
      );

      resolve(renderPage(component, store));
    }).catch( err => {
      console.log(' err ', err);
    })
};

export default kickstartServer;
