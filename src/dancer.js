var Dancer = function (top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left; 
  this.timeBetweenSteps = timeBetweenSteps; 
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step(); 
};

Dancer.prototype.step = function () {
  var boundStep = this.step.bind(this); 
  setTimeout(boundStep, this.timeBetweenSteps); 
};

Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};










