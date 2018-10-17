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
import ChismeDescription from './chisme-description';
import { getCurrentChisme } from '../../reducers'
import * as actions from '../../actions';

import './chismepage.css'

class chismepage extends React.Component {

    componentDidMount(){
        const { chismeId } = this.props.match.params;
        const { getChisme } = this.props;
        getChisme(chismeId)
    }

    render(){

        const { currentChisme } = this.props;
        return(
            <Fragment>
                {currentChisme === {} ? <NavBar /> : <ChismeDescription chisme={currentChisme}/>}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>(
    {
        appState: state,
        currentChisme: getCurrentChisme(state),
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        getChisme: (chismeId) => dispatch(actions.chismeApiRequest(chismeId))
    }
)

const Chismepage = connect(mapStateToProps, mapDispatchToProps)(chismepage);

export default Chismepage;