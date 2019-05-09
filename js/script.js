// ACORDEÓN: CARACTERISTICA JAVASCRIPT Nº1
//  Descripción: El acordeón nos permitirá mostrar y ocultar texto al pulsar un botón. Ademas, una vez pulsado el botón
//  debe de permanecer activo hasta que pulsemos otro.

// Definición de variables:

var acordeon = document.getElementsByClassName("acordeon"); // La variable acordeon tomará su valor de los botones con class "acordeon"
var i; // Variable i (como en powershell/linux) necesaria para el for
for (i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", function() {

// Con esta parte vamos a hacer que el botón, una vez pulsado entre en modo activo tal y como hemos definido en el css:

    this.classList.toggle("active");

// En esta parte vamos a hacer que se muestren y se oculten los paneles:

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") { // Utilizaremos un if para hacer que si el elemento esta ya mostrado (block), se oculte y viceversa
      panel.style.display = "none"; // Panel oculto
    } else {
      panel.style.display = "block"; // Panel mostrado
    }
  });
}

// PESTAÑAS: CARACTERISTICA JAVASCRIPT Nº2
// Descripción: Las pestañas son parecidas a las barras de navegación, sin embargo, mostraran y ocultaran información en lugar de enlaces
function abrircaja(activo, boton) {

// Creamos las variables:

  var i, pestañacontenido, pestañabotones;

// Vamos a ocultar los elementos que apareceran cuando hagamos click en los botones de las pestañas:

  pestañacontenido = document.getElementsByClassName("pestañacontenido");
  for (i = 0; i < pestañacontenido.length; i++) {
    pestañacontenido[i].style.display = "none";
  }

// Ahora vamos a quitar el estado de active de todos los elementos, de forma que solo se muestren cuando hagamos click:

  pestañabotones = document.getElementsByClassName("pestañabotones");
  for (i = 0; i < pestañabotones.length; i++) {
    pestañabotones[i].className = pestañabotones[i].className.replace(" active", "");
  }

// Por ultimo vamos a hacer que al hacer click los elementos de ese botón se muestren, y solamente los de ese:

  document.getElementById(boton).style.display = "block";
  activo.currentTarget.className += " active";
}

// SLID DE IMÁGENES: CARACTERISTICA JAVASCRIPT Nº3
// Descripción: Este elemento consiste en un cuadro que contiene la imagen, la cual cambiará cuando pulsemos los botones lateriales

var slideindice = 1;
showSlides(slideindice);

// Definimos las funciones:

function plusSlides(n) {
  showSlides(slideindice += n);
}

function currentSlide(n) {
  showSlides(slideindice = n);
}

function showSlides(n) {
  var i;
  var diapositivas = document.getElementsByClassName("diapositivas");
  var punto = document.getElementsByClassName("punto");
  if (n > diapositivas.length) {slideindice = 1} //Avanzamos con el botón
  if (n < 1) {slideindice = diapositivas.length} //Retrocedemos con el botón

//Con este for vamos a hacer que las imagenes pasen de una en una, a medida de que incrementamos el valor:

  for (i = 0; i < diapositivas.length; i++) {
      diapositivas[i].style.display = "none";
  }

//Este for hará que los puntos de abajo se pongan en modo activo  y cambien las imágenes:

  for (i = 0; i < punto.length; i++) {
      punto[i].className = punto[i].className.replace(" active", "");
  }

// El display block nos permitirá mostrar la imágen:

  diapositivas[slideindice-1].style.display = "block";

// El modo active del botón nos permitirá que se quede naranja tras hacer click:

  punto[slideindice-1].className += " active";
}
