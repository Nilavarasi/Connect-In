import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile/">Profile</Link>
        </li>
        <li>
          <Link to="/post/1">Post</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
