import { POST_DETAILS_SUCCESS, POST_DETAILS_FAIL, ALL_POSTS_SUCCESS, ALL_POSTS_FAIL } from '../constants/postConstants';

// Posts reducer
const initialState = {
  postList: [],
  postDetail: {},
};

export const postReducers = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ALL_POSTS_SUCCESS:
      return {
        ...state,
        postList: action.payload.posts,
      };

    case ALL_POSTS_FAIL:
      return {
        error: action.payload,
      };

    case POST_DETAILS_SUCCESS:
      return {
        postDetail: action.payload,
      };

    case POST_DETAILS_FAIL:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};
