$(document).ready(() => {
// add event listeners to grab updated info from pernalities/;id
  $('#editProfile').click(e => {

    let id = +$(e.target).attr('data-user-id')
    console.log(id);
    // console.log("HI");
    let age = $('#editAge').val()
    // console.log(age);
    let bio = $('#editBio').val()
    // console.log(bio);
    $.ajax({
      method: 'PATCH',
      url: `/profile/${id}`,
      dataType: 'json',
      data: {
        age: age,
        bio: bio
      },
      success: (data) => {
        location.reload()

      },
      fail: (error) => {
        console.log(error);
      }
    })
  })
})
