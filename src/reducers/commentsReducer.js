import { ADD_COMMENT, GET_COMMENTS } from '../actions/types';

const defaultState = {
  comments: [],
};

export default function postReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
}

export const setNewComment = (comments) => ({ type: ADD_COMMENT, payload: comments });
export const setComments = (comments) => ({ type: GET_COMMENTS, payload: comments });
