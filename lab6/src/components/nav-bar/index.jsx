/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #6
==========================================
*/

import React from 'react';
import { connect } from 'react-redux';
import "./nav-bar.css";
import { changeView } from "../../action-creators/view-action-creators"; //IMPORTANDO ACTION CREATOR changeView()

const NavBar = ({
    adminView,
    onButtonClick
}) => (
    <div className="nav-bar">
        <div className="container">
            <div className="app-title">
                Carrito de Compras
            </div>
            <div className="view-title">
                {adminView ? "Administrador": "Cliente"}
            </div>
            <div className="view-button" onClick={() => onButtonClick()}>
                Cambiar Rol
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        adminView: state.adminView
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        onButtonClick: () => {
            dispatch(changeView());
        }
    };
};

export const ViewNavBar = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavBar);