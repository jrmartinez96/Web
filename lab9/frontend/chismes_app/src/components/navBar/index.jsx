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
import './navBar.css';

const NavBar = ({title}) => (
    <div className="container">
        <div className="title">
            {title}
        </div>
    </div>
)

export default NavBar;