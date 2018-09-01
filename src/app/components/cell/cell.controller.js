/** @ngInject */
function Cell($scope, $log) {
  var ctrl = this;

  this.$log = $log;
  this.isAlive = false;

  $scope.$watch(
    function () {
      return ctrl.isPopulated;
    },
    function (populated) {
      ctrl.isAlive = populated;
    }
  );
}

Cell.prototype = {
  $onInit: function () {
    this.onChange({index: this.index, isAlive: this.isAlive});
  },
  onClick: function () {
    this.isAlive = !this.isAlive;
    this.onChange({index: this.index, isAlive: this.isAlive});
  }
};

module.exports = Cell;
