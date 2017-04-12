$(document).ready(() => {

  console.log('present');

  $(".button-collapse").sideNav();

  $(document).ready(function() {
      $('.carousel').carousel();
  });

  // Next slide
  $('.carousel').carousel('next');
  $('.carousel').carousel('next', 3); // Move next n times.
  // Previous slide
  $('.carousel').carousel('prev');
  $('.carousel').carousel('prev', 4); // Move prev n times.
  // Set to nth slide
  $('.carousel').carousel('set', 4);


      $('.modal').modal({
          dismissible: true, // Modal can be dismissed by clicking outside of the modal
          opacity: .5, // Opacity of modal background
          inDuration: 300, // Transition in duration
          outDuration: 200, // Transition out duration
          startingTop: '4%', // Starting top style attribute
          endingTop: '10%', // Ending top style attribute
          ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            console.log(modal, trigger);
          },

        }
      );


})
