import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Post from 'pages/Post';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Layout from './containers/Layout';
import { checkIsLoggedIn } from 'utils/global';
import store from 'store';
// import NoMatch from './pages/NoMatch404';

// TODO: Move some routes inside home
// Have only login, register, home and 404
const Root = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Route path="/" exact render={() => {
          const redirectRoute = checkIsLoggedIn() ? '/home' : '/login';
          return <Redirect to={redirectRoute} />
        }} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/post" component={Post} />
        {/* <Route component={NoMatch} /> */}
      </Layout>
    </Router>
  </Provider>
);

export default Root;
