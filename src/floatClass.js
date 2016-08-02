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
  debugger;
  Dancer.prototype.step.call(this); 
  //this.$node.toggle();
  var newTop = this.top + 10;
  this.top = newTop;  
  this.$node.animate({
    'top': newTop
  }, this.timeBetweenSteps, 'linear');
  // this.$node.css('left', '+=10px'); 
}; 

/*
$('div.example').css('width', function(index) {
  return index * 50;
});

this.$node.css('left', function () {
  return this.$node.css.left + verticalMove; 
}); 
*/



/*
size = Math.random() * 100; 

border = size; 
border-radius = size; 
*/

/*
var floatClass10 = function(top, left, timeBetweenSteps) {
  for (var i = 0; i < 10; i++) {
    floatClass.call(this, top, left, timeBetweenSteps);
  }
};


floatClass10.prototype = Object.create(Dancer.prototype);
floatClass10.prototype.constructor = floatClass; 


floatClass10.prototype.step = function () {
  Dancer.prototype.step.call(this); 
  //this.$node.toggle();
}; 
*/
