import React from 'react';
import Link from './link.js';

const Nav = React.createClass({
  render: function () {
    return (
      <nav className="main-nav">
        <Link text="link" href="#" className="nav-link"/>
        <Link text="link" href="#" className="nav-link"/>
        <Link text="link" href="#" className="nav-link"/>
        <Link text="link" href="#" className="nav-link"/>
      </nav>
    );
  }
});

export default Nav;
