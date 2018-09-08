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
import { connect } from 'react-redux';
import './posts-feed.css';

import Post from '../post';
import { getPostsIds } from '../../reducers';

class postsFeed extends React.Component{

    render(){
        const { appState } = this.props;
        const postIds = getPostsIds(appState);

        return(
            <div className="posts-feed">
                {postIds.map(id=>{
                    return <Post key={id} id={id} />
                })}
            </div>
        )

    }
}


const mapStateToProps = (state) => {
    return {
        appState: state,
    }
}

const PostsFeed = connect(mapStateToProps, null)(postsFeed);

export default PostsFeed;