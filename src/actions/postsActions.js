import axios from 'axios';
import {
  setNewPost, setPosts, setRemovePost, setUpdatePost,
} from '../reducers/postReducer';

const BASE_URL = 'https://bloggy-api.herokuapp.com/posts/';

export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(BASE_URL);
    dispatch(setPosts(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const addPost = (newPost) => async function (dispatch) {
  try {
    const response = await axios.post(BASE_URL, newPost);
    dispatch(setNewPost(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const removePost = (postId) => async function (dispatch) {
  try {
    await axios.delete(`${BASE_URL}/${postId}`);
    dispatch(setRemovePost(postId));
  } catch (error) {
    console.error(error);
  }
};

export const editPost = (newObject) => async function (dispatch) {
  dispatch(setUpdatePost(newObject));
  axios.put(`${BASE_URL}/${newObject.id}`, { title: newObject.title, body: newObject.body });
};
