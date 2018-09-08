/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #7
==========================================
*/

import { combineReducers } from 'redux';
import posts, * as fromPosts from './posts';
import comments, * as fromComments from './comments';

/* REDUCERS */
const reducer = combineReducers({
    posts,
    comments,
});

/* SELECTORS */
export const getPost = (state, postId) => fromPosts.getPost(state.posts, postId);
export const getPostsIds = (state) => fromPosts.getPostsIds(state.posts);
export const getPostComments = (state, postId) => fromPosts.getPostComments(state.posts, postId);
export const getComment =(state, commentId) => fromComments.getComment(state.comments, commentId);

export default reducer;