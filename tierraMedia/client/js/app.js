const contenedorMain = document.querySelector(".productos"); 


productos.forEach((producto) =>{
    const divContenedorPorducto1 = document.createElement("div");

    divContenedorPorducto1.innerHTML = `
        <div class="contenedor-producto">
            <div class="div-imagen-producto">
                <img src="${producto.img}" class="img-producto">
            </div>
            <div class="div-nombre-precio">
                 <h2 class="div-nombre">${producto.nombreProducto}</h2>
                 <p class="div-precio">${producto.precio}</p>
                <buttom class="btn-agregar-carrito" id="categoria-remeras-producto-1">Agregar al Carrito</buttom>
            </div>
        </div>

    `;
    contenedorMain.append(divContenedorPorducto1);

});