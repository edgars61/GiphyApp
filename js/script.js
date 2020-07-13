function myFunction(){
//window.alert("FUCK")
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
  $('#results').empty();
  searchGiphy(searchTerm,noItems);
});



}

function createSlice()
{
  var divs = $("div > img");
  for(var i = 0; i < divs.length; i+=4) {
    divs.slice(i, i+4).wrapAll("<div class='x'></div>");
  }


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
for (var x=0;x<25;x++){
  $('#results').append('<img src='+obj.data[x].images.original.url+'>');
  //window.alert("silicing!");
}
createSlice();
}

// Send request
request.send()
}