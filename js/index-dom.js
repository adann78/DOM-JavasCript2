import hamburgerMenu from "./menu-hamburguesa.js";
import { digitalClock,alarm } from "./reloj.js";
import { moveBall,shortcuts } from "./teclado.js";
import countdown from "./cuenta-regresiva.js";
import scrollTopButton from "./boton-scroll.js";
import darkTheme from "./tema-oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import veintiocho from "./veintiocho-dias.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import webCam from "./deteccion_webcam.js";
import takePhoto from "./tomar_foto.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll-espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidation from "./validaciones_formulario.js";
import speechReader from "./narrador.js";

const d=document;
d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn",".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj",'#desactivar-reloj');
    alarm("assets/alarma.mp3", "#activar-alarma","#desactivar-alarma");
    countdown("countdown","Sep 09, 2024 00:00:00","Feliz Cumpleaños");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube", "(min-width:1024px)",`<a href="https://www.youtube.com/watch?v=j5oBP-46xDk" target="_blank"
    rel="noopener">Ver video</a>`,
     `<iframe width="560" height="315" src="https://www.youtube.com/embed/j5oBP-46xDk?si=yRfNGI2nj6MLE8gZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
)
    responsiveMedia(
        "gmaps", 
        "(min-width:1024px)",
        `<a href="https://maps.app.goo.gl/PLKmW71ote4gM5yR9" target="_blank"
        rel="noopener">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307860711345!2d-99.16888681120261!3d19.427023124964336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1713979899699!5m2!1ses!2smx" width="600" height="450" 
        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    )
    //veintiocho("veintiocho")
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam")
   // takePhoto("captureButton","webcam")
   getGeolocation("geolocation");
   searchFilters(".card-filter", ".card");
   draw("#winner-btn",".player");
   
   slider();
   //scrollSpy();
   smartVideo();
   contactFormValidation();


})

d.addEventListener("keydown",e=>{
    shortcuts(e);
    moveBall(e, ".ball",".stage")
})
darkTheme(".dark-theme-btn", "dark-mode")
speechReader();