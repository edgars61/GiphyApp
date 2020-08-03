//IIFE to load trending GIFS
(function () {
  var request = new XMLHttpRequest()
  var searchTerm;

searchTerm = $(".search_input").val();

request.open('GET', 'https://api.giphy.com/v1/gifs/trending?api_key=B0ShLcpj79wkLOhuJOg7QhgQR6oFtF1R&limit=8&rating=g', true)
request.onload = function () {
  // Begin accessing JSON data here
  var obj = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    $(document).ready(function(){
      for (var x=0;x<obj.data.length;x++){
        //$('#footer').remove();
        $('.results-container').append('<img src='+obj.data[x].images.original.url+' class=col-lg-3 img-fluid>');
        //$('#content-wrap').append('<footer id="footer"></footer>')
        
      }
    });
  } else {
    console.log('error')
  }
}

request.send()






  
})(); 
function myfunction (){
var request = new XMLHttpRequest()
var searchTerm;

searchTerm = $(".search_input").val();

window.alert(searchTerm);
request.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=B0ShLcpj79wkLOhuJOg7QhgQR6oFtF1R&q='+searchTerm+'&limit=36&offset=0&rating=g&lang=en', true)
request.onload = function () {
  // Begin accessing JSON data here
  var obj = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    $(document).ready(function(){
      $('.results-container').empty();
      $('.results-container').append('<h1>Results for '+searchTerm+' GIFS</h1>')
      for (var x=0;x<obj.data.length;x++){
        //$('#footer').remove();
        $('.results-container').append('<img src='+obj.data[x].images.original.url+' class=col-lg-3 img-fluid>');
        //$('#content-wrap').append('<footer id="footer"></footer>')
        
      }
    });
  } else {
    console.log('error')
  }
}

request.send()
}