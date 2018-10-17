/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #9
==========================================
*/

import * as types from '../types';
import { v4 } from 'uuid';

export const chismeAdd = (title, description) => (
    {
        type: types.CHISME_IS_ADDED,
        payload: {
            id: v4(),
            title,
            description,

        }
    }
);

export const chismeIdUpdate = (oldId, newId, creation_datetime) => (
    {
        type: types.CHISME_ID_IS_UPDATED,
        payload: {
            oldId,
            newId,
            creation_datetime
        }
    }
);

export const chismeDelete = (id) => (
    {
        type: types.CHISME_IS_DELETED,
        payload: {
            id
        }
    }
)

export const chismesDbAdd = (chismes) => (
    {
        type: types.CHISMES_DB_ADDED,
        payload:{
            chismes,
        }
    }
);

export const chismesAppInitialize = () => (
    {
        type: types.CHISMES_APP_INITIALIZED,
        payload:{}
    }
);

export const chismeApiRequest = (chismeId) => (
    {
        type: types.CHISME_API_REQUESTED,
        payload: {
            chismeId,
        }
    }
);

export const chismeApiRecieve = (chisme) => (
    {
        type: types.CHISME_RECIEVED_FROM_API,
        payload: {...chisme}
    }
)