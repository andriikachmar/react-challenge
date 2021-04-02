import axios from 'axios';
import { setComments, setNewComment } from '../reducers/commentsReducer';

const BASE_URL = 'https://bloggy-api.herokuapp.com/comments';

export const getComments = () => async (dispatch) => {
  try {
    const response = await axios.get(BASE_URL);
    dispatch(setComments(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const addComment = (newObj) => async (dispatch) => {
  const response = await axios.post(BASE_URL, { postId: newObj.postId, body: newObj.body });
  dispatch(setNewComment(response.data));
};
