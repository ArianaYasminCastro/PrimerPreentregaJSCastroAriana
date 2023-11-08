const comprar = ()=>{
    let nombre = document.getElementById("nombre").value;
    let tarjeta = document.getElementById("tarjeta").value;
    let expiracion = document.getElementById("expiracion").value;
}

let nombreDelUsuario = prompt ( "Ingrese su nombre");
alert( "Bienvenido/a "+ nombreDelUsuario)

async function carrgarProductos (){
    try {
        const poductContainer = Document.getElementById ("product-container");
 productContainer.innerHTML= "Loading...";   

 await new Promise ((resolve)=> setTomeOut(resolve, 3000));

 const response = await fetch ("./data.json");
 if (!response.ok) {
    throw new Error ("no se pudo obtener la informaciòn");
 }
 const productos = await response.json ();

 productContainer.innerHTML = "";
 productos..forEach ((producto) => {
    const cardHtml= generarTarjetaProducto (producto);

    const card = document.createElement("div");
    card.innerHTML= cardHtml;

    productContainer.appendChild (card);
 });
}catch (error) {
    console.error ("Error", error);
}
}
window.addEventListener ( "load", carrgarProductos);

function addEventListener(producto) {
    return
    <div class= "product-card">
        <img src= "${producto.imagen}"alt= "${producto.nombre}">
        <h3> ${producto.nombre}</h3>
<p>Precio: $${producto.precio}</p>
<button class="buy-button">Comprar</button>

    </div> ;
    
]