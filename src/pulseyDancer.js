var PulseyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.size = 10; 
  this.toggleSize = true; 
};

PulseyDancer.prototype = Object.create(Dancer.prototype);
PulseyDancer.prototype.constructor = PulseyDancer; 


PulseyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  if (this.toggleSize === true) {
    this.toggleSize = !this.toggleSize;
    this.$node.animate({
      'height': '+=100px',
      'width': '+=100px'
    }, this.timeBetweenSteps, 'linear', function () {
    });
  } else {
    this.toggleSize = !this.toggleSize;
    this.$node.animate({
      'height': '-=100px',
      'width': '-=100px'
    }, this.timeBetweenSteps, 'linear');
  }
}; 


