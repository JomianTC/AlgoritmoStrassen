var entrada = document.getElementById("input");

entrada.addEventListener("keyup", function(event){

	if (event.keyCode === 13) {

		event.preventDefault();
		document.getElementById("boton").click();
	}
});

//Creamos las matrices con las cuales tendremos los calculos
var matrizA = [];
var matrizB = [];
var matrizR = [];

var matrizAInt = [];
var matrizBInt = [];
var matrizRInt = [];

var operacionTexto = [];
var codigoTexto = [];

var textoBoton3;

function crearMatrices (){

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

		//Inicializamos las 3 matrices de manera especial
		for (var w = 0; w < entrada.value; w++) {
			matrizA[w] = new Array(entrada.value);
			matrizB[w] = new Array(entrada.value);
			matrizR[w] = new Array(entrada.value);
		}

		//Obtenemos el ID donde tendremos la primera matriz
		var selectHTML = document.getElementById("matrisA");

		var tituloMatrizA = document.createElement("h2");
		tituloMatrizA.appendChild(document.createTextNode("Matriz A"));
		selectHTML.appendChild(tituloMatrizA);

		//Creamos un ciclo para crear las matrices
		for(var i = 0; i < entrada.value; i++){

			var divA = document.createElement("div");
			divA.className = "divCentrar";
			selectHTML.appendChild(divA);

			for (var j = 0; j < entrada.value; j++){

				var newA = document.createElement("input");
				newA.type = "text";
				newA.className = "TLA" + i;
				newA.id = "A" + i + j;
				matrizA[i][j] = newA;

				divA.appendChild(newA);

			}
		}

		unfade(selectHTML, 20);

		selectHTML = document.getElementById("matrisB");

		var tituloMatrizB = document.createElement("h2");
		tituloMatrizB.appendChild(document.createTextNode("Matriz B"));
		selectHTML.appendChild(tituloMatrizB);

		//Creamos un ciclo para crear las matrices
		for(var i = 0; i < entrada.value; i++){

			var divB = document.createElement("div");
			divB.className = "divCentrar";
			selectHTML.appendChild(divB);

			for (var j = 0; j < entrada.value; j++){

				var newB = document.createElement("input");
				newB.type = "text";
				newB.className = "TLB" + i;
				newB.id = "B" + i + j;
				matrizB[i][j] = newB;

				divB.appendChild(newB);

			}
		}

		unfade(selectHTML, 20);

		selectHTML = document.getElementById("divBoton2");
		var boton2 = document.createElement("button");
		boton2.id = "boton2";
		boton2.setAttribute("onClick", "animacion()");
		boton2.appendChild(document.createTextNode("Iniciar"));
		selectHTML.appendChild(boton2);

		unfade(selectHTML, 20);
	}
}

function animacion (){

	for (var w = 0; w < entrada.value; w++) {
			matrizAInt[w] = new Array(entrada.value);
			matrizBInt[w] = new Array(entrada.value);
			matrizRInt[w] = new Array(entrada.value);
	}

	for (var x = 0; x < entrada.value; x++){
		for (var y = 0; y < entrada.value; y++){
			matrizAInt[x][y] = parseInt(matrizA[x][y].value, 10);
			matrizBInt[x][y] = parseInt(matrizB[x][y].value, 10);
		}
	}

	if (comprobacion(matrizAInt, matrizBInt)) {

		//Inicializamos la mtriz resutlado en 0
		for (var x = 0; x < entrada.value; x++){
			for (var y = 0; y < entrada.value; y++){
					matrizRInt[x][y] = 0;
			}
		}

		for (var x = 0; x < entrada.value; x++){
			for (var y = 0; y < entrada.value; y++){
				for (var z = 0; z < entrada.value; z++){
					matrizRInt[x][y] = matrizRInt[x][y] + (matrizAInt[x][z] * matrizBInt[z][y]);
				}
			}
		}

		var boton2 = document.getElementById("divBoton2");
		boton2.remove();

		//obtenemos la posicion donde queremos agregar el contenido
		var selectHTML = document.getElementById("pseudocodigo");

		for(var i = 0; i < 4; i++){

			//Creamos la parte del pseudocodigo
			var pseudo = document.createElement("p");
			pseudo.className = "codigoFacilito";
			pseudo.id = "C" + i;

			selectHTML.appendChild(pseudo);

			var textCode = [
				"for i = 0 to n do",
				"for j = 0 to n do",
				"for k = 0 to n do",
				"C[i,j] = C[i,j] + A[i,k]*B[k,j];"
			]

			codigoTexto[i] = document.createTextNode(textCode[i]);
			pseudo.appendChild(codigoTexto[i]);
			pseudo.appendChild(document.createElement("br"));

		}

		unfade(selectHTML, 50);

		selectHTML = document.getElementById("operaciones");

		for (var i = 0; i <= entrada.value; i++) {

			var operacion = document.createElement("p");
			operacion.className = "oper";
			operacion.id = "OP" + i + "";

			operacionTexto[i] = document.createTextNode("A");
			operacion.appendChild(operacionTexto[i]);
			selectHTML.appendChild(operacion);
		}
		
		selectHTML = document.getElementById("matrisR");

		var tituloMatrizR = document.createElement("h2");
		tituloMatrizR.appendChild(document.createTextNode("Matriz C"));
		selectHTML.appendChild(tituloMatrizR);

		//Creamos un ciclo para crear las matrices
		for(var i = 0; i < entrada.value; i++){

			var divR = document.createElement("div");
			divR.className = "divCentrar";
			selectHTML.appendChild(divR);

			for (var j = 0; j < entrada.value; j++){

				var newR = document.createElement("input");
				newR.type = "text";
				newR.className = "TLR" + i;
				newR.id = "R" + i + j;
				matrizR[i][j] = newR;

				divR.appendChild(newR);

			}
		}

		unfade(selectHTML, 50);

		selectHTML = document.getElementById("divBoton3");

		var boton3 = document.createElement("button");
		boton3.id = "boton3";
		boton3.setAttribute("onClick", "creacion()");
		textoBoton3 = document.createTextNode("Siguiente")
		boton3.appendChild(textoBoton3);
		selectHTML.appendChild(boton3);

		unfade(selectHTML, 50);
	}
}

