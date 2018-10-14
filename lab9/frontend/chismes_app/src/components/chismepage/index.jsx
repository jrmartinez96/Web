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
import { connect } from 'react-redux';
import NavBar from '../navBar';
import { getChisme } from '../../reducers'

import './chismepage.css'

class chismepage extends React.Component {

    render(){
        const { appState } = this.props;
        const { chismeId } = this.props.match.params;

        const chisme = getChisme(appState, chismeId);
        const { title, description, creation_datetime } = chisme;
        return(
            <Fragment>
                <NavBar title={`Chisme ${chismeId}`} />
                <div className="chisme-title"> {title} </div>
                <div className="chisme-date"> Fecha de creacion: <b>{creation_datetime.substring(0,10)}</b> </div>
                <div className="chisme-description"> {description} </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>(
    {
        appState: state,
    }
)

const Chismepage = connect(mapStateToProps, null)(chismepage);

export default Chismepage;