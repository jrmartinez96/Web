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
import { connect } from 'react-redux';
import { getChisme, getOrderChismes } from '../../reducers';
import * as actions from '../../actions';
import './last_chismes.css';
import { Link } from 'react-router-dom';

class lastChismes extends React.Component {

    deleteChisme = (id) => {
        const { deleteChismeState } = this.props;

        deleteChismeState(id);
    }

    render(){
        const { appState } = this.props;
        const orderChismes = getOrderChismes(appState);
        return(
            <div className="last-chismes-box">
                {orderChismes.map( id => {
                    const chisme = getChisme(appState, id);
                    const { title} = chisme;
                    
                    return(
                        <div key={id}> 
                            Chisme {id}: {title} 
                            <Link to={`/chisme${id}`}> Leer mas </Link>
                            <Link to={'/'} onClick={() => this.deleteChisme(id)}> x borrar</Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        appState: state,
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        deleteChismeState: (id) => {
            dispatch(actions.chismeDelete(id))
        }
    }
)

const LastChismes = connect(mapStateToProps, mapDispatchToProps)(lastChismes);

export default LastChismes;