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
import './post-input.css';
import { connect } from 'react-redux';

import { postAdd } from '../../actions';

class postInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            inputText:''
        }
    }

    onClick = () => {
        const {inputText} = this.state;
        const {onPostClick} = this.props;
        if(inputText !== ''){
            onPostClick(inputText);
    
            this.setState({inputText:''});
        }

    }

    render(){
        const {inputText} = this.state;

        return(
            <div className="input-box">
                <textarea 
                    className="input-text"
                    type='text'
                    value={inputText}
                    onChange={e => this.setState({inputText: e.target.value})}
                    placeholder="What are you thinking?"
                />

                <div className="post-button" onClick={this.onClick}>
                    Post
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
            onPostClick: (text) => {
                dispatch(postAdd(text));
            }
        };
    
}

const PostInput = connect(null, mapDispatchToProps)(postInput);

export default PostInput;