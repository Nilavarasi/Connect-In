import * as types from './constants';

/**
 * Reducer Schema
 *
 * {
 *  user: {
 *    loading: false,
 *    error: null,
 *    object: {
 *      name: XXX,
 *      username: XOXO,
 *      email: XYZ.com,
 *      avatar: YYY.jpeg,
 *    },
 *  },
 *  posts: {
 *    loading: false,
 *    items: [101],
 *    object: {
 *      101: {
 *        id: 101,
 *        content: 'content'
 *        likes: 100,
 *        comments: [{
 *          text: 'Nice',
 *          by: 'ZZZ'
 *        }],
 *      },
 *    },
 *  }
 *  connections: {
 *    loading: false,
 *    items: ['AAA'],
 *    object: {
 *      AAA: {
 *        name: XXX,
 *        username: XOXO,
 *        email: XYZ.com,
 *        avatar: YYY.jpeg,
 *      },
 *    },
 *  },
 * }
 */
const initialState = {
  loaded: false,
  user: {
    loading: false,
    error: null,
    object: null,
  },
  posts: {
    loading: false,
    error: null,
    items: [],
    object: null,
  },
  connections: {
    loading: false,
    error: null,
    items: [],
    object: null,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.INIT: {
      return {
        ...state,
        loaded: false,
      };
    }
    case types.INIT_DONE: {
      return {
        ...state,
        loaded: true,
      };
    }
    case types.ACTION_REQUEST_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          loading: true,
        },
      };
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          object: action.user,
        },
      };
    }
    case types.ACTION_ERROR_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          error: action.error,
        },
      };
    }
    case types.LOGOUT: {
      return {
        ...state,
        user: {
          ...state.user,
          object: null,
          error: null, 
        }
      }
    }
    case types.ACTION_REQUEST_POST: {
      return {
        ...state,
        posts: {
          loading: true,
        },
      };
    }
    case types.ACTION_ERROR_POST: {
      return {
        ...state,
        posts: {
          loading: false,
          error: action.error,
        },
      };
    }
    case types.GET_ALL_POST: {
      const postIds = [];
      const postObject = action.posts.reduce((acc, post) => {
        postIds.push(post.id);
        return {
          ...acc,
          [post.id]: post,
        };
      }, {});

      return {
        ...state,
        posts: {
          ...state.posts,
          loading: false,
          object: postObject,
          items: postIds,
        },
      };
    }
    case types.GET_POST: {
      const postIds = state.posts.items;
      if (postIds.indexOf(action.post.id) === -1) {
        postIds.push(action.post.id);
      }
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: false,
          items: postIds,
          object: {
            ...state.posts.object,
            [action.post.id]: action.post,
          },
        },
      };
    }
    case types.ADD_POST: {
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: false,
          items: [
            ...state.posts.items,
            action.post.id,
          ],
          object: {
            ...state.posts.object,
            [action.post.id]: action.post,
          },
        },
      };
    }
    case types.DELETE_POST: {
      const removeIndex = state.posts.items.findIndex(action.id);
      const newItems = [...state.posts.items];
      newItems.splice(removeIndex, 1);
      const newObject = {...state.posts.object};
      delete newObject[action.id];

      return {
        ...state,
        posts: {
          ...state.posts,
          loading: false,
          items: newItems,
          object: newObject,
        },
      };
    }
    case types.ACTION_REQUEST_CONNECTION: {
      return {
        ...state,
        connections: {
          loading: true,
        },
      };
    }
    case types.ACTION_ERROR_CONNECTION: {
      return {
        ...state,
        connections: {
          loading: false,
          error: action.error,
        },
      };
    }
    case types.GET_ALL_CONNECTION: {
      const connectionIds = [];
      const connectionObject = action.connections.reduce((acc, connection) => {
        connectionIds.push(connection.id);
        return {
          ...acc,
          [connection.id]: connection,
        };
      }, {});

      return {
        ...state,
        connections: {
          ...state.connections,
          loading: false,
          object: connectionObject,
          items: connectionIds,
        },
      };
    }
    case types.GET_CONNECTION: {
      const connectionIds = state.connections.items;
      if (connectionIds.indexOf(action.connection.id) === -1) {
        connectionIds.push(action.connection.id);
      }
      return {
        ...state,
        connections: {
          ...state.connections,
          loading: false,
          items: connectionIds,
          object: {
            ...state.connections.object,
            [action.connection.id]: action.connection,
          },
        },
      };
    }
    case types.ADD_CONNECTION: {
      return {
        ...state,
        connections: {
          ...state.connections,
          loading: false,
          items: [
            ...state.connections.items,
            action.connection.id,
          ],
          object: {
            ...state.connections.object,
            [action.connection.id]: action.connection,
          },
        },
      };
    }
    case types.DELETE_CONNECTION: {
      const removeIndex = state.connections.items.findIndex(action.id);
      const newItems = [...state.connections.items];
      newItems.splice(removeIndex, 1);
      const newObject = {...state.connections.object};
      delete newObject[action.id];

      return {
        ...state,
        connections: {
          ...state.connections,
          loading: false,
          items: newItems,
          object: newObject,
        },
      };
    }
    default:
      return state;
  }
}
