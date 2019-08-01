export const user = {
  name: 'Jane',
  username: 'jane123',
  email: 'jane@stark.in',
  avatar: 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/girl-512.png',
};

export const posts = [
  {
    id: 101,
    content: 'Hello! to ConnectIn',
    likes: 10,
    by: user,
    comments: [{
      text: 'Nice',
      by: 'MonicaG',
      at: '28/07/2019 at 1:00 AM'
    }],
  },
  {
    id: 102,
    content: 'Hey Hey Hey, Good to be in connectIN',
    likes: 10,
    by: user,
    comments: [{
      text: 'Welcome',
      by: 'Draco_LOL',
      at: '31/07/2019 at 6:00 PM'
    }],
  },
];

export const connections = [
  {
    name: 'Draco',
    username: 'Draco_LOL',
    email: 'draco@hyper.in',
    avatar: null,
  },
  {
    name: 'Monica',
    username: 'MonicaG',
    email: 'monica@myspace.in',
    avatar: 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/girl-512.png',
  },
];

export const post = {
  id: 103,
  content: 'Hey ConnectIN',
  likes: 0,
  comments: [],
};

export const connection = {
  name: 'Jerry',
  username: 'jerry_chaser',
  email: 'jerry@annoy.com',
  avatar: null,
};
