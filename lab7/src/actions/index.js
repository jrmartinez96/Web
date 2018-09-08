/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #7
==========================================
*/

import * as types from "../types"
import { v4 } from 'node-uuid';

export const postAdd = (postText) => (
    {
        type: types.POST_IS_ADDED,
        payload: {
            id: v4(),
            postText,
            karma: 0,
            comments:[]
        }
    }
);

export const postUpvote = (id) => (
    {
        type: types.POST_IS_UPVOTED,
        payload: {id}
    }
);

export const postDownvote = (id) => (
    {
        type: types.POST_IS_DOWNVOTED,
        payload:{id}
    }
);

export const commentAdd = (postId, commentText) => (
    {
        type: types.COMMENT_IS_ADDED,
        payload: {
            commentId: v4(),
            postId, 
            commentText
        }
    }
);