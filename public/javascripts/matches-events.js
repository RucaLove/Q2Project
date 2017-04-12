$(document).ready(() => {

  $('.delete').click(e => {
    let id = +$(e.target).attr('data-match-id')
    console.log(id);


    $.ajax({
      method: 'DELETE',
      url: '/matches',
      dataType: 'json',
      data: {matchId: id},
      success: matchGone => {
        console.log(matchGone);
        location.reload()
      },
      fail: err => {
        console.log(err);
      }
    })

  })
})
