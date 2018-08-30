var angular = require('angular');

var MainComponent = require('./app/components/main/main.component');

require('./index.scss');

var app = 'app';
module.exports = app;

var deps = [
];

angular
  .module(app, deps)
  .component('app', MainComponent);
