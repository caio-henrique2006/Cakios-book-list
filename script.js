// Processo de "GET" o json
var requestJSON = 'https://raw.githubusercontent.com/caio-henrique2006/Cakios-book-list/main/data_bank.json';
var request = new XMLHttpRequest();
request.open('GET', requestJSON);

request.responseType = 'json';
request.send();

request.onload = function() {
  var list = request.response; // Pegando a resposta do XMLHttp e colocando em uma variável;
  books(list); // Direcionando essa variável a uma função;
}

function books(estante){
	for(var i = 0; i < estante.length; i++){
		const br = document.createElement("br");
		const image = document.createElement("img");
		const p_title = document.createElement("a");
		const p_author = document.createElement("a");
		const div = document.createElement("div");

		const text_title = document.createTextNode(estante[i].title);
		const text_author = document.createTextNode(estante[i].author);
		p_title.appendChild(text_title);
		p_author.appendChild(text_author);

		const div_result = document.getElementById("result");
		div_result.appendChild(div);

		div.appendChild(image);
		div.appendChild(p_title);
		div.appendChild(br);
		div.appendChild(p_author);
		
		image.setAttribute("src", estante[i].image);
		image.setAttribute("class", "class_img");
		div.setAttribute("class", "class_div");
		p_title.setAttribute("class", "class_title");
		p_title.setAttribute("href", "#");
		p_author.setAttribute("class", "class_author");
		p_author.setAttribute("href", "#");
	}
}

