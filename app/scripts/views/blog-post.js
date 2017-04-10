import React from 'react';
import Link from './link.js';

const BlogPost = React.createClass({

  // set up local state for this component
  getInitialState: function () {
    return {
      hidden: true,
      buttonLabel: 'read post'
    }
  },


  // define function that gets executed on below button click
  toggleVisibleState: function () {
    if(this.state.hidden === true) {
      this.setState({
        hidden: false,
        buttonLabel: 'hide post'
      });
    } else {
      this.setState({
        hidden: true,
        buttonLabel: 'read post'
      });
    }
  },


  render: function () {
    // set up var for visibility
    var visibility = 'hidden';
    if(this.state.hidden === false) {
      visibility = '';
    }

    // toggle className string based on state


    return (
      <article className="blog-post">
        <header>
          <h2>{this.props.title}</h2>
          <h3>{this.props.subHead}</h3>
        </header>
        <section className='toggle-blog-controls' ><button onClick={this.toggleVisibleState}>{this.state.buttonLabel}</button></section>
        <section className="article-body"><div className={visibility}>{this.props.body}</div></section>
      </article>
    );
  }
});

BlogPost.propTypes = {
  title: React.PropTypes.string.isRequired,
  subHead: React.PropTypes.string,
  body: React.PropTypes.string
};

export default BlogPost;
