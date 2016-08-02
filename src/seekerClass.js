var seekerClass = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('seeker');
};

seekerClass.prototype = Object.create(Dancer.prototype);
seekerClass.prototype.constructor = seekerClass; 


seekerClass.prototype.step = function () {
  Dancer.prototype.step.call(this);
  debugger;
  var target = $('.staticTester');
  // var radius = this.$node.css('height'); 
  // radius = convertToNum(radius) / 2; 
  var targetx = target.css('left');
  // targetx = convertToNum(targetx); 
  var targety = target.css('top'); 
  // targety = convertToNum(targety); 
  this.$node.animate({
    // to $('.staticTester').y
    'top': targety,
    // to .x
    'left': targetx,
    'opacity': 0.7,
    // 'rotateY': "+=" + (Math.PI) / 2
  }, this.timeBetweenSteps, 'linear', function () {
    $(this).css({'background': '#9fb6cd', 'border-color': '#9fb6cd'});
    $(this).css({'background': 'white', 'border-color': 'white'});
    $(this).css({'background': '#9fb6cd', 'border-color': '#9fb6cd'});
  }).animate({

  }, this.timeBetweenSteps, 'linear', function () {
    //$(this).css({'background': 'white', 'border-color': 'white'});
  });
  if (this.$node.css('top') === targety && this.$node.css('left') === targetx) {
    target[0].remove();
    this.$node.css('height', '+=5');
    this.$node.css('width', '+=5'); 
  }
}; 


var convertToNum = function (string) {
  var result = string.slice(0, string.length - 2);
  result = parseInt(result); 
  return result; 
}; 

var distance = function (obj1, obj2) {
  var obj1x = obj1.css('top');

};

// color : changes
// flash
// it grows

// css properties 
// color

// animate 
// grow
// flash
