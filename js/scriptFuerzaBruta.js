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

		//Creamos un ciclo para crear las matrices
		for(var i = 0; i < entrada.value; i++){

			var divA = document.createElement("div");
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

		selectHTML = document.getElementById("matrisB");

		//Creamos un ciclo para crear las matrices
		for(var i = 0; i < entrada.value; i++){

			var divB = document.createElement("div");
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

		var boton2 = document.getElementById("divBoton2");
		boton2.style.visibility = 'visible';
	}
}

function animacion (){

	var matrizAInt = [];
	var matrizBInt = [];
	var matrizRInt = [];

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

		//obtenemos la posicion donde queremos agregar el contenido
		var selectHTML = document.getElementById("pseudocodigo");

		for(var i = 0; i < 4; i++){

			//Creamos la parte del pseudocodigo
			var pseudo = document.createElement("p");
			pseudo.className = "codigoFacilito";
			pseudo.id = "C" + i;

			selectHTML.appendChild(pseudo);

			var textCode = [
				"for i = 1 to n do",
				"for j = 1 to n do",
				"for k = 1 to n do",
				"C[i,j] = C[i,j] + A[i,k]*B[k,j];"
			]

			var codigo = document.createTextNode(textCode[i]);
			pseudo.appendChild(codigo);
			pseudo.appendChild(document.createElement("br"));

		}

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

		//Animacion en si
		var boton2 = document.getElementById("boton2");
		boton2.remove();

		unfade(selectHTML, 50);

		delay(function(){
    		wait(3000);
		}, 3000 );

		var x = 0;
		var y = 0;

		myLoopX(x, y);
		myLoopY(x, y);

		selectHTML = document.getElementById("Operaciones");
		var op = document.createElement("p");
		op.className = "codigoFacilito";
		op.id = "cambiante";

		selectHTML.appendChild(op);

		var opeText = "";

		var opePantalla = document.createTextNode(opeText);
		op.appendChild(opeText);

		
	}
}

var delay = ( function() {

    var timer = 0;

    return function(callback, ms) {

        clearTimeout (timer);

        timer = setTimeout(callback, ms);
    };
})();

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

    element.style.display = 'block';

    var timer = setInterval(function () {

		if (op >= 1){

            clearInterval(timer);
        }

        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, time);
}

function myLoopX(x, y, tiempo){
	
	setTimeout(function() {

		matrizA[x][y].style.background = "var(--stratos)";
    
    	if (y < entrada.value){
      		
      		myLoopX(x, y+1);
    	}
  	}, tiempo)
}

function myLoopY(x, y, tiempo){

	setTimeout(function(){

		matrizB[x][y].style.background = "var(--stratos)";

		if (x < entrada.value) {

			myLoopY(x+1, y);
		}
	}, tiempo)
}



//Multiplicacion de matrices

for (var x = 0; x < entrada.value; x++){
		for (var y = 0; y < entrada.value; y++){
			for (var z = 0; z < entrada.value; z++){
				matrizR[x][y] = matrizR[x][y] + (matrizA[x][z] * matrizB[z][y]);
			}
		}
	}

