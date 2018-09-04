require('./board.scss');

/** @ngInject */
function Board($scope, $interval, $element, $log, _, controlsService) {
  this.$element = $element;
  this.$log = $log;
  this._ = _;
  this.cs = controlsService.data;

  this.$board = this.$element[0];
  this.boardRect = this.$board.getBoundingClientRect();

  // TODO: Move to stats.controller.js
  this.generation = 0;

  $scope.$on('reset', function() {
    this.reset();
  }.bind(this));

  $scope.$watch(
    function () {
      return controlsService.data.gridSize;
    },
    function (size) {
      this.gridSize = size;
      this.world = this._.fill(Array(size), false);

      this.calculateCellSize();
    }.bind(this)
  );

  $scope.$watch(
    function () {
      return controlsService.data.isRunning;
    },
    function (isRunning) {
      if (isRunning) {
        this.timer = $interval(function () {
          this.world.forEach(function (w, index) {
            var neighbors = this.getLivingNeighborsCount(index);

            /**
             * For a space that is 'populated':
                Each cell with one or no neighbors dies, as if by solitude.
                Each cell with four or more neighbors dies, as if by overpopulation.
                Each cell with two or three neighbors survives.
              For a space that is 'empty' or 'unpopulated':
                Each cell with three neighbors becomes populated.
             */
            if (w) {
              if (neighbors < 2 || neighbors >= 4) {
                this.world[index] = false;
              }
            } else if (neighbors === 3) {
              this.world[index] = true;
            }
          }.bind(this));
          this.next();
        }.bind(this), this.cs.interval);
      } else {
        $interval.cancel(this.timer);
      }
    }.bind(this)
  );
}

Board.prototype = {
  calculateCellSize() {
    var area = this.boardRect.height * this.boardRect.width;
    var squareSize = Math.sqrt(area / this.gridSize);
    this.cellSize = Math.ceil(squareSize);
    this.cellsPerRow = parseInt(this.boardRect.width / this.cellSize, 10);
    this.cellsPerCol = parseInt(this.boardRect.height / this.cellSize, 10);
  },
  getLivingNeighborsCount: function (index) {
    var neighbors = [
      this.world[index - this.cellsPerRow - 1],
      this.world[index - this.cellsPerRow],
      this.world[index - this.cellsPerRow + 1],
      this.world[index + this.cellsPerRow - 1],
      this.world[index + this.cellsPerRow],
      this.world[index + this.cellsPerRow + 1]
    ];

    return neighbors.filter(function (n) {
      return n === true;
    }).length;
  },
  next: function () {
    this.generation++;
  },
  reset: function () {
    this.generation = 0;
    this.world = this._.fill(Array(this.gridSize), false);
  },
  updateCell: function (index, isAlive) {
    this.world[index] = isAlive;
  }
};

module.exports = Board;
