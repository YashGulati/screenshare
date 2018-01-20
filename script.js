$(document).ready( function() {
  fetch("https://api.screenleap.com/v2/screen-shares", {
  method: "POST",
  headers: {authtoken:'FzBOXrIsHi', accountid:'primetenders'}
  })
  .then(function(res){ return res.json(); })
  .then( function(data){
    $('.code').html(JSON.stringify(data))

    $( ".startSharing" ).click(function() {
      screenleap.startSharing('DEFAULT', data)
    })
  })
})
