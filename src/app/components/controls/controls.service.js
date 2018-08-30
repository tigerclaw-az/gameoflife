function ControlsService() {
  this.data = {
    isRunning: false
  };
}

ControlsService.prototype = {
  getGridSize: function () {
    return 500;
  },
  getIsRunning: function () {
    return this.data.isRunning;
  },
  toggleRunning: function () {
    this.data.isRunning = !this.data.isRunning;
  }
};

module.exports = ControlsService;
