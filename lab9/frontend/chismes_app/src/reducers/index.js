/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #9
==========================================
*/

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import chismes from './chisme';
import * as fromChismes from './chisme';


/* REDUCERS */
const reducer = combineReducers({
    chismes,
    form: formReducer,
})

export default reducer;


/* SELECTORS */
export const getChisme = (state, id) => fromChismes.getChisme(state.chismes, id);
export const getOrderChismes = (state) => fromChismes.getOrderChismes(state.chismes);