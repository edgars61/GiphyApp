function myFunction(){
//request URL
var requestUrlP1 ="https://api.giphy.com/v1/gifs/search?api_key=B0ShLcpj79wkLOhuJOg7QhgQR6oFtF1R&q=";
var requestUrlP2 ="&limit=";
var requestUrlP3= "&offset=0&rating=g&lang=en";
//Get users search term
var searchTerm = "simpsons";
var noItems =46;

//create request URL
var requestUrl = requestUrlP1+searchTerm+requestUrlP2+noItems+requestUrlP3;
window.alert(requestUrl);

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', requestUrl, true)

request.onload = function () {
  // Begin accessing JSON data here
window.alert("Success!");
var obj = JSON.parse(this.response)
$( document ).ready(function() {
  

});

window.alert( obj.data[20].images.downsized_large.url);
window.alert( obj.data[15].images.downsized_large.url);

for (var x=0;x<25;x++){
  $('div').append('<img src='+obj.data[x].images.original.url+'alt="Flowers in Chania">')

}

}
 
// Send request
request.send()
}