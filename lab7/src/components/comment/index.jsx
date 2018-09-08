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
import './comment.css';

import { connect } from 'react-redux';
import { getComment } from '../../reducers';

class comment extends React.Component{

    render(){
        const { appState, commentId } = this.props;
        const comment = getComment(appState, commentId);

        return(
            <div className="comment">
                {comment.commentText}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        appState: state
    }
} 

const Comment = connect(mapStateToProps, null)(comment);

 export default Comment;