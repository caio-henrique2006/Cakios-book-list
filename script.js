// Resposta search:
const R_search = document.getElementById("input_search_bar");
const submit_search = document.querySelector(".input_search_submit");

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

// Uma função que guarda todo o processo de colocar o resultado da pesquisa na tela.
function print_result(estante, i, div){
	// Criando todos os elementos HTML que vou usar:
	const br = document.createElement("br");
	const image = document.createElement("img");
	const p_title = document.createElement("a");
	const p_author = document.createElement("a");

	// Criando e colocando texto nos parágrafos:
	const text_title = document.createTextNode(estante[i].title);
	const text_author = document.createTextNode(estante[i].author);
	p_title.appendChild(text_title);
	p_author.appendChild(text_author);

	// Definindo um div para colocar os elementos:
	const div_result = document.getElementById("result");

	// Colocando todos os elementos no div:
	div.appendChild(image);
	div.appendChild(p_title);
	div.appendChild(br);
	div.appendChild(p_author);
	
	// Setando atributos:
	image.setAttribute("src", estante[i].image);
	image.setAttribute("class", "class_img");
	p_title.setAttribute("class", "class_title");
	p_title.setAttribute("href", "#");
	p_author.setAttribute("class", "class_author");
	p_author.setAttribute("href", "#");
}

function books(estante){

	submit_search.onclick = function(){

		// Guarda o valor da pesquisa;
		const search = R_search.value;

		// Remove o div existente;
		const div_remove = document.querySelector(".main_div")
		div_remove.parentElement.removeChild(div_remove);

		// Cria div main_div;
		const div = document.createElement("div");
		const div_result = document.getElementById("result");
		div_result.appendChild(div);
		div.setAttribute("class", "main_div");


		if(search.length <= 2){
			const warning = document.createElement("p");
			warning.appendChild(document.createTextNode("Digite, pelo menos, 3 caracteres !!!"));
			const div = document.querySelector(".main_div");
			div.appendChild(warning);
			warning.setAttribute("class", "warning_class")
		}else{

			// Inicia o proscesso de pesquisa;
			for(var i = 0; i < estante.length; i++){
				var ind_x = 0;
				var ind_y = search.length;

				// Primeiro inicia uma pesquisa direta: Pesquisa ?= título;
				if(estante[i].title.toLowerCase() === search.toLowerCase()){

					// Substituí o div anterior.
					const div = document.createElement("div");
					const div_result = document.querySelector(".main_div");
					div_result.appendChild(div);
					div.setAttribute("class", "class_div");

					// Printa o resultado da pesquisa;
					print_result(estante, i, div);
					}else{
						// Pesquisa usando as partes dos títulos: Pesquisa ?= título[slice];
					while(ind_y <= estante[i].title.length){	
						if(estante[i].title.slice(ind_x, ind_y).toLowerCase() === search.toLowerCase()){

							// Substituí o div anterior.
							const div = document.createElement("div");
							const div_result = document.querySelector(".main_div");
							div_result.appendChild(div);
							div.setAttribute("class", "class_div");

							// Printa o resultado da pesquisa;
							print_result(estante, i, div);
							break;
						}else{
							ind_x += 1;
							ind_y += 1;
						}}}
			}
		}
	}
}