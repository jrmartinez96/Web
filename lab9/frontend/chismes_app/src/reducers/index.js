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
import currentChisme from './currentChisme';
import chismes from './chismes';
import * as fromChismes from './chismes';


/* REDUCERS */
const reducer = combineReducers({
    currentChisme,
    chismes,
    form: formReducer,
})

export default reducer;


/* SELECTORS */
export const getChisme = (state, id) => fromChismes.getChisme(state.chismes, id);
export const getOrderChismes = (state) => fromChismes.getOrderChismes(state.chismes);
export const getCurrentChisme = (state) => state.currentChisme;