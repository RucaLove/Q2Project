$(document).ready(() => {
// add event listeners to grab updated info from pernalities/;id
  $('#editProfile').click(e => {
    // console.log("HI");
    let age = $('#editAge').val()
    // console.log(age);
    let bio = $('#editBio').val()
    // console.log(bio);
    $.ajax({
      method: 'PATCH',
      url: '/profile/:id',
      dataType: 'json',
      data: {
        age: age,
        bio: bio
      },
      success: (data) => {
        // console.log(data);
        // location.reload()
      },
      fail: (error) => {
        console.log(error);
      }
    })
  })
})
