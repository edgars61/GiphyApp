function myFunction(){
var searchTerm;
var noItems;

$( document ).ready(function(e) {
});
$("form").submit(function(e){
  event.preventDefault();
  
  //alert("Submitted");
  searchTerm = $("#search").val();
  noItems=$("#numbero").val();
  //window.alert(noItems);
  $('div.results').empty();
  searchGiphy(searchTerm,noItems);
  $("html").append('div><nav><a href="https://www.instagram.com/"><ion-icon name="logo-instagram"></ion-icon></a><a href="httpps://www.linkedin.com/"><ion-icon name="logo-linkedin"></ion-icon></a><a href="https://www.twitter.com/"><ion-icon name="logo-twitter"></ion-icon></a></nav><p>Copyright 2020</p></div>')
});



}





function searchGiphy(searchTerm, noItems){
//request URL
var requestUrlP1 ="https://api.giphy.com/v1/gifs/search?api_key=B0ShLcpj79wkLOhuJOg7QhgQR6oFtF1R&q=";
var requestUrlP2 ="&limit=";
var requestUrlP3= "&offset=0&rating=g&lang=en";
//Get users search term
//create request URL
var requestUrl = requestUrlP1+searchTerm+requestUrlP2+noItems+requestUrlP3;
//window.alert(requestUrl);

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', requestUrl, true)
request.onload = function () {
  // Begin accessing JSON data here
//window.alert("Success!");
var obj = JSON.parse(this.response)
for (var x=0;x<obj.data.length;x++){
  $('.results').append('<img src='+obj.data[x].images.original.url+'>');
  //window.alert("silicing!");
}
var divs = $('img');
window.alert(divs.length);
for(var i = 0; i < divs.length; i+=4) {
  divs.slice(i, i+4).wrapAll("<div class='showResults'></div>");
  
}
}



// Send request
request.send()
}