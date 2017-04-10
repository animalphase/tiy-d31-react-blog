import React from 'react';
import Link from './link.js';

const BlogPost = React.createClass({
  render: function () {
    return (
      <article className="blog-article">
        <header>
          <h2>{this.props.title}</h2>
          <h3>{this.props.subHead}</h3>
        </header>
        <section className="article-body">{this.props.body}</section>
      </article>
    );
  }
});

BlogPost.propTypes = {
  title: React.PropTypes.string.isRequired,
  subHead: React.PropTypes.string,
  body: React.PropTypes.string.isRequired
};

export default BlogPost;
