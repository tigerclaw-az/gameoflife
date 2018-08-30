/** @ngInject */
function Cell() {
  this.isAlive = false;
}

Cell.prototype = {
  onClick: function () {
    this.isAlive = !this.isAlive;
  }
};

module.exports = Cell;
