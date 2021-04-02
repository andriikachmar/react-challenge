import {
  ADD_POST, REMOVE_POST, SET_POSTS, UPDATE_POST,
} from '../actions/types';

const defaultState = {
  items: [],
};

export default function postReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_POST:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case UPDATE_POST:
      return {
        ...state,
        items: state.items.map((post) => (post.id !== action.payload.id ? post : action.payload)),
      };
    default:
      return state;
  }
}

export const setPosts = (posts) => ({ type: SET_POSTS, payload: posts });
export const setNewPost = (post) => ({ type: ADD_POST, payload: post });
export const setRemovePost = (postId) => ({ type: REMOVE_POST, payload: postId });
export const setUpdatePost = (post) => ({ type: UPDATE_POST, payload: post });
