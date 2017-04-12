$(document).ready(()=> {
// add event listeners to grab updated info from pernalities/;id
  let age = $('#age').val()
  console.log(age);
  let bio = $('#bio').val()
  console.log(bio);
  $('#editProfile').click(e => {
    console.log("HI");
    $.ajax({})
  })
})
