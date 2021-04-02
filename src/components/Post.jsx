import React from 'react';
import { NavLink } from 'react-router-dom';
import Comments from './Comments';

const style = {
  border: '1px solid #000',
  margin: '10px 0',
  padding: '10px',
};

const Post = ({ post, removePost }) => {
  const handleRemovePost = (id) => {
    removePost(id);
  };

  return (
    <div style={style}>
      <button onClick={() => handleRemovePost(post.id)}>Remove</button>
      <button><NavLink to={{ pathname: `/card/:${post.id}`, state: post }}>Edit</NavLink></button>
      <p>
        <b>title: </b>        
        {post.title}
      </p>
      <p>
      <b>body: </b>        
        {post.body}
      </p>
      <Comments id={post.id} />
    </div>
  );
};

export default Post;
