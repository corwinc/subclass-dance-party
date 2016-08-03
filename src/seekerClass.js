var seekerClass = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('seeker');
  this.color = 250;
};

seekerClass.prototype = Object.create(Dancer.prototype);
seekerClass.prototype.constructor = seekerClass; 


seekerClass.prototype.step = function () {
  Dancer.prototype.step.call(this);
  //debugger;
  var target = $('.staticTester');
  var index = Math.floor(Math.random() * target.length);
  target = target[index];
  target = $(target);
  var radius = this.$node.css('height'); 
  radius = convertToNum(radius) / 2; 
  var targetx = target.css('left');
  targetxValue = convertToNum(targetx); 
  var targety = target.css('top');
  targetyValue = convertToNum(targety); 
  //target.css('background', 'yellow'); // Identify seeked targets. 
  //target.removeClass('.staticTester');

  //Animate seeking the target
  this.$node.animate({
    // to $('.staticTester').y
    'top': targetyValue - radius,
    // to .x
    'left': targetxValue - radius,
    'opacity': 0.7,
    // 'rotateY': "+=" + (Math.PI) / 2
  }, this.timeBetweenSteps, 'linear', function () {
    // Invoke the radiate at collision 
    var collisionY = $(this).css('top'); 
    var collisionX = $(this).css('left'); 
    collisionY = convertToNum(collisionY);
    collisionX = convertToNum(collisionX);
    var testRadiate = new radiateClass(collisionY, collisionX, 100); 
    $('body').append(testRadiate.$node);
    target.remove(); 
  });


   //this.color -= 10; 
  // Increment size and implement logic for explosion
  this.$node.css('height', '+=50');
  this.$node.css('width', '+=50');
  debugger;
  var currentSize = this.$node.css('height'); 
  currentSize = convertToNum(currentSize);
  var collisionY = this.$node.css('top'); 
  var collisionX = this.$node.css('left'); 
  collisionY = convertToNum(collisionY);
  collisionX = convertToNum(collisionX); 

  if (currentSize >= 150) {
    var positive1 = Math.random() * 10000;
    var positive2 = Math.random() * 10000;
    var negative1 = Math.random() * -10000;
    var negative2 = Math.random() * -10000;  

    var scatter1 = new scatterClass(collisionY, collisionX, 2000, positive1, positive2);
    var scatter2 = new scatterClass(collisionY, collisionX, 2000, negative1, positive1);
    var scatter3 = new scatterClass(collisionY, collisionX, 2000, positive2, negative2);
    var scatter4 = new scatterClass(collisionY, collisionX, 2000, negative2, negative1);

    $('body').append(scatter1.$node, scatter2.$node, scatter3.$node, scatter4.$node);
    debugger;
    this.$node.remove(); 
  }

  //this.$node.css('background', 'rgba(' + this.color + ',' + this.color + ',' + this.color + ',1)');
  //this.$node.addClass('seek-flash')
}; 


var convertToNum = function (string) {
  var result = string.slice(0, string.length - 2);
  result = parseInt(result); 
  return result; 
}; 


