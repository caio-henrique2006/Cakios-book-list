// variáveis que guardam o valor pesquisado e o estado do submit.
const R_search = document.getElementById("input_search_bar");
const submit_search = document.querySelector(".input_search_submit");

// Processo de "GET" o json
var requestJSON = 'https://raw.githubusercontent.com/caio-henrique2006/Cakios-book-list/main/data_bank.json';
var request = new XMLHttpRequest();
request.open('GET', requestJSON);

request.responseType = 'json';
request.send();

request.onload = function() { // Função que executa apenas quando a página é carregada;
  var list = request.response; // Pegando a resposta do XMLHttp e colocando em uma variável;
  books(list); // Função que executará todo o proscesso;
}

// Uma função que guarda todo o processo de colocar o resultado da pesquisa na tela.
function print_result(estante, i, div){
	// Criando todos os elementos HTML que vou usar:
	const br = document.createElement("br");
	const image = document.createElement("img");
	const p_title = document.createElement("a");
	const p_author = document.createElement("a");

	// Colocando texto nos parágrafos de título e autor(a):
	p_title.appendChild(document.createTextNode(estante[i].title));
	p_author.appendChild(document.createTextNode(estante[i].author));

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

	// Executa a função anônima quando o botão submit é apertado.
	submit_search.onclick = function(){

		// Guarda o valor da pesquisa;
		const search = R_search.value;

		// Remove o div existente;
		const div_remove = document.querySelector(".main_div")
		div_remove.parentElement.removeChild(div_remove);

		// Cria div: main_div;
		const div = document.createElement("div");
		const div_result = document.getElementById("result");
		div_result.appendChild(div);
		div.setAttribute("class", "main_div");

		// Analisa se o valor pesquisado tem pelo menos 3 caracteres;
		if(search.length <= 2){

			const warning = document.createElement("p"); // Cria elemento
			warning.appendChild(document.createTextNode("Digite, pelo menos, 3 caracteres !!!")); // Coloca texto;
			const div = document.querySelector(".main_div"); // Referência o div
			div.appendChild(warning); // Coloca no div;
			warning.setAttribute("class", "warning_class") // Seta atributo;

		}else{

			// Inicia o processo de pesquisa;
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
					}
					else{
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
						}
					}
				}
			}
		}
	}
}