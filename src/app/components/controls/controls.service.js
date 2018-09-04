function ControlsService() {
  this.data = {
    gridSize: 500,
    isRunning: false,
    interval: 500
  };
}

ControlsService.prototype = {
  getGridSize: function () {
    return this.data.gridSize;
  },
  getIsRunning: function () {
    return this.data.isRunning;
  },
  reset: function () {
    this.data.gridSize = 500;
    this.data.isRunning = false;
    this.data.interval = 500;
  },
  setGridSize: function (value) {
    this.data.gridSize = value;
  },
  toggleRunning: function () {
    this.data.isRunning = !this.data.isRunning;
  }
};

module.exports = ControlsService;
