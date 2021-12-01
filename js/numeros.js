
function dibujaMatriz(n,m, listNumeros, idTable){

	let cuadro =  '<td>'
				+ 	'<button class="btn btn-blow"><span class=""><h1>{0}</h1></span></button>'
				+ '</td>';
	let posicion = 0;

	for(let i=0; i<n; i++){
		$(idTable).append('<tr>');
		for(let j=0; j<m; j++){
			$(idTable).append(cuadro.format(listNumeros[posicion]));
			posicion++;
		}
		$(idTable).append('</tr>');
	}
}

function generaNumeros(n,m){
	let total = n * m;
	let listNumeros = [total];

	for(let i=0; i<total; i++){
		listNumeros[i] = getRandomInt(0, 100);
	}
	return listNumeros;
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Sobrecarga el objeto String con el método format, el cual sustite {n} en la 
 * cadena original, por el (n) parámetro enviado.
 * 
 * @returns {String.prototype@call;replace}
 */
String.prototype.format = function () {
  var args = arguments;
  return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
    if (m === "{{") {
      return "{";
    }
    if (m === "}}") {
      return "}";
    }
    return args[n];
  });
};