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
import './comment-input.css';

import { connect } from 'react-redux';
import { commentAdd } from '../../actions';

class commentInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            inputText: ''
        }
    }

    onButtonClickAdd = () => {;
        const { addComment, postId } = this.props;
        const { inputText } = this.state;
        if(inputText !== ''){
            addComment(postId,inputText);
            this.setState({inputText:''});
        }
    }
    
    render(){

        return(
            <div className="comment-input-box">
                <textarea
                    className="comment-input"
                    value={this.state.inputText}
                    onChange={e => this.setState({inputText: e.target.value})}
                    placeholder="Write a comment here..."
                />
                <div className="button-add" onClick={this.onButtonClickAdd}> Add Comment </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addComment: (postId, commentText) => {
            dispatch(commentAdd(postId, commentText));
        }
    }
}

const CommentInput = connect(null, mapDispatchToProps)(commentInput);

export default CommentInput;