var flybyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

flybyDancer.prototype = Object.create(Dancer.prototype);
flybyDancer.prototype.constructor = flybyDancer; 


flybyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  
  this.$node.animate({
    'height': '+=5px',
    'width': '+=5px',
    'left': '+=100'
  }, this.timeBetweenSteps, 'linear', function () {
    console.log("finished animation");
  }); 

}; 