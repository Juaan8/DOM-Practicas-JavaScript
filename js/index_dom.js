import hamburgerMenu from "../js/menu_hamburgesa.js";
import {digitalClock, alarm} from "../js/reloj.js";
import {moveBall,shortcuts} from "../js/teclado.js";
import countdown from "../js/cuenta_regresiva.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

hamburgerMenu(".panel-btn",".panel", ".menu a");

digitalClock("#reloj","#activar-reloj","#desactivar-reloj");

alarm("assets/alarma.mp3", "#activar-alarma","#desactivar-alarma")

countdown("countdown","Jan 8,2023 05:00:00","Feliz cumpleaños");

});

d.addEventListener("keydown", (e) => {
	shortcuts(e);
	moveBall(e,".ball",".stage");
});
