/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  var blinkyDancer = new Dancer (top, left, timeBetweenSteps)

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  // blinkyDancer.step(); 

  return blinkyDancer;
};
*/

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="blinky-dancer"></span>');
  //this.step(); 
  //this.setPosition(top, left); // This line is here b/c the this.$node gets updated to 'blinky-dancer' AFTER the Dancer.call; 
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer; 


BlinkyDancer.prototype.step = function () {
  //debugger;
  Dancer.prototype.step.call(this); 
  //debugger;
  //var boundFn = BlinkyDancer.prototype.step.bind(this); 
  //setTimeout(boundFn, this.timeBetweenSteps);
  //BlinkyDancer.toggleNodeMethod(); 
  //toggleNode.bind(this.$node);  
  //this.toggleNodeMethod.bind(this);
  //console.log('Blinky dancer function is getting called');
  this.$node.toggle();
}; 
/*
BlinkyDancer.prototype.toggleNodeMethod = function () {
  this.$node.toggle(); 
}; 

var toggleNode = function (node) {
  node.toggle(); 
}; 
*/

