$("#boton_enviar").click(function(event) {
  //console.log("hola");
  var email_usuario = $("#exampleInputEmail1").val();
  var password = $("#exampleInputPassword1").val();

  var datos_json = {
    usuario_email: email_usuario,
    usuario_password: password
  };

  var endpoint = "https://hrodrich.free.beeceptor.com";
  // jQuery.post( url [, data ] [, success ] [, dataType ] )
  $.post(endpoint, datos_json);

  //https://hrodrich.free.beeceptor.com
  console.log(datos_json);
  event.preventDefault();
});
