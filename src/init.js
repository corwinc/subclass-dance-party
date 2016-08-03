$(document).ready(function() {
  window.dancers = [];
  window.lineUp = function () {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.css('top', '0px');
      window.dancers[i].top = 0; 
    }
  };  



  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    //debugger;

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      Math.floor($('body').height() * Math.random()),
      Math.floor($('body').width() * Math.random()),
      3000
    );
    //debugger;
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.addLineUpButton').on('click', function () {
    //debugger;
    window.lineUp();
    console.log('linedup');
  });
  
  $( '.container' ).click(function(event) {
    console.log('Radiate maker function attempted'); 
    var radiateMaker = window.radiateClass; 
    var left = event.pageX - 30; 
    var top = event.pageY - 30; 
    var newRadiate = new radiateMaker(top, left, 500); 
    $('.container').append(newRadiate.$node); 
  });

  var floatFunction = window.floatClass;
  //debugger;

  var repeatFloat = function () {

    var float = new floatFunction(
        Math.floor($('body').height() * Math.random()),
        Math.floor($('body').width() * Math.random()),
        Math.random() * 1000
    );

    window.dancers.push(float); 
    $('body').append(float.$node);
  };

  setInterval(repeatFloat, 1000); 


  var addStarFoodFunction = window.staticTester;
  var addBlinkyFoodFunction = window.BlinkyDancer; 
  var radiateMaker = window.radiateClass;

  var repeatAddStarFood = function () {

    var coinFlip = Math.random(); 
    if (coinFlip >= 0.5) {
      var starFood = new addStarFoodFunction (
        Math.floor($('body').height() * Math.random()),
        Math.floor($('body').width() * Math.random()),
        Math.random() * 1000
      );
    } else {
      var starFood = new addBlinkyFoodFunction (
        Math.floor($('body').height() * Math.random()),
        Math.floor($('body').width() * Math.random()),
        Math.max(Math.random(), 0.4) * 1000
      );
    }

    window.dancers.push(starFood);
    $('body').append(starFood.$node);
  };

  setInterval(repeatAddStarFood, 1000);


  ///// Changing the collision behavior 
  $('.staticTester').on('blur', function () {
    //debugger;
    var radiate = new radiateMaker(
      Math.floor($('body').height() * Math.random()),
      Math.floor($('body').width() * Math.random()),
      500
    );
    window.dancers.push(radiate);
    $('body').append(radiate.$node);
  });
  
});



