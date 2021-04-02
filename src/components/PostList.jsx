import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../actions/commentsActions';
import { getPosts, removePost } from '../actions/postsActions';
import NewPost from './NewPost';
import Post from './Post';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);

  const style = {
    background: '#d8ecf3',
    padding: '15px',
    margin: '15px',
    borderRadius: '5px'
  }

  const onRemovePost = (postId) => {
    dispatch(removePost(postId));
  };

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments());
  }, [dispatch]);

  return (
    <div style={style}>
      <NewPost />

      <h1>List of Posts:</h1>
      {
        posts.map((post) => <Post post={post} key={post.id} removePost={onRemovePost} />)
      }
    </div>
  );
};

export default PostList;
