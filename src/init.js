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
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 10000
    );
    //debugger;
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.addLineUpButton').on('click', function () {
    debugger;
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
  
});



