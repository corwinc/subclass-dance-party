var staticTester = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('staticTester'); 
};

staticTester.prototype = Object.create(Dancer.prototype);
staticTester.prototype.constructor = staticTester; 


staticTester.prototype.step = function () {
  Dancer.prototype.step.call(this);
}; 
