/** @ngInject */
function Controls($scope, $element, $log, controlsService) {
  this.$element = $element;
  this.$log = $log;
  this.controlsService = controlsService;

  this.$btnPlay = this.$element.find('.btn-toggle-running');
  this.cs = controlsService.data;
}

Controls.prototype = {
  toggleRunning: function () {
    this.controlsService.toggleRunning();
  }
};

module.exports = Controls;
