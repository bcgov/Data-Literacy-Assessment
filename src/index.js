import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App_EN from './App_EN';
import * as serviceWorker from './serviceWorker';

if (document.documentElement.lang === "fr"){
    ReactDOM.render(
        <React.StrictMode>
          <App_FR />
        </React.StrictMode>,
        document.getElementById('root')
      );
}
else {
    ReactDOM.render(
        <React.StrictMode>
          <App_EN />
        </React.StrictMode>,
        document.getElementById('root')
      );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
