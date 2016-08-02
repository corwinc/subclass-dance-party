var radiateClass = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  var size = Math.random() * 10; 
  this.$node.css({
    'height': size,
    'width': size,
    'border': '25px solid white'
  });
  //var verticalMove = Math.random() * 5;
  //var horizontalMove = Math.random() * 5; 
};


radiateClass.prototype = Object.create(Dancer.prototype);
radiateClass.prototype.constructor = radiateClass; 


radiateClass.prototype.step = function () {
  Dancer.prototype.step.call(this);
  //this.$node.fadeTo(2000, 0); 
  this.$node.animate({
    'height': '+=150px',
    'width': '+=150px',
    'opacity': '0'
  }, 1000, 'linear');

  //}
}; 