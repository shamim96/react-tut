import React from 'react'

const Post = ({match}) =>{
    return(
        <h1>This is post: {match.params.postId}</h1>

    )
};

export default Post;