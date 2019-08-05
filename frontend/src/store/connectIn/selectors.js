import { createSelector } from 'reselect';

export const getUserState = state => state.connectIn.user;
export const getAllUserState = state => state.connectIn.users;
export const getAllUsers = state => state.connectIn.users.user;
const getConnectionState = state => state.connectIn.connections;
export const getPostState = state => state.connectIn.posts;
export const getPostStateItems = state => state.connectIn.posts.items;
export const getConnectionPosts = state => state.connectIn.connectionsPost.items;

export const isLoggedIn = createSelector(
  [
    getUserState,
  ],
  user => user.object !== null,
);

export const getUserError = createSelector(
  [
    getUserState,
  ],
  user => user.error,
);

// export const getPosts = createSelector(
//   [
//     getPostState,
//   ],
//   posts => posts.items.map(itemId => posts.object[itemId]),
// );

export const getConnectionById = createSelector(
  [
    getConnectionState,
    (state, props) => props.id,
  ],
  (connections, id) => connections.object !== null && connections.object[id],
);

export const getPostById = createSelector(
  [
    getPostState,
    (state, props) => props.id,
  ],
  (posts, id) => posts.object !== null && posts.object[id],
);

export const getUser = createSelector(
  [
    getAllUsers,
    (state, props) => props.id,
  ],
  (users, userId) => users.find(user => user._id === parseInt(userId, 10)),
);

export const hasLoaded = createSelector(
  [
    getUserState,
    getPostState,
    state => state.connectIn.loaded,
  ],
  (user, posts, loaded) => !user.loading && !posts.loading && loaded,
);

export const isUserConnected = createSelector(
  [
    getUserState,
    (state, props) => props.id,
  ],
  (users, userId) => (
    users.object[0].connections ? users.object[0].connections.indexOf(parseInt(userId, 10)) > -1 : false
  ),
);

export const getConnectionsForCurrentUser = createSelector(
  [
    getUserState,
    getAllUsers,
  ],
  (user, users) => {
    return (user.object && user.object[0].connections) ? (
      user.object[0].connections.map(userId => {
        // console.log({users, userId});
        return users.find(u => u._id == userId)
      })
    ) : []
  },
);
