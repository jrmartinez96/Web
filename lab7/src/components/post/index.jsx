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
import './post.css';
import { connect } from 'react-redux';

import Comments from '../comments';
import { getPost } from '../../reducers';
import { postUpvote, postDownvote } from '../../actions';

class post extends React.Component{

    onClickUpvote = () => {
        const { id, onClickPostUpvote } = this.props;
        onClickPostUpvote(id);
    }

    onClickDownvote = () => {
        const { id, onClickPostDownvote } = this.props;
        onClickPostDownvote(id);
    }
    

    render(){
        const { id, appState } = this.props;
        const post = getPost(appState, id);

        return(
            <div className="post">
                <div className="post-box">
                    <div className="post-text">
                        {post.postText}
                    </div>
                    <div className="karma-box">
                        <div className="karma-value">
                            Karma: {post.karma}
                        </div>
                        <div className="karma-buttons-box">
                            <div className="karma-button" onClick={this.onClickUpvote}> Upvote </div>
                            <div className="karma-button" onClick={this.onClickDownvote}> Downvote </div>
                        </div>
                    </div>
                </div>
                <Comments postId={id}/>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return{
        appState: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onClickPostUpvote: (id) => {
            dispatch(postUpvote(id));
        },

        onClickPostDownvote: (id) => {
            dispatch(postDownvote(id));
        }

    }
}

const Post = connect(mapStateToProps,mapDispatchToProps)(post);

export default Post;