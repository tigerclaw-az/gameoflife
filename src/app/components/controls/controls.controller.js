/** @ngInject */
function Controls($scope, $element, $log, controlsService) {
  this.$element = $element;
  this.$log = $log;
  this.controlsService = controlsService;

  this.$btnPlay = this.$element.find('.btn-toggle-running');
  this.cs = controlsService.data;

  this.minGridSize = 250;
  this.maxGridSize = 5000;
  this.stepGridSize = 100;
}

Controls.prototype = {
  setGridSize: function (evt) {
    this.$log.debug(evt);
    this.controlsService.setGridSize(evt.target.value);
  },
  toggleRunning: function () {
    this.controlsService.toggleRunning();
  }
};

module.exports = Controls;
