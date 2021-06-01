//hace un hover a la foto de perfi
var img = document.getElementById('foto');
img.addEventListener('mouseenter', function(){
    this.src = "../img/otro_perfil.jpg";
}, false);
img.addEventListener('mouseleave', function(){
    this.src = "../img/foto_de_perfil.jpg"
}, false);

window.sr = ScrollReveal();
//le puedo poner la animacion a un <> clases o id
sr.reveal('div',{
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
})