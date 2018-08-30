require('./board.scss');

/** @ngInject */
function Board($scope, $interval, $element, $log, _, controlsService) {
  var halfGrid;

  this.$element = $element;
  this.$log = $log;
  this._ = _;
  this.cs = controlsService.data;

  this.gridSize = controlsService.getGridSize();
  this.cells = _.range(0, this.gridSize);

  halfGrid = this.gridSize / 2;

  this.cellSize = this.$element[0].clientHeight / halfGrid * this.$element[0].clientWidth / halfGrid * 5;

  this.world = [];

  // TODO: Move to stats.controller.js
  this.generation = 0;

  $scope.$watch(
    function () {
      return controlsService.data.isRunning;
    },
    function (data) {
      this.$log.debug('$watch', data);
      if (data) {
        this.timer = $interval(function () {
          this.next();
        }.bind(this), 500);
      } else {
        $interval.cancel(this.timer);
      }
    }.bind(this)
  );
}

Board.prototype = {
  next: function () {
    this.generation++;
    this.$log.debug(this.generation);
  },
  reset: function () {
    this.generation = 0;
  }

//   livingNeighbors: function (row, col) {
//     return this.world[row - 1][col - 1] +
//       this.world[row - 1][col] +
//       this.world[row - 1][col + 1] +
//       this.world[row][col - 1] +
//       this.world[row][col + 1] +
//       this.world[row + 1][col - 1] +
//       this.world[row + 1][col] +
//       this.world[row + 1][col + 1];
//   }
};

module.exports = Board;
