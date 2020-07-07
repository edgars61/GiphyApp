function myFunction(){
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=B0ShLcpj79wkLOhuJOg7QhgQR6oFtF1R&q=homer&limit=25&offset=0&rating=g&lang=en', true)

request.onload = function () {
  // Begin accessing JSON data here
window.alert("Success!");
var obj = JSON.parse(this.response)

window.alert( obj.data[20].images.downsized_large.url);
window.alert( obj.data[15].images.downsized_large.url);
}

// Send request
request.send()
}