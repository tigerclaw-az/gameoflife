/** @ngInject */
function Controls($scope, $rootScope, $element, $log, controlsService) {
  this.$rootScope = $rootScope;
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
  reset: function () {
    this.controlsService.reset();
    this.$rootScope.$emit('reset');
  },
  setGridSize: function (evt) {
    this.controlsService.setGridSize(evt.target.value);
  },
  toggleRunning: function () {
    this.controlsService.toggleRunning();
  }
};

module.exports = Controls;