var primeraVez = true;

var x = 0, y = 0, z= 0, f = 0, ocultar = false, denuvo = false;
var gradiente = "var(--BBlue)";
var oscuro = "var(--stratos)";
var boton31, boton3A;
var tiempo = 20;

function creacion (){

	if (ocultar) { 

		var ocultacion;

		for(var k = 0; k <= entrada.value; k++){

			ocultacion = document.getElementById("OP" + k + "");

			ocultacion.style.opacity = 0;

			ocultar = false
		}

		for (var o = 0; o < entrada.value; o++){
			for (var p = 0; p < entrada.value; p++){
				matrizA[o][p].style.background = gradiente;
				matrizB[o][p].style.background = gradiente;
			}
		}
	}

	if (denuvo) {

		textoBoton3.nodeValue = "Siguiente";
		boton31.remove();

		for (var o = 0; o < entrada.value; o++){
			for (var p = 0; p < entrada.value; p++){
				matrizR[o][p].value = "";
			}
		}

		denuvo = false;
	}

	var selectHTML = document.getElementById("OP" + f + "");

	if (entrada.value == f) {

		operacionTexto[f].nodeValue = `MatrizC[${x}][${y}] = ${matrizRInt[x][y]}`;
		unfade(selectHTML, tiempo);

		matrizR[x][y].value = matrizRInt[x][y]

		f = 0;
		z = 0;

		if ((entrada.value - 1) == y) {

			y = 0;

			if ((entrada.value - 1) == x) {

				x = 0;

				selectHTML = document.getElementById("divBoton3");

				boton31 = document.createElement("button");
				boton31.id = "boton31";
				boton31.setAttribute("onClick", "page()");
				boton31.appendChild(document.createTextNode("Recargar"));
				selectHTML.appendChild(boton31);

				boton3A = document.getElementById("boton3");
				textoBoton3.nodeValue = "Reiniciar";

				unfade(selectHTML, tiempo);

				denuvo = true;
			}
			else{

				x++;
			}
		}
		else{

			y++;
		}

		ocultar = true;
	}
	else{

		operacionTexto[f].nodeValue = `matrizA[${x}][${z}] * matrizB[${z}][${y}] = ` + matrizAInt[x][z] + " * " + matrizBInt[z][y] + " = " + matrizAInt[x][z]*matrizBInt[z][y] + "";
		codigoTexto[0].nodeValue = `for i = ${x} to ${entrada.value} do`;
		codigoTexto[1].nodeValue = `for j = ${y} to ${entrada.value} do`;
		codigoTexto[2].nodeValue = `for k = ${z} to ${entrada.value} do`;
		codigoTexto[3].nodeValue = `C[${x},${y}] = C[${x},${y}] + A[${x},${z}]*B[${z},${y}]`;
		matrizA[x][z].style.background = oscuro;
		matrizB[z][y].style.background = oscuro;

		unfade(selectHTML, tiempo);
		unfade(matrizA[x][z], tiempo);
		unfade(matrizB[z][y], tiempo);

		f++;
		z++;
	}
}

function comprobacion (matrizAInt, matrizBInt){

	for (var x = 0; x < entrada.value; x++){
		for (var y = 0; y < entrada.value; y++){
			
			if (isNaN(matrizAInt[x][y])) {

				alert("La casilla de la matrizA" + "[" + x + "]" + "[" + y + "] No es un numero");
				return false;
			}

			if (isNaN(matrizBInt[x][y])) {

				alert("La casilla de la matrizB" + "[" + x + "]" + "[" + y + "] No es un numero");
				return false;
			}
		}
	}

	return true;
}

function unfade(element, time) {

    var op = 0.1;

    var timer = setInterval(function () {

		if (op >= 1){

            clearInterval(timer);
        }

        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, time);
}

function page(){

    window.location.reload();
} 
