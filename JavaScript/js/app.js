/*
function new_element(){
    $("body").append("<p>Java</p>");
    $("body").append("<p>Java</p>");
    $("body").append("<p>Java</p>");
}
*/

/*
$("#green_button").click(function() {
    alert("Handler for .click() called.");
});
*/


$("#dar_click").click(function() {
    $("input").before("<p>Aquí da click</p>");
});


//arreglo JavaScript
var frutas = ["manzana", "piña", "sandía", "limón"];

//Jquery
$.each(frutas, function(numero_fruta, nombre_fruta){
    $("#lista_fruta").append("<li>"+nombre_fruta+"</li>");
    console.log(nombre_fruta);
});

$("#dar_click_usuarios").click(function () {
    //alert("Funciona!");
    //https://jsonplaceholder.typicode.com/users

    $.ajax({
        url:"https://jsonplaceholder.typicode.com/users",
        type: "get",
        dataType: "json",
        success: function(respuesta_servidor){
            console.log(respuesta_servidor);
            $.each(respuesta_servidor, function(numero_usuario, usuario){
                console.log(usuario)
                $("#log_usuario").append("<li>"+usuario.username +", "+ usuario.email+"</li>");
            });
        }
    });
});