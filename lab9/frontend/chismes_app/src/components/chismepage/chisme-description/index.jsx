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
import NavBar from '../../navBar';

const ChismeDescription = ({chisme}) => (
    <Fragment>
        <NavBar title={`Chisme ${chisme.id}`} />
                <div className="chisme-title"> {chisme.title} </div>
                <div className="chisme-date"> Fecha de creacion: <b>{chisme.creation_datetime}</b> </div>
                <div className="chisme-description"> {chisme.description} </div>
    </Fragment>
);

export default ChismeDescription;