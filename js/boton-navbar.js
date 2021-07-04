/* inserta y quita la clase icono-cerrar al boton del menu */

$(function(){
     $("#menu-navegacion").click(
          function(){
               $("span").toggleClass("icono-cerrar");
          });
});

/* remover clase icono-cerrar */
$(function(){
     $("#navbarNav .navbar-nav a").click(
          function(){
               $("span").removeClass("icono-cerrar");

               $('#navbarNav').collapse('hide');
          });

});