//entrada
function solicitarNombre (){
    let nombre = prompt ("Ingrese su nombre:");
alert ("Bienvenido " + nombre);
}

let pais = prompt ( "De que país eres ?" );

if ((pais === "Argentina") || (pais =="argentina")){
  let edad=  prompt ( "Cuantos años tenes?")
}
else if (( pais != "Argentina") || ( pais != "argentina")){
    alert ( "Disculpa no hacemos envios fuera de Argentina")
}

else if ( edad >= 18) {
    alert ( "Ya puedes ingresar a la pagina, Que lo disrutes")
} 
else if (edad < 18) {
    console.log( "Ingreso un menor no puede comprar");
}
