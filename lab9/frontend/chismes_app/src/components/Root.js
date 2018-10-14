/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #9
==========================================
*/

import React from 'react';
import { Provider } from 'react-redux';
import ChismesApp from './chismesApp';

const Root = ({ store }) => (
    <Provider store={store}>
        <ChismesApp />
    </Provider>
);

export default Root;