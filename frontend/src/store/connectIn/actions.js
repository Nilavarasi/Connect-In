import * as types from './constants';
import apiInstance from '../../utils/api';
import { setUser, removeUser, getUser } from '../../utils/global';
import {
  // user as dummyUser,
  // posts as dummyPosts,
  connections as dummyConnections,
  post as dummyPost,
  connection as dummyConnection,
} from '../../utils/dummy';

const init = () => ({ type: types.INIT });
const initDone = () => ({ type: types.INIT_DONE });

const userRequest = () => ({ type: types.ACTION_REQUEST_USER });
const userError = error => ({ type: types.ACTION_ERROR_USER, error });
const loginSuccess = user => ({ type: types.LOGIN_SUCCESS, user });
const registerSuccess = () => ({ type: types.REGISTER_SUCCESS });
const registerError = error => ({ type: types.REGISTER_ERROR });
const logoutAction = () => ({ type: types.LOGOUT });
const allUserRequest = () => ({ type: types.ACTION_ALL_REQUEST_USER });
const allUserRequestSuccess = users => ({ type: types.ACTION_ALL_REQUEST_USER_SUCCESS, users });

const postRequest = () => ({ type: types.ACTION_REQUEST_POST });
const postError = error => ({ type: types.ACTION_ERROR_POST, error });
const getAllPosts = posts => ({ type: types.GET_ALL_POST, posts });
const addPost = result => ({ type: types.ADD_POST, result});
const deletePost = id => ({ type: types.DELETE_POST, id });

const connectionRequest = () => ({ type: types.ACTION_REQUEST_CONNECTION });
const connectionError = error => ({ type: types.ACTION_ERROR_CONNECTION, error });
const getAllConnections = connections => ({ type: types.GET_ALL_CONNECTION, connections });
const addConnection = connection => ({ type: types.ADD_CONNECTION, connection });
const deleteConnection = result => ({ type: types.DELETE_CONNECTION, result });
const allConnectionPostsRequest = () => ({type: types.ACTION_REQUEST_CONNECTION_POST})
const getAllConnectionPosts = posts => ({ type: types.REQUEST_CONNECTION_POST_SUCCESS, posts });

export const login = (email, password) => {
  return async(dispatch) => {
    dispatch(userRequest());
    try {
      const user = await apiInstance.post('/login', JSON.stringify({email: email, password: password}));
      console.log("user", user)
      if (user.data === 'User Not Exists Or Invalid Credentials') {
        dispatch(userError(user.data));
      } else {
        setUser(user.data);
        return dispatch(loginSuccess(user.data[0]));
      }
    } catch(e) {
      dispatch(userError(e));
      console.error(e);
    }
  };
}

export const register = (first_name, last_name, professional, gender, email, password) => {
  return async(dispatch) => {
    dispatch(userRequest());
    try {
      console.log(first_name, last_name, gender, email, password);
      const user = await apiInstance.post('/register', JSON.stringify({ first_name, last_name, professional, gender, email, password }));
      console.log("in success")
      if(user.data === 'User Exist') {
        dispatch(userError(user.data));
      } else {
        return dispatch(registerSuccess());
      }
    } catch(e) {
      console.log("in error")
      dispatch(registerError(e));
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

export const loadPosts = (user_id) => {
  return async(dispatch, getState) => {
    const { connectIn } = getState();

    let user_id = connectIn.user.object[0].id;
    dispatch(postRequest());
    try {
      const posts = await apiInstance.get('/getUserPost/'+user_id);
      console.log("post.data", posts.data)
      return dispatch(getAllPosts(posts.data));
    } catch(e) {
      dispatch(postError(e));
      console.error(e);
    }
  };
};

export const loadPostsByConnection = () => {
  return async(dispatch, getState) => {
    const { connectIn } = getState();

    let user_id = connectIn.user.object[0].id;
    dispatch(allConnectionPostsRequest());
    try {
      const posts = await apiInstance.get('/getUserConnectionPost/'+user_id);
      console.log("connection posts", posts.data)
      return dispatch(getAllConnectionPosts(posts.data));
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
      const connections = await Promise.resolve(dummyConnections);
      return dispatch(getAllConnections(connections));
    } catch(e) {
      dispatch(connectionError(e));
      console.error(e);
    }
  };
};

export const addNewPost = (img, img_name, comment, user_id) => {
  return async(dispatch, getState) => {
    const { connectIn } = getState();

    const user_id = connectIn.user.object[0].id;
    dispatch(postRequest());
    try {
      const post = await apiInstance.post('/post', JSON.stringify({img, img_name, comment, user_id}));
      console.log("post", post)
      await dispatch(addPost({result: post.data}));
      return dispatch(loadPosts(user_id))
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
      const postId = await Promise.resolve(dummyPost.id);
      return dispatch(deletePost(postId));
    } catch(e) {
      dispatch(postError(e));
      console.error(e);
    }
  };
}

export const addNewConnection = (connector_id) => {
  return async(dispatch, getState) => {
    const { connectIn } = getState();

    const user_id = connectIn.user.object[0].id;
    dispatch(connectionRequest());
    try {
      const connection = await apiInstance.post('/addConnection', JSON.stringify({user_id, connector_id}));
      await dispatch(addConnection({status: connection}))
      return dispatch(loadUser());
    } catch(e) {
      dispatch(connectionError(e));
      console.error(e);
    }
  };
};

export const removeConnection = (user_id, connector_id) => {
  return async(dispatch, getState) => {
    const { connectIn } = getState();
    const user_id = connectIn.user.object[0].id;
    dispatch(connectionRequest());
    try {
      const connection = await apiInstance.post('/removeConnection', JSON.stringify({user_id, connector_id}));
      // const connectionId = await Promise.resolve(dummyConnection.id);
      dispatch(deleteConnection({status: connection}));
      return dispatch(loadUser());
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

export const loadAllUser = () => {
  return async(dispatch) => {
    dispatch(allUserRequest());
    try {
      const users = await apiInstance.get('/getAllUsers');
        return dispatch(allUserRequestSuccess(users.data));
    } catch(e) {
      dispatch(userError(e));
      console.error(e);
    }
  };
}

export const load = () => {
  return async(dispatch, getState) => {
    dispatch(init());
    try {
      await dispatch(loadUser());
      const { connectIn } = getState();

      const user_id = connectIn.user.object[0].id;
      await dispatch(loadAllUser());
      console.log(user_id)
      await dispatch(loadPosts(user_id));
      await dispatch(loadPostsByConnection())
      return dispatch(initDone());
    } catch(e) {
      console.error(e);
    }
  };
}
