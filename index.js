/* Color del fondo - Gracias a Vishnu Dileesh on codepen https://codepen.io/vishnu_dileesh/pen/eYJMvVX
y a las explicaciones de los usuarios de GitHub y StackOverflow*/

let colors = [
	"#c31a23",
	"#e056fd",
	"#686de0",
	"#30336b",
	"#c20083",
	"#8800c2",
	"#c2ae00",
	"#eb4d4b",
	"#00c277",
	"#005bc2",
	"#c20000"
];
const body = document.body;

function changeColor() {
	//console.log("¡Gracias por jugar con Elmo!");
	body.style.background = randomColor();
}

function randomColor() {
	const num = Math.floor(Math.random() * Math.floor(10));
	return colors[num];
}

/*Galeria - https://www.w3schools.com/ */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
	} else {
      panel.style.display = "block";
	}
  });
}

function openModal() {
	document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
	document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
/* Controles de la galeria */
  function plusSlides(n) {
	showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
	showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
  }