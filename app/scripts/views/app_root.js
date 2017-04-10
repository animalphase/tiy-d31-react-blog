import React from 'react';
import Nav from './nav.js';
import Link from './link.js';

export default React.createClass({
  render: function () {
    return (
      <header className="page-header">
        <h1>simple 'blog' with react</h1>
        <Nav/>
      </header>
    );
  }
});
