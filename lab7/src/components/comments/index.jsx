/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #7
==========================================
*/

import React from 'react';
import './comments.css';

import { connect } from 'react-redux';
import { getPostComments } from '../../reducers';

import CommentInput from '../comment-input';
import Comment from '../comment';

class comments extends React.Component{
    
    render(){
        const { appState,postId } = this.props;
        const commentsIds = getPostComments(appState, postId);

        return(
            <div className="comments-box">
                <CommentInput postId={postId}/>

                <div style={{textAlign:"right"}}> Comments ({commentsIds.length}) </div>
                <div className="comments">
                    {commentsIds.map(id => {
                        return ( <Comment key={id} commentId={id} />)
                    })}
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        appState: state,
    }
}

const Comments = connect(mapStateToProps,null)(comments);

export default Comments;