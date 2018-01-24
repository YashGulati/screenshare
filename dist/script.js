$(document).ready( function() {
  fetch("https://api.screenleap.com/v2/screen-shares", {
  method: "POST",
  headers: {authtoken:'FzBOXrIsHi', accountid:'primetenders'}
  })
  .then(function(res){ return res.json(); })
  .then( function(data){

    generate_Code(data.viewerUrl)

    $('.code').html(JSON.stringify(data.viewerUrl))

    $( ".startSharing" ).click(function() {
      screenleap.startSharing('DEFAULT', data)
    })
  })
})

function generate_Code(code) {
  fetch("/code", {
  method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({code:code, id: id})
  })
  .then(function(res){ return res.json(); })
  .then( function(response){
      if(response.status == 'success') {
        console.log('successfully gave code.');
      }
      else {
        console.log('code not taken');
      }
    })
  }
