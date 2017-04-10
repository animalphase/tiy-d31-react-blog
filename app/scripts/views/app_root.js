import React from 'react';
import Nav from './nav.js';
import BlogPosts from './blog-posts.js';
import SubmitPost from './submit-post.js';
// import Link from './link.js';

export default React.createClass({
  // set up local state for this component
  getInitialState: function () {
    return {
      viewing: 'BlogPosts'
    }
  },


  // define function that gets executed on below button click
  setView: function (target) {
    this.setState({
      viewing: target
    });
  },

  render: function () {
    console.log(this.state);
    var currentView = <BlogPosts/>;
    if (this.state.viewing === 'BlogPosts') {
      currentView = <BlogPosts/>;
    } else if (this.state.viewing === 'SubmitPost') {
      currentView = <SubmitPost/>;
    }

    return (
      <main className='page-wrapper'>
        <header className='page-header'>
          <button onClick={() => this.setView('BlogPosts')}>test</button>
          <button onClick={() => this.setView('SubmitPost')}>test</button>
          <h1>simple 'blog' with react</h1>
          <Nav/>
        </header>
        {currentView}
      </main>
    );
  }
});
