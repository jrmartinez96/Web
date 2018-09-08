/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #7
==========================================
*/

import React, { Component } from 'react';
import './red-social-app.css';
import NavBar from '../nav-bar';
import Feed from '../feed';

class RedSocialApp extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Feed />
      </div>
    );
  }
}

export default RedSocialApp;