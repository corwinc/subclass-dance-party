var scatterClass = function(top, left, timeBetweenSteps, topDir, leftDir) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('scatter');
  this.topDir = topDir;
  this.leftDir = leftDir;
  /*
  var size = Math.random() * 10; 
  this.$node.css({
    'height': size,
    'width': size
  });
  */
};


scatterClass.prototype = Object.create(Dancer.prototype);
scatterClass.prototype.constructor = scatterClass; 


scatterClass.prototype.step = function () {
  debugger;
  Dancer.prototype.step.call(this);
  var verticalMove = Math.random() * 1000;
  var horizontalMove = Math.random() * 1000;   
  this.$node.animate({
    'top': verticalMove,
    'left': horizontalMove,
    'opacity': 0
  }, 2000, 'linear');
  /*
  , function () {
    $(this).remove();
  });
  */
}; 
