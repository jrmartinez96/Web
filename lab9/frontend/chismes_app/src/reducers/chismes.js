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
import { combineReducers } from 'redux'


/* REDUCERS */

const byId = (state={}, action) => {
    switch (action.type) {
        case types.CHISMES_DB_ADDED:
            const { chismes } = action.payload;
            let newState = {};
            chismes.map(chisme => {
                const { pk } = chisme;
                newState = {...newState, [pk]:chisme}
                return chisme;
            });
            return {...newState};

        case types.CHISME_IS_ADDED:
            const { id } = action.payload;

            return {...state, [id]:action.payload};
        
        case types.CHISME_ID_IS_UPDATED:
            const { oldId, newId, creation_datetime } = action.payload;

            //Se modifica el chisme
            const chisme = state[oldId];
            chisme.id = newId;
            chisme.creation_datetime = creation_datetime;

            return {...state, [oldId]: undefined, [newId]:chisme}

        case types.CHISME_IS_DELETED:{
            const { id } = action.payload;

            return {...state, [id]: undefined}
        }
    
        default:
            return state;
    }
};

const order = (state=[], action) => {
    switch (action.type) {
        case types.CHISMES_DB_ADDED:
            const { chismes } = action.payload;
            let newState = [];
            chismes.map(chisme => {
                const { pk } = chisme;
                newState = [...newState, pk]
                return chisme;
            });
            return [...newState];
        
        case types.CHISME_IS_ADDED:
            const { id } = action.payload;
            return [...state, id]
        
        case types.CHISME_ID_IS_UPDATED:
            const { oldId, newId } = action.payload;

            return state.map(id => {
                if( id === oldId ){
                    return newId
                }

                return id;
            })

        case types.CHISME_IS_DELETED:{
            const { id } = action.payload;

            return state.filter( chismeId => chismeId !== id);
        }
        
        default:
            return state;
    }
}

const chismes = combineReducers({
    byId,
    order
});

export default chismes;


/* SELECTORS */
export const getChisme = (state, id) => state.byId[id];

export const getOrderChismes = (state) => state.order;