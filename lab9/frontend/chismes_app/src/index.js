import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import Root from './components/Root';
import configureStore from './configureStore';


import { chismesAppInitialize } from './actions';

const store = configureStore();
store.dispatch(chismesAppInitialize());

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
);


serviceWorker.unregister();
