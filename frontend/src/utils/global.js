export const checkIsLoggedIn = () => {
  const user = window.localStorage.getItem('user');
  return !!user;
}

export const getUser = () => {
  const user = window.localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const setUser = (user) => (
  window.localStorage.setItem('user', JSON.stringify(user))
);

export const removeUser = () => (
  window.localStorage.removeItem('user')
);
