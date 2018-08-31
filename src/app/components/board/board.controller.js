require('./board.scss');

/** @ngInject */
function Board($scope, $interval, $element, $log, _, controlsService) {
  this.$element = $element;
  this.$log = $log;
  this._ = _;
  this.cs = controlsService.data;

  this.$board = this.$element[0];
  this.boardRect = this.$board.getBoundingClientRect();

  this.gridSize = controlsService.getGridSize();
  this.cells = _.range(0, this.gridSize);

  this.calculateCellSize();

  this.world = [];

  // TODO: Move to stats.controller.js
  this.generation = 0;

  $scope.$watch(
    function () {
      return controlsService.data.isRunning;
    },
    function (isRunning) {
      if (isRunning) {
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
  calculateCellSize() {
    var area = this.boardRect.height * this.boardRect.width;
    var squares = Math.sqrt(area / this.gridSize);
    this.cellSize = squares;
  },
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
