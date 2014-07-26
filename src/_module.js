/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({
  componentDidMount: function() {
    console.info('%cTest source map', 'background-color:#2C2C2C;color:#3A97DB');
   },

  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
 });
