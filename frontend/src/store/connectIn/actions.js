import * as types from './constants';
// import apiInstance from '../../utils/api';
import { setUser, removeUser, getUser } from '../../utils/global';
import {
  user as dummyUser,
  posts as dummyPosts,
  connections as dummyConnections,
  post as dummyPost,
  connection as dummyConnection,
} from '../../utils/dummy';

const init = () => ({ type: types.INIT });
const initDone = () => ({ type: types.INIT_DONE });

const userRequest = () => ({ type: types.ACTION_REQUEST_USER });
const userError = error => ({ type: types.ACTION_ERROR_USER, error });
const loginSuccess = user => ({ type: types.LOGIN_SUCCESS, user });
const logoutAction = () => ({ type: types.LOGOUT });

const postRequest = () => ({ type: types.ACTION_REQUEST_POST });
const postError = error => ({ type: types.ACTION_ERROR_POST, error });
const getAllPosts = posts => ({ type: types.GET_ALL_POST, posts });
const addPost = post => ({ type: types.ADD_POST, post });
const deletePost = id => ({ type: types.DELETE_POST, id });

const connectionRequest = () => ({ type: types.ACTION_REQUEST_CONNECTION });
const connectionError = error => ({ type: types.ACTION_ERROR_CONNECTION, error });
const getAllConnections = connections => ({ type: types.GET_ALL_CONNECTION, connections });
const addConnection = connection => ({ type: types.ADD_CONNECTION, connection });
const deleteConnection = id => ({ type: types.DELETE_CONNECTION, id });

export const login = (username, password) => {
  return async(dispatch) => {
    dispatch(userRequest());
    try {
      // const user = await apiInstance.post('/login', JSON.stringify({ username, password }));
      const user = await Promise.resolve(dummyUser);
      setUser(user);
      return dispatch(loginSuccess(user));
    } catch(e) {
      dispatch(userError(e));
      console.error(e);
    }
  };
}

export const logout = () => {
  return (dispatch) => {
    removeUser()
    return dispatch(logoutAction());
  };
};

export const loadPosts = () => {
  return async(dispatch) => {
    dispatch(postRequest());
    try {
      // const posts = await apiInstance.get('/posts');
      const posts = await Promise.resolve(dummyPosts);
      return dispatch(getAllPosts(posts));
    } catch(e) {
      dispatch(postError(e));
      console.error(e);
    }
  };
};

export const loadConnections = () => {
  return async(dispatch) => {
    dispatch(connectionRequest());
    try {
      // const connections = await apiInstance.get('/connections');
      const connections = await Promise.resolve(dummyConnections);
      return dispatch(getAllConnections(connections));
    } catch(e) {
      dispatch(connectionError(e));
      console.error(e);
    }
  };
};

export const addNewPost = (newPost) => {
  return async(dispatch) => {
    dispatch(postRequest());
    try {
      // const post = await apiInstance.post('/post/add', JSON.stringify(newPost));
      const post = await Promise.resolve(dummyPost);
      return dispatch(addPost(post));
    } catch(e) {
      dispatch(postError(e));
      console.error(e);
    }
  };
};

export const removePost = (removeId) => {
  return async(dispatch) => {
    dispatch(postRequest());
    try {
      // const postId = await apiInstance.delete(`/post/${removeId}`);
      const postId = await Promise.resolve(dummyPost.id);
      return dispatch(deletePost(postId));
    } catch(e) {
      dispatch(postError(e));
      console.error(e);
    }
  };
}

export const addNewConnection = (newConnection) => {
  return async(dispatch) => {
    dispatch(connectionRequest());
    try {
      // const post = await apiInstance.post('/connection/add', JSON.stringify(newConnection));
      const connection = await Promise.resolve(dummyConnection);
      return dispatch(addConnection(connection));
    } catch(e) {
      dispatch(connectionError(e));
      console.error(e);
    }
  };
};

export const removeConnection = (removeId) => {
  return async(dispatch) => {
    dispatch(connectionRequest());
    try {
      // const connectionId = await apiInstance.delete(`/connection/${removeId}`);
      const connectionId = await Promise.resolve(dummyConnection.id);
      return dispatch(deleteConnection(connectionId));
    } catch(e) {
      dispatch(connectionError(e));
      console.error(e);
    }
  };
};

export const loadUser = () => {
  return async(dispatch) => {
    dispatch(userRequest());
    try {
      // const user = await apiInstance.post('/login', JSON.stringify({ username, password }));
      if (getUser()) {
        return dispatch(loginSuccess(getUser()));
      }
      throw new Error('No User');
    } catch(e) {
      dispatch(userError(e));
      console.error(e);
    }
  };
}

export const load = () => {
  return async(dispatch) => {
    dispatch(init());
    try {
      await dispatch(loadUser());
      await dispatch(loadPosts());
      return dispatch(initDone());
    } catch(e) {
      console.error(e);
    }
  };
}
