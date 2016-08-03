var floatClass = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  var size = Math.random() * 10; 
  this.$node.css({
    'height': size,
    'width': size
  });
  var verticalMove = Math.random() * 5;
  var horizontalMove = Math.random() * 5; 
};


floatClass.prototype = Object.create(Dancer.prototype);
floatClass.prototype.constructor = floatClass; 


floatClass.prototype.step = function () {
  Dancer.prototype.step.call(this); 
  var newTop = this.top + 10;
  this.top = newTop;  
  this.$node.animate({
    'top': newTop
  }, this.timeBetweenSteps, 'linear');

}; 

