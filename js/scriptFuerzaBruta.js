var entrada = document.getElementById("input");

entrada.addEventListener("keyup", function(event){

	if (event.keyCode === 13) {

		event.preventDefault();
		document.getElementById("boton").click();
	}
});

function crearMatrices (tabla, matriz, j){

	var fila = document.createElement("tr");

	tabla.appendChild(fila);

	for(var i = 0; i < entrada.value; i++){

		var celda = document.createElement("td");
		var valorRandom = (Math.floor(Math.random() * 90)) + 10;
		var texto = document.createTextNode(valorRandom);
		matriz[j][i] = valorRandom;
		celda.appendChild(texto);
		fila.appendChild(celda);
	}

}

function iniciarAnimacion(){

	if (entrada.value > 7 || entrada.value < 2) {

		alert("Ingrese un numero entre 2 y 7");
		location.reload();
	}
	else{

		var divBoton = document.querySelector("#divBoton");
		divBoton.remove();

		var divInput = document.querySelector("#divInput");
		divInput.remove();

		var titulo2 = document.querySelector("h2");
		titulo2.remove();

		entrada.remove();
		
		var tabla = document.getElementById("tabla1");
		
		var matrizA = [];
		var matrizB = [];

		for (var w = 0; w < entrada.value; w++) {
			matrizA[w] = new Array(entrada.value);
			matrizB[w] = new Array(entrada.value);
		}

		for (var j = 0; j < entrada.value; j++){

			crearMatrices(tabla, matrizA, j);
		}

		tabla = document.getElementById("tabla2");

		for (var j = 0; j < entrada.value; j++){

			crearMatrices(tabla, matrizB, j);
		}

		console.log(matrizA);
		console.log(matrizB);
	}
}