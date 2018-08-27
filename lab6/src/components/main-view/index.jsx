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
import { Fragment } from 'react';

import { AdminView } from '../admin-view';
import ClientView  from '../client-view';

const mainView = ({
    adminView
}) => (
    <Fragment>
        {adminView && <AdminView />}
        {!adminView && <ClientView />}
    </Fragment>
);

const mapStateToProps = (state) => {
    return {
        adminView: state.adminView
    };
};

export const MainView = connect(mapStateToProps,null)(mainView);