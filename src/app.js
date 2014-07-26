/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Module = require('./_module.js');

APP.init = function(){
  React.renderComponent(<Module name="world!" />, document.getElementById('app'));
 };