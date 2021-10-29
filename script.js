// Processo de "GET" o json
var requestJSON = 'https://raw.githubusercontent.com/caio-henrique2006/Cakios-book-list/main/data_bank.json';
var request = new XMLHttpRequest();
request.open('GET', requestJSON);

request.responseType = 'json';
request.send();

request.onload = function() {
  var list = request.response;
  books(list);
}

function books(estante){
	for(var i = 0; i < estante.length; i++){
			console.log(estante[i].title);
		}
	}