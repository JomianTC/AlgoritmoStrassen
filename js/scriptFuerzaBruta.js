//Primero se obtiene la variable entrada que es el numero de filas y columnas para ambas matrices
var entrada = document.getElementById("input");

//Esta funcion sirve para que el usuario de enter al teclado y se inserte el numero alojado
//en entrada en nuestra variable
entrada.addEventListener("keyup", function(event){

	if (event.keyCode === 13) {

		event.preventDefault();
		document.getElementById("boton").click();
	}
});

//Creamos arreglos para las matrices que tendran los valores que escanearemos
var matrizA = [];
var matrizB = [];
var matrizR = [];

//Creamos los arreglos que serviran para obtener el resultado en la matriz resutlante
var matrizAInt = [];
var matrizBInt = [];
var matrizRInt = [];

//Creamos 2 arreglos para cambiar el texto en ciertas puntos de la pagina durante la animacion
var operacionTexto = [];
var codigoTexto = [];

//Variable que usamos para cambiar el texto de un boton
var textoBoton3;


//Funcion que sirve para crear las matrices A y B donde se insertaran los datos, a si como los botones para iniciar la animacion
//o para autollenar de valores las matrices
//
//No recibe nada
//
//No retorna nada
//
function crearMatrices (){

	//Primero verificamos si el valor de entrada es valido es decir si es igual a 2 hasta 7
	if (entrada.value > 7 || entrada.value < 2) {

		//En caso de que no sea correcto mandaremos un alert diciendo que el numero no es correcto
		//y recargaremos la pagina
		alert("Ingrese un numero entre 2 y 7");
		location.reload();
	}
	else{

		//En caso de que el valor sea correcto primero eliminaremos los botones que ya no necesitamos

		//Ya no necesitamos el boton que se oprime cuando se da enter en el teclado
		var divBoton = document.querySelector("#divBoton");
		divBoton.remove();

		//Removemos el input que recibe el numero de filas y columnas de las matrices
		var divInput = document.querySelector("#divInput");
		divInput.remove();

		//Removemos el subtitulo con la instruccion que dice para isnertar el numero de filas y columnas
		var titulo2 = document.querySelector("h2");
		titulo2.remove();

		//Inicializamos las 3 matrices que contendran las direcciones de donde se encuentras los valores
		for (var w = 0; w < entrada.value; w++) {
			matrizA[w] = new Array(entrada.value);
			matrizB[w] = new Array(entrada.value);
			matrizR[w] = new Array(entrada.value);
		}

		//Obtenemos el ID donde tendremos de manera dinamica la primera matriz
		var selectHTML = document.getElementById("matrisA");

		//Creamos un elmento subtitulo que tendra el nombre de la matriz y lo insertamos en el DOM
		var tituloMatrizA = document.createElement("h2");
		tituloMatrizA.appendChild(document.createTextNode("Matriz A"));
		selectHTML.appendChild(tituloMatrizA);

		//Ahora mediante un ciclo crearemos las matrices donde se insertaran los valores de las matrices A y B
		for(var i = 0; i < entrada.value; i++){

			//Creamos un elemento div que noser servira para dividir las filas de las matrices
			var divA = document.createElement("div");
			divA.className = "divCentrar";
			selectHTML.appendChild(divA);

			//Una vez hecho el div crearemos tantos entradas de valores como filas y columnas haya elegido el usuario
			for (var j = 0; j < entrada.value; j++){

				//A cada celda se le dara un valor de clase y de ID para su futuro manejo de valores
				var newA = document.createElement("input");
				newA.type = "text";
				newA.className = "TLA" + i;
				newA.id = "A" + i + j;

				//A su vez iremos guardando esta celda en nuestro arreglo que usaremos para obtener los valores ingresados
				//posteriormente por el usuario o llenados por nuestra funcion de autofill
				matrizA[i][j] = newA;

				divA.appendChild(newA);

			}
		}

		//Usamos la funcion unfade para mostrar el contenido oculto para darle dinamismo a la pagina web
		unfade(selectHTML, 20);

		//repetiremos el mismo procedimiento realizado en la matriz A para la matriz B
		selectHTML = document.getElementById("matrisB");

		//Creamos un elmento subtitulo que tendra el nombre de la matriz y lo insertamos en el DOM
		var tituloMatrizB = document.createElement("h2");
		tituloMatrizB.appendChild(document.createTextNode("Matriz B"));
		selectHTML.appendChild(tituloMatrizB);

		//Ahora mediante un ciclo crearemos las matrices donde se insertaran los valores de las matrices A y B
		for(var i = 0; i < entrada.value; i++){

			//Creamos un elemento div que noser servira para dividir las filas de las matrices
			var divB = document.createElement("div");
			divB.className = "divCentrar";
			selectHTML.appendChild(divB);

			//Una vez hecho el div crearemos tantos entradas de valores como filas y columnas haya elegido el usuario
			for (var j = 0; j < entrada.value; j++){

				//A cada celda se le dara un valor de clase y de ID para su futuro manejo de valores
				var newB = document.createElement("input");
				newB.type = "text";
				newB.className = "TLB" + i;
				newB.id = "B" + i + j;

				//A su vez iremos guardando esta celda en nuestro arreglo que usaremos para obtener los valores ingresados
				//posteriormente por el usuario o llenados por nuestra funcion de autofill
				matrizB[i][j] = newB;

				divB.appendChild(newB);

			}
		}

		//Usamos la funcion unfade para mostrar el contenido oculto para darle dinamismo a la pagina web
		unfade(selectHTML, 20);

		//Ahora solo nos queda crear nuestros 2 botones que uno sera para iniciar la animacion y otro sera para autollenar la matriz
		//con valores aleatorios

		//Obtenemos la posicion donde queremos crear el boton
		selectHTML = document.getElementById("divBoton2");

		//creamos el boton con la funcion create element
		var boton2 = document.createElement("button");

		//le asignamos una ID al boton
		boton2.id = "boton2";

		//Cuando se le de click al boton lo mandaremos a realizar una funcion especifica
		boton2.setAttribute("onClick", "animacion()");

		//Finalmente le damos texto al boton y lo mandamos al DOM para mostrarse en el HTML
		boton2.appendChild(document.createTextNode("Iniciar"));
		selectHTML.appendChild(boton2);

		//Haremos exactamente los mimos para el boton de autollenar, en esta caso solamente tendremos que cambiar el nombre de la funcion
		//a la que hara cuando se le de click
		var boton21 = document.createElement("button");
		boton21.id = "boton2";
		boton21.setAttribute("onClick", "autofill()");
		boton21.appendChild(document.createTextNode("Llenar"));
		selectHTML.appendChild(boton21);

		//mostramos ambos botones de manera dinamica con la funcion fade
		unfade(selectHTML, 20);
	}
}

