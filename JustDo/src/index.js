import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './fonts/circe.ttf';
import './fonts/circe_bold.ttf';
import './fonts/circe_extrabold.ttf';
import './fonts/circe_light.ttf';
import './fonts/circe_extralight.ttf';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { store } from "./App/store"

ReactDOM.render(
    <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

