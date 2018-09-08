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
const byId = (state = {}, action) => {
    switch (action.type) {
        case types.POST_IS_ADDED:{
            const { id } = action.payload;

            return {...state, [id]:action.payload};
        }

        case types.POST_IS_UPVOTED:{
            const { id } = action.payload;
            const post = state[id];
            const { karma } = post

            return {...state, 
                [id]:{
                    ...post, 
                    karma: karma + 1
                }
            };
        }

        case types.POST_IS_DOWNVOTED:{
            const { id } = action.payload;
            const post = state[id];
            const { karma } = post

            return {...state, 
                [id]:{
                    ...post, 
                    karma: karma - 1
                }
            };
        }

        case types.COMMENT_IS_ADDED:{
            const { postId, commentId } = action.payload;
            const post = state[postId];
            const postComments = post.comments;

            return {
                ...state, 
                [postId]: {
                    ...post, 
                    comments:[...postComments, commentId]
                }
            };
        }
    
        default:
            return state
    }
}


const order = (state = [], action) => {
    switch (action.type) {
        case types.POST_IS_ADDED:{
            const {id} = action.payload;
            return [id,...state];
        }

        default:
            return state;
    }
}

const posts = combineReducers({
    byId,
    order,
});



/* SELECTORS */
export const getPost = (state, id) => state.byId[id];

export const getPostComments = (state, id) => getPost(state, id).comments;

export const getPostsIds = (state) => state.order.map( id => id);

export default posts;

