import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Post from './pages/Post';
// import NoMatch from './pages/NoMatch404';

const RootRouter = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/post/:id" component={Post} />
    {/* <Route component={NoMatch} /> */}
  </Router>
);

export default RootRouter;
