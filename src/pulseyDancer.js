var PulseyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.size = 10; 
  this.toggleSize = true; 
  /*
  var borderSettings = {
    'border': '10px solid #000fff'
  };
  this.$node.css(borderSettings);
  */
};

PulseyDancer.prototype = Object.create(Dancer.prototype);
PulseyDancer.prototype.constructor = PulseyDancer; 


PulseyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  /*
  this.$node.animate({
    'height': '+=10px',
    'width': '+=10px'
    }, this.timeBetweenSteps, 'linear', function () {
    }); 
  */
//   if (this.size <= 100) {
//     this.increaseSize; 
//     this.$node.animate({
//       'height': '+=10px',
//       'width': '+=10px'
//     }, this.timeBetweenSteps, 'linear', function () {
//     }); 
//   } else if (this.size) {

//     this.$node.animate({
//       'height': '-=10px',
//       'width': '-=10px'
//     }, this.timeBetweenSteps, 'linear', function () {
//     });
//   }
  if (this.toggleSize === true) {
  //this.size += 100;
  this.toggleSize = !this.toggleSize;
  //animate larger
  this.$node.animate({
      'height': '+=100px',
      'width': '+=100px'
    }, this.timeBetweenSteps, 'linear', function () {
    });
} else {
  //this.size -= 100;
  this.toggleSize = !this.toggleSize;
  // animate smaller
  this.$node.animate({
    'height': '-=100px',
    'width': '-=100px'
  }, this.timeBetweenSteps, 'linear', function () {
  });
}

 }; 



//   $( "#book" ).animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//     // Animation complete.
//   });
// });


