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
import './feed.css';
import PostInput from '../post-input';
import PostsFeed from '../posts-feed'

class Feed extends React.Component{

    render(){
            
        return(
            <div className="feed">
                <PostInput />
                <PostsFeed /> 
            </div>
        )
    }
}

export default Feed;