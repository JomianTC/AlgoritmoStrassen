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

function multiplicaMatrices(matrizA, matrizB, matrizR){

	for (var x = 0; x < entrada.value; x++){
		for (var y = 0; y < entrada.value; y++){
			for (var z = 0; z < entrada.value; z++){
				matrizR[x][y] = matrizR[x][y] + (matrizA[x][z] * matrizB[z][y]);
			}
		}
	}
}

function iniciarAnimacion(){

	if (entrada.value > 7 || entrada.value < 2) {

		alert("Ingrese un numero entre 2 y 7");
		location.reload();
	}
	else{

		//Removemos el boton oculto
		var divBoton = document.querySelector("#divBoton");
		divBoton.remove();

		//Removemos el input que recibe el numero
		var divInput = document.querySelector("#divInput");
		divInput.remove();

		//Removemos el h2 que tiene el titulo de insertar numeros de filas y columnas
		var titulo2 = document.querySelector("h2");
		titulo2.remove();

		//Creamos la tabla dinamica que sera la que tendra la matriz 1
		var tabla = document.getElementById("tabla1");
		
		//Inicializamos las 3 matrices para isnertar los valores y el resultado
		var matrizA = [];
		var matrizB = [];
		var matrizR = [];

		//Inicializamos las 3 matrices de manera especial
		for (var w = 0; w < entrada.value; w++) {
			matrizA[w] = new Array(entrada.value);
			matrizB[w] = new Array(entrada.value);
			matrizR[w] = new Array(entrada.value);
		}

		//Creamos la matriz A con valores aleatorios
		for (var j = 0; j < entrada.value; j++){

			crearMatrices(tabla, matrizA, j);
		}

		//Declaramos la tabla 2 donde estara la segudna matriz
		tabla = document.getElementById("tabla2");

		//Creamos la matriz 2 con los valores aleatorios
		for (var j = 0; j < entrada.value; j++){

			crearMatrices(tabla, matrizB, j);
		}

		//Inicializamos la matriz resultado lleno de ceros
		for (var j = 0; j < entrada.value; j++){
			for (var i = 0; i < entrada.value; i++){

				matrizR[i][j] = 0;
			}
		}

		//Mandamos a llamar la funcion que obtiene el resultado de la 2
		//matrices creadas
		multiplicaMatrices(matrizA, matrizB, matrizR);
	}
}