//Funcion que sirve para auto rellenar las matrices A y B de valores aleatorios del 1 al 50
//
//No recibe nada
//
//No retorna nada
//
function autofill(){

	//creamos 2 ciclos para recorres ambas matrices
	for (var x = 0; x < entrada.value; x++){
		for (var y = 0; y < entrada.value; y++){
			//con la funcion math random le daremos un valor aleatorio y lo mandaremos a los input donde estaran estos numeros
			matrizA[x][y].value = Math.floor(Math.random() * 51);;
			matrizB[x][y].value = Math.floor(Math.random() * 51);;
		}
	}
}

//Funcion que sirve para inicializar los elementos necesarios para la animacion
//
//No recibe nada
//
//No retorna nada
//
function animacion (){

	//Primero creamos las matrices donde estan alojados los valores de los input que el usuario agrego
	for (var w = 0; w < entrada.value; w++) {
			matrizAInt[w] = new Array(entrada.value);
			matrizBInt[w] = new Array(entrada.value);
			matrizRInt[w] = new Array(entrada.value);
	}

	//Una vez que tenemos las matrices creadas obtendremos los valores alojados en ellas y los guardaremos en las matrices
	//con las que haremos la operacion de multiplicacion
	for (var x = 0; x < entrada.value; x++){
		for (var y = 0; y < entrada.value; y++){
			matrizAInt[x][y] = parseInt(matrizA[x][y].value, 10);
			matrizBInt[x][y] = parseInt(matrizB[x][y].value, 10);
		}
	}

	//Mandamos a llamar la funcion comprobacion que su funcion es ver si una celda de la matriz es incorrecta
	if (comprobacion(matrizAInt, matrizBInt)) {

		//Inicializamos la matriz resultado en 0 para evitar conflictos con las operaciones posteriores
		for (var x = 0; x < entrada.value; x++){
			for (var y = 0; y < entrada.value; y++){
					matrizRInt[x][y] = 0;
			}
		}

		//Mediante el metodo de fuerza bruta obtenemos el resultado para la matriz C, para posteriormente mostrarlos en la animacion
		for (var x = 0; x < entrada.value; x++){
			for (var y = 0; y < entrada.value; y++){
				for (var z = 0; z < entrada.value; z++){
					matrizRInt[x][y] = matrizRInt[x][y] + (matrizAInt[x][z] * matrizBInt[z][y]);
				}
			}
		}

		//Removemos el boton que nos permite dar inicio a la animacion
		var boton2 = document.getElementById("divBoton2");
		boton2.remove();

		//Ahora insertaremos el pseudocodigo para la animacion primero obtenemos la posicon de donde queremos poner este pseudocodigo
		var selectHTML = document.getElementById("pseudocodigo");

		//Ahora mediante un for que tendra unicamente 4 iteraciones haremos lo siguiente
		for(var i = 0; i < 4; i++){

			//Creamos el elemento P donde tendremos el texto de nuestro pseudocodigo
			var pseudo = document.createElement("p");

			//Le asignamos una clase y una ID
			pseudo.className = "codigoFacilito";
			pseudo.id = "C" + i;

			//Lo insertamos en nuestro documento HTML de forma dinamica
			selectHTML.appendChild(pseudo);

			//Declaramos una variable con el texto del pseudocodigo
			var textCode = [
				"for i = 0 to n do",
				"for j = 0 to n do",
				"for k = 0 to n do",
				"C[i,j] = C[i,j] + A[i,k]*B[k,j];"
			]

			//Insertaremos el texto que tenemos en nuestro arreglo de pseudocodigo y guardaremos el nodo de texto para
			//en la animacion cambiar dinamicamente
			codigoTexto[i] = document.createTextNode(textCode[i]);
			pseudo.appendChild(codigoTexto[i]);
			//Agregamos un salto de linea cada que se agrega una linea de nuestro pseudocodigo
			pseudo.appendChild(document.createElement("br"));

		}

		//mostramos el elemento en pantalla con el pseudocodigo creado
		unfade(selectHTML, 50);

		//Ahora seleccionaremos el espacio donde mostraremos la multplicacion de las celdas 
		selectHTML = document.getElementById("operaciones");

		//haremos un for de igual tamano que el numero de filas que inserto el usuario
		for (var i = 0; i <= entrada.value; i++) {

			//lo que haremos es crear tantos elementos p como numero de entrada tengamos
			var operacion = document.createElement("p");

			//a cada uno de estos se le asigna la clase oper y una ID unica para cada uno
			operacion.className = "oper";
			operacion.id = "OP" + i + "";

			//Por ultimo los agregamos al DOM del HTML
			operacionTexto[i] = document.createTextNode("A");
			operacion.appendChild(operacionTexto[i]);
			selectHTML.appendChild(operacion);
		}
		
		//Ahora craaremos la matriz resultado done pondremos nuestros valores obtenido en la multiplicacion
		selectHTML = document.getElementById("matrisR");

		//primero creamos un titulo con el nombre de matriz C
		var tituloMatrizR = document.createElement("h2");
		tituloMatrizR.appendChild(document.createTextNode("Matriz C"));
		selectHTML.appendChild(tituloMatrizR);

		//Ahora mediante un ciclo crearemos la matriz C
		for(var i = 0; i < entrada.value; i++){

			//Creamos un elemento div que no servira pada dividir cada fila de la matriz
			var divR = document.createElement("div");
			divR.className = "divCentrar";
			selectHTML.appendChild(divR);

			for (var j = 0; j < entrada.value; j++){

				//A cada celda se le dara un valor de clase y de ID para su futuro manejo de valores
				var newR = document.createElement("input");
				newR.type = "text";
				newR.className = "TLR" + i;
				newR.id = "R" + i + j;

				//A su vez iremos guardando esta celda en nuestro arreglo que usaremos para mostrar los valores obtenidos
				matrizR[i][j] = newR;

				divR.appendChild(newR);

			}
		}

		//Mostramos la matriz C de manera dinamica
		unfade(selectHTML, 50);

		//Por ultimo crearemos el boton que nos servira para avanzar en la animacion
		selectHTML = document.getElementById("divBoton3");

		//Este boton se creara igual que los demas con excepcion de que la funcion a la que llamara cada que se le de click sera
		//la funcion llamada cracion
		var boton3 = document.createElement("button");
		boton3.id = "boton3";
		boton3.setAttribute("onClick", "creacion()");
		textoBoton3 = document.createTextNode("Siguiente")
		boton3.appendChild(textoBoton3);
		selectHTML.appendChild(boton3);

		//Mostramos el boton de manera dinamica
		unfade(selectHTML, 50);
	}
}

