var angular = require('angular');
var _ = require('lodash');

var MainComponent = require('./app/components/main/main.component');
var BoardComponent = require('./app/components/board/board.component');
var CellComponent = require('./app/components/cell/cell.component');
var ControlsComponent = require('./app/components/controls/controls.component');
var ControlsService = require('./app/components/controls/controls.service');

require('./index.scss');

var app = 'app';
module.exports = app;

var deps = [
];

angular
  .module(app, deps)
  .constant('_', _)
  .service('controlsService', ControlsService)
  .component('app', MainComponent)
  .component('board', BoardComponent)
  .component('cell', CellComponent)
  .component('controls', ControlsComponent)
;
