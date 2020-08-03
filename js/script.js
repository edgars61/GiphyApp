  
function myfunction (){
var request = new XMLHttpRequest()
var searchTerm;
$( document ).ready(function() {
  
});
searchTerm = $("#search").val();
window.alert(searchTerm);
request.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=B0ShLcpj79wkLOhuJOg7QhgQR6oFtF1R&q='+searchTerm+'&limit=4&offset=0&rating=g&lang=en', true)
request.onload = function () {
  // Begin accessing JSON data here
  var obj = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    $(document).ready(function(){
      $('.container-fluid').empty();
      for (var x=0;x<obj.data.length;x++){
        //$('#footer').remove();
        $('.container-fluid').append('<img src='+obj.data[x].images.original.url+' class=col-lg-3 img-fluid>');
        //$('#content-wrap').append('<footer id="footer"></footer>')
        
      }
    });
  } else {
    console.log('error')
  }
}

request.send()
}