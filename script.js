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
		const p_title = document.createElement("p");
		const p_author = document.createElement("p");
		const div = document.createElement("div");

		const text_title = document.createTextNode(estante[i].title);
		const text_author = document.createTextNode(estante[i].author);
		p_title.appendChild(text_title);
		p_author.appendChild(text_author);

		const div_result = document.getElementById("result");
		div_result.appendChild(div);

		div.appendChild(p_title);
		div.appendChild(p_author);

		const id_div = "id_div";
		const id_title = "id_title";
		const id_author = "id_author";
		
		div.setAttribute("id", id_div);
		p_title.setAttribute("id", id_title);
		p_author.setAttribute("id", id_author);
	}
}

/*
const p_title = document.createElement("p");
const text_title = document.createTextNode("Hello World");
p_title.appendChild(text_title);

const div_result = document.getElementById("result");
div_result.appendChild(p_title);

var id_name = "id_para";

p_title.setAttribute("id", id_name);

document.getElementById(id_name).style.border = "solid";
*/
