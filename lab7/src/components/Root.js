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
import { Provider } from 'react-redux';
import RedSocialApp from './RedSocialApp';

const Root = ({ store }) => (
    <Provider store={store}>
        <RedSocialApp />
    </Provider>
);

export default Root;