//Declararemos las variables que usaremos para nuestros ciclos
var x = 0, y = 0, z= 0, f = 0;

//declararemos 2 banderas que nos ayudaran a ocultar el texto cuando se termine de encotrar un valor de celda en cada matriz
//y una que nos indica si queremos repetir la animacion
var ocultar = false, denuvo = false;

//Crearemos 2 variables que usaremos para cambiar el color de la celda de la matriz que estemos multiplicando
var gradiente = "var(--BBlue)", oscuro = "var(--stratos)";

//Creamos 2 variables para los botones de siguiente y de repetir animacion
var boton31, boton3A;

//creamos una variable tiempo para la funcion que mostrara cada paso de la animacion
var tiempo = 20;


//Funcion que hara la animacion paso a paso cada que se le de al boton de siguiente
//
//No recibe nada
//
//No retorna nada
//
function creacion (){

	//Primero si la animacion ya ah empezado y hemos llegado a obtener el valor de una celda preguntaremos si el valor de ocultar
	//es true, en caso de que lo sea ocultaremos el texto de las sumas obtenidas anteriormente para mostrar las nuevas sumas de las celdas
	//siguientes en las matrices A y B
	if (ocultar) { 

		//Declaramos la variable ocultacion para obtener la ID de cada texto que vamos a ocultar
		var ocultacion;

		//Creamos un ciclo que se recorre al numero de celdas que tenga la matriz mas 1
		for(var k = 0; k <= entrada.value; k++){

			//Obtenemos el ID del lemento a ocultar
			ocultacion = document.getElementById("OP" + k + "");

			//Ponemos la opacidad del elemento a 0 es decir igual a transparente
			ocultacion.style.opacity = 0;
		}

		//regresamos al color original las posiciones de las celdasque cambiamos de color para mostrar las celdas que se usaron
		//para obtener el valor resultado
		for (var o = 0; o < entrada.value; o++){
			for (var p = 0; p < entrada.value; p++){
				matrizA[o][p].style.background = gradiente;
				matrizB[o][p].style.background = gradiente;
			}
		}

		//poenos a la variable ocultar igual a false indicando que aun no hemos de ocultar anda la siguiente vez
		//que se le de click en el boton siguiente
		ocultar = false
	}

	//Si hemos acabado la animacion y queremos repetirla unicamente preguntamos si la bandera denuvo es igual true
	if (denuvo) {

		//en caso de que lo sea lo que haremos es renombrar el boton de reiniciar a siguiente
		textoBoton3.nodeValue = "Siguiente";

		//removemos el botton de recargar
		boton31.remove();

		//Poneos los valores de la matriz resultado en blanco para recalcularlos durante la animacion
		for (var o = 0; o < entrada.value; o++){
			for (var p = 0; p < entrada.value; p++){
				matrizR[o][p].value = "";
			}
		}

		//Declaramos a denuvo igual a false para indicar que no hemos llegado al final de la animacion
		denuvo = false;
	}

	//Obtenemos la posicion donde mostraremos la multiplicaicion de las celdas seleccionadas
	var selectHTML = document.getElementById("OP" + f + "");

	//Preguntamos si f es igual al valor de entrada, esto indica si hemos acabado de hacer las multiplicaciones para una celda
	if (entrada.value == f) {

		//En caso de que si primero mostraremos en la ultima fila donde estan las operaciones la suma de las multplicaciones de cada
		//celda
		operacionTexto[f].nodeValue = `MatrizC[${x}][${y}] = ${matrizRInt[x][y]}`;
		unfade(selectHTML, tiempo);

		//mostraremos el valor obtenido previamente en la multiplicaion en la posicion de la matriz resultado en la pagina
		matrizR[x][y].value = matrizRInt[x][y]

		//inicializamos de nuevo nuestras variables para ciclos y multiplicar la siguiente linea
		f = 0;
		z = 0;

		//Ahora preguntaremos si hemos completado una fila de la matriz resultado, en caso de que si lo que haremos es
		if ((entrada.value - 1) == y) {

			//regresaremos a Y al inicio
			y = 0;

			//En caso de que hayamos completado todas las operaciones para nuestra matriz lo que haremos es
			if ((entrada.value - 1) == x) {

				//inicializar en 0 nuestra variable x por si se requiere iniciar de nuevo la naimacion
				x = 0;

				//obtendremos la posicion donde crearemos un nuevo boton
				selectHTML = document.getElementById("divBoton3");

				//Este boton sera el de recargar la pagina para insertar un nuevo caso en nuestra pagina
				boton31 = document.createElement("button");
				boton31.id = "boton31";
				boton31.setAttribute("onClick", "page()");
				boton31.appendChild(document.createTextNode("Recargar"));
				selectHTML.appendChild(boton31);

				//cambiaremos el titulo del boton de siguiente por el de reinicar para volver a iniciar la animacion
				boton3A = document.getElementById("boton3");
				textoBoton3.nodeValue = "Reiniciar";

				//mostramos ambos botones de manera dinamica
				unfade(selectHTML, tiempo);

				//declaramos a denuevo en true por si el usuario queiere ver de nuevo la animacion
				denuvo = true;
			}
			else{

				//en caso de que no hayamos analizado todas las filas de la matriz A sumaremos en 1 la posicion
				x++;
			}
		}
		else{

			//En caso de que no hayamos analizado todas las columnas de la matriz B sumaremos en 1 la posicion
			y++;
		}

		//En caso de que hayamos completado una celda de la matriz pondremos ocultar en true
		ocultar = true;
	}
	else{

		//En caso de que aun estemos multiplicando los valores para obtener el resultado lo que haremos es mostrar la operacion correpondiente al ciclo en el que estamos
		//modificando el texto en nuestro objeto p anteirormente creado
		operacionTexto[f].nodeValue = `matrizA[${x}][${z}] * matrizB[${z}][${y}] = ` + matrizAInt[x][z] + " * " + matrizBInt[z][y] + " = " + matrizAInt[x][z]*matrizBInt[z][y] + "";
		
		//Una vez que hemos hecho esto mostraremos de forma dinamica en que posicon de cada ciclo y posicon de cad matriz estamos mandando en el pseudocogido los valores de las variables
		//x , y , z en las que estamos
		codigoTexto[0].nodeValue = `for i = ${x} to ${entrada.value} do`;
		codigoTexto[1].nodeValue = `for j = ${y} to ${entrada.value} do`;
		codigoTexto[2].nodeValue = `for k = ${z} to ${entrada.value} do`;
		codigoTexto[3].nodeValue = `C[${x},${y}] = C[${x},${y}] + A[${x},${z}]*B[${z},${y}]`;

		//Como aun estamos multiplicando valores lo que haremos es poner en otro color las celdas con las que estemos
		//obbteniendo la multplicacion
		matrizA[x][z].style.background = oscuro;
		matrizB[z][y].style.background = oscuro;

		//mostramos de forma dinamica estos cambios anteriormente realizados
		unfade(selectHTML, tiempo);
		unfade(matrizA[x][z], tiempo);
		unfade(matrizB[z][y], tiempo);

		//sumamos en 1 las posciones de las filas y columnas de las matrices
		f++;
		z++;
	}
}

//Funcion que sirve para verificar que las matrices tengan valores validos es decir que tengan enteros
//
//Recibe las matrices A y B con los valores de los input
//
//Retorna verdadero si las matrices son correctas, retorna falso si alguna posicion esta mal
//
function comprobacion (matrizAInt, matrizBInt){

	//Creamos 2 ciclos para recorres las matrices
	for (var x = 0; x < entrada.value; x++){
		for (var y = 0; y < entrada.value; y++){
			
			//Si alguna posicion de las matrices A y B No es un numero (Not a Number = NaN) retornaremos la posicion
			//donde el valor de la celda es erronero y devolveremos false
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

	//En caso de que todo este correcto unicamente mandaremos true indicando que las matrices son correctas
	return true;
}

//Funcion que sirve para mostrar el elemento en pantalla con una animacion de desvanecido
//
//Recibe el elemento el cual queremos mostrar y el tiempo que tomara este en mostrarse al completo
//
//No retorna nada
//
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

//Funcion que sirve para recargar la pagina cuando ah terminado la animacion
//
//No recibe nada
//
//No retorna nada
//
function page(){

    window.location.reload();
} 