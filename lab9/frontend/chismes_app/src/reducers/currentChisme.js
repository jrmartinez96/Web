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

const currentChisme = (state={}, action) => {
    switch (action.type) {
        case types.CHISME_RECIEVED_FROM_API:{
            return {...action.payload}
        }
    
        default:
            return state;
    }
}

export default currentChisme;