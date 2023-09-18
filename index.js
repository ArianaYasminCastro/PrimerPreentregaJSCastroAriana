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

const productos = [
    {id: 1, nombre: "Buzo Gris", precio: 6000},
    {id: 2, nombre: "Parka", precio: 10000},
    {id: 3, nombre: "Puffer Fucsia", precio: 15000},
];

const carritoDeCompras = [];

function mostrarProductosDisponibles(productos) [
    let listaProductos = "" ; 
    for (const iterator of object) {
        
    } (const producto of productos) {
        listaProductos += `
        ID: ${producto.id}
        NOMBRE: ${producto.nombre}
        PRECIO: ${producto.precio}\n`;
    
    }
    return listaProductos;
]

function obtenerProductosPorID(productos,id) {
    return productos.find((producto)=> producto.id == id);
    
}

function agregarProductoSeleccionado(productoSeleccionado) {
    if (!productoSeleccionado) {
        alert("Producto no encontrado");
        return;
    }
    


const cantidad = parseInt (
    prompt(
       `Ha seleccionado: ${productoSeleccionado.nombre}\n
       Precio: ${productoSeleccionado.precio}\n
       Ingrese la cantidad que desea agregar:
       `
    )
);

carritoDeCompras.push(
    {
        producto: productoSeleccionado.nombre,
        cantidad: cantidad,
        precioTotal: cantidad* productoSeleccionado.precio.agregarProductoSeleccionado
         });
}
