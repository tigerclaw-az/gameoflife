function ControlsService() {
  this.data = {
    isRunning: false,
    gridSize: 500
  };
}

ControlsService.prototype = {
  getGridSize: function () {
    return this.data.gridSize;
  },
  getIsRunning: function () {
    return this.data.isRunning;
  },
  setGridSize: function (value) {
    this.data.gridSize = value;
  },
  toggleRunning: function () {
    this.data.isRunning = !this.data.isRunning;
  }
};

module.exports = ControlsService;
