/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #7
==========================================
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Root from './components/Root';
import configureStore from './configureStore';
import { postAdd } from './actions'

const store = configureStore();
store.dispatch(postAdd("bla bla bla"))


ReactDOM.render(
    <Root store={store}/>, 
    document.getElementById('root')
);

registerServiceWorker();
