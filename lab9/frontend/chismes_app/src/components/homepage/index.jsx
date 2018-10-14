/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #9
==========================================
*/

import React, { Fragment } from 'react';
import NavBar from '../navBar';
import LastChismes from '../last-chismes';
import ChismeForm from '../chisme-form';
import './homepage.css';

class Homepage extends React.Component {

    render(){

        return(
            <Fragment>
                <NavBar title="Los Chismes" />
                <div className="last-chismes-title">
                    Últimos Chismes:
                </div>
                <LastChismes />
                <ChismeForm />
            </Fragment>
        )
    }
}

export default Homepage;