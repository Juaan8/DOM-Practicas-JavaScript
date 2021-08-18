import hamburgerMenu from "../js/menu_hamburgesa.js";
import {digitalClock, alarm} from "../js/reloj.js";
import {moveBall,shortcuts} from "../js/teclado.js";
import countdown from "../js/cuenta_regresiva.js";
import scrollTopButton from "../js/boton_scroll.js";
import darkTheme from "../js/tema_oscuro.js";
import responsiveMedia from "../js/objeto_responsive.js";
import responsiveTester from "../js/prueba_responsive.js";
import userDeviceInfo from "../js/deteccion_dispositivos.js";
import networkStatus from "../js/deteccion_red.js";
import webCam from "../js/deteccion_webcam.js";
import getGeolocation from "../js/geolocalizacion.js";
import searchFilters from "../js/filtro_busquedas.js";
import draw from "../js/sorteo.js";
import slider from "../js/carrusel.js";
import scrollSpy from "../js/scroll_espia.js";
import smartVideo from "../js/video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

hamburgerMenu(".panel-btn",".panel", ".menu a");

digitalClock("#reloj","#activar-reloj","#desactivar-reloj");

alarm("assets/alarma.mp3", "#activar-alarma","#desactivar-alarma");

countdown("countdown","Jan 8,2023 05:00:00","Feliz cumpleaños");

scrollTopButton(".scroll-top-btn");

responsiveMedia(
	"youtube",
	"(min-width:1024px)",
	`<a href="https://youtu.be/2uNCuUSbFZ8" target="_blank"
	rel="noopener">Ver video</a>`,
	`<iframe width="560" height="315" src="https://www.youtube.com/embed/2uNCuUSbFZ8"
	 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
	 clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
	 allowfullscreen></iframe>`);

responsiveMedia(
	"gmaps",
	"(min-width:1024px)",
	`<a href="https://goo.gl/maps/eRafGVuhe2sSHVKn6" target="_blank"
	rel="noopener">Ver mapa</a>`,
	`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.330786056554!2d-99.
	16869369203157!3d19.427023126223414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f
	f35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!
	2smx!4v1626558340236!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" 
	allowfullscreen="" loading="lazy"></iframe>`
	);
	
	responsiveTester("responsive-tester");

	userDeviceInfo("user-device");

	webCam("webcam");

	getGeolocation("geolocation");

	searchFilters(".card-filter",".card");

	draw("#winner-btn",".player");

	slider();

	scrollSpy();

	smartVideo();
});

d.addEventListener("keydown", (e) => {
	shortcuts(e);
	moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn","dark-mode");

networkStatus();