import axios from 'axios';
import absoluteUrl from 'next-absolute-url';

import { ALL_POSTS_SUCCESS, ALL_POSTS_FAIL, POST_DETAILS_SUCCESS, POST_DETAILS_FAIL } from '../constants/postConstants';

// Get all posts
export const getPosts =
  (req, currentPage = 1, location = '', guests, category) =>
  async (dispatch) => {
    try {
      const { origin } = absoluteUrl(req);

      let link = `${origin}/api/posts`;

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_POSTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_POSTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get post details
export const getPostDetails = (req, id) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);

    let url;

    if (req) {
      url = `${origin}/api/posts/${id}`;
    } else {
      url = `/api/posts/${id}`;
    }

    const { data } = await axios.get(url);

    dispatch({
      type: POST_DETAILS_SUCCESS,
      payload: data.post,
    });
  } catch (error) {
    dispatch({
      type: POST_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
