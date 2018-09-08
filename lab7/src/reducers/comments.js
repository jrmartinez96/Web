/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #7
==========================================
*/

import * as types from "../types";
import { combineReducers } from 'redux';


/* REDUCERS */
const byId = (state={}, action) => {
    switch (action.type) {
        case types.COMMENT_IS_ADDED:{
            const { commentId } = action.payload;

            return {
                ...state,
                [commentId]: action.payload
            };
        }

        default:
            return state;
    }
}

const comments = combineReducers({
    byId,
});

/* SELECTORS */
export const getComment = (state, commentId) => state.byId[commentId];

export default comments;