$(document).ready(()=> {
  // need an event listener on the like buttons
  // like button will post to matches

  // need an event listener on the hate
  // the hate button will send an ajax delete request to matches

$('#saveMatch').click(e => {

// NOTE: we need to get the userId from the cookie to send with the post
let matchId = +$('#saveMatch').attr('data-id')

  $.ajax({
    method: 'POST',
    url: '/matches',
    dataType: 'json',
    data: {matchId: matchId},
    success: match => {
      console.log(match);
    },
    fail: error => {
      console.log(error);
    }
  })

})

$('#deleteMatch').click(e => {
  console.log('you clicked me');

})







})
