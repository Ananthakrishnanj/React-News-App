
search(keyword)
{
var url = 'https://newsapi.org/v2/everything?' +
'q=' +keyword+'&'+
'sortBy=popularity&' +
'apiKey=09d8068ba5624c8cb37be2e6d344bff7';

var req = new Request(url);

fetch(req)
.then(function(response) {
console.log(response.json());
})
}
