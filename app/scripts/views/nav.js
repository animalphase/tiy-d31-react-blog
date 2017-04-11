import React from 'react';
import Link from './link.js';

const Nav = React.createClass({
  render: function () {
    return (
      <nav className="main-nav">
        <Link onClick={() => this.props.setViewFunction('BlogPosts')} text="read" href='#' className="nav-link"/>
        <Link onClick={() => this.props.setViewFunction('SubmitPost')} text="submit" href='#' className="nav-link"/>
      </nav>
    );
  }
});

export default Nav;
