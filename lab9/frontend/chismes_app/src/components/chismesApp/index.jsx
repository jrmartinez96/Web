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
import Homepage from '../homepage';
import Chismepage from '../chismepage';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class ChismesApp extends React.Component {

    render(){
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route path='/chisme:chismeId' component={Chismepage} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default ChismesApp;