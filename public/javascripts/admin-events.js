$(document).ready(() => {

  $('.delete').click(e => {
    let id = +$(e.target).attr('data-user-id')
    console.log(id);


    $.ajax({
      method: 'DELETE',
      url: '/admin',
      dataType: 'json',
      data: {userId: id},
      success: userGone => {
        console.log("gone",userGone);
        location.reload()

      },
      fail: err => {
        console.log(err);
      }
    })

  })
})
