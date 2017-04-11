import React from 'react';

const Link = React.createClass({
  render: function () {
    return ( <a href={this.props.href} className={this.props.className} onClick={this.props.onClick}>{this.props.text}</a> );
  }
});

Link.propTypes = {
  href: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  className: React.PropTypes.string
};

export default Link;
