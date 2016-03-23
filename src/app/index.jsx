import React from 'react';
import ReactDOM from 'react-dom';

import{Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers/index';

import App from './components/index.jsx';

var store = applyMiddleware(ReduxPromise)(createStore)(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'));