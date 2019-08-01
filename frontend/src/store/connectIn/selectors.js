import { createSelector } from 'reselect';

const getUserState = state => state.connectIn.user;
const getConnectionState = state => state.connectIn.connections;
const getPostState = state => state.connectIn.posts;

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

export const getPosts = createSelector(
  [
    getPostState,
  ],
  posts => posts.items.map(itemId => posts.object[itemId]),
);

export const getConnections = createSelector(
  [
    getConnectionState,
  ],
  connections => connections.items.map(itemId => connections.object[itemId]),
);

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

export const hasLoaded = createSelector(
  [
    getUserState,
    getPostState,
    state => state.connectIn.loaded,
  ],
  (user, posts, loaded) => !user.loading && !posts.loading && loaded,
);
