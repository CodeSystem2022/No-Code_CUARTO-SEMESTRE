

const contenedorMain = document.querySelector(".productos");
const tituloEncabezado = document.querySelector(".titulo");
const tituloSuperior =  document.querySelector(".titulo_superior")
var valorOpcionMenu = undefined;
//se crea un array vacio
const cart = [];


if (window.location.pathname.endsWith("productos.html")) {
    const valorOpcionMenu = localStorage.getItem('valorOpcionMenu');
    switch (valorOpcionMenu) {
        case 'tazas':
            const productosTazas = productos.filter((producto) => producto.categoria === 'tazas');
            productosTazas.forEach((producto) => {
                tituloEncabezado.textContent = "Tazas";
                tituloSuperior.textContent = 'Productos Tazas | Tierra Media';
                crearProductoHtml(producto);
            });
            break;
        case 'remeras':
            const productosRemeras = productos.filter((producto) => producto.categoria === 'remeras');
            productosRemeras.forEach((producto) => {
                tituloEncabezado.textContent = "Remeras";
                tituloSuperior.textContent = 'Productos Remeras | Tierra Media';
                crearProductoHtml(producto);
            });
            break;
        case 'figuras':
            const productosFiguras = productos.filter((producto) => producto.categoria === 'figuras');
            productosFiguras.forEach((producto) => {
                tituloEncabezado.textContent = "Figuras";
                tituloSuperior.textContent = 'Productos Figuras | Tierra media';
                crearProductoHtml(producto);
            });
            break;
        case 'accesorios':
            const productosAccesorios = productos.filter((producto) => producto.categoria === 'accesorios');
            productosAccesorios.forEach((producto) => {
                tituloEncabezado.textContent = "Accesorios";
                tituloSuperior.textContent = 'Productos Accesorios | Tierra media';
                crearProductoHtml(producto);
            });
            break;
        case 'comics':
            const productosComics = productos.filter((producto) => producto.categoria === 'comics');
            productosComics.forEach((producto) => {
                tituloEncabezado.textContent = "Comics";
                tituloSuperior.textContent = 'Productos Comics | Tierra media';
                crearProductoHtml(producto);
            });
            break;
        case 'mangas':
            const productosMangas = productos.filter((producto) => producto.categoria === 'mangas');
            productosMangas.forEach((producto) => {
                tituloEncabezado.textContent = "Mangas";
                tituloSuperior.textContent = 'Productos Mangas | Tierra media';
                crearProductoHtml(producto);
            });
            break;
        case 'simpsons':
            const productosSimpsons = productos.filter((producto) => producto.categoria === 'simpsons');
            productosSimpsons.forEach((producto) => {
                tituloEncabezado.textContent = "Simpson Mania";
                tituloSuperior.textContent = 'Productos Simpson Mania | Tierra media';
                crearProductoHtml(producto);
            });
            break;
        case 'armas':
            const productosArmas = productos.filter((producto) => producto.categoria === 'armas');
            productosArmas.forEach((producto) => {
                tituloEncabezado.textContent = "Armas";
                tituloSuperior.textContent = 'Productos Armas Colección | Tierra media';
                crearProductoHtml(producto);
            });
            break;

        default:
            break;
    }

};
function opcionMenu(opcionMenu) {
    valorOpcionMenu = opcionMenu;
    localStorage.setItem('valorOpcionMenu', valorOpcionMenu);
};
function crearProductoHtml(producto) {
    const divContenedorProducto = document.createElement("div");
    //agrego en el boton de compra el id del boton id="btn-compra"
    divContenedorProducto.innerHTML = `
        <div class="contenedor-producto">
            <div class="div-imagen-producto">
                <img src="${producto.img}" class="img-producto">
            </div>
            <div class="div-nombre-precio">
                <h2 class="div-nombre">${producto.nombreProducto}</h2>
                <p class="div-precio">$${producto.precio}</p>
                <button class="btn-agregar-carrito" id="btn-compra">Agregar al Carrito</button>
            </div>
        </div>

    `;

    contenedorMain.append(divContenedorProducto);

    //agregar al carrito
    const buyButton = divContenedorProducto.querySelector("#btn-compra");
    buyButton.addEventListener("click", () => {
        //que se agregue al carrito por id pero que no se repita
        const repeat = cart.some((repeatProduct) => repeatProduct.id === producto.id);
        if(repeat) {
            //si se repite el producto, se suma la cantidad
            cart.map((prod) => {
                if(prod.id === producto.id) {
                    prod.quanty ++;
                    displayCartCounter();
                }
            });
        }else{
            //agrego al carrito los datos del producto
            cart.push({
                id: producto.id,
                productName: producto.nombreProducto,
                price: producto.precio,
                quanty: producto.cantidad,
                img: producto.img,
            });
            //console.log(cart);
            displayCartCounter
        }   
    });
};
   


//creo el carrito
const modalContainer = document.querySelector('.modal-container');
const modalOverlay = document.querySelector('.modal-overlay');
//coloco el boton del carrito
const cartBtn = document.getElementById('cart-btnn');
const cartCounter = document.getElementById('cart-counter');
//con esta funcion muestro el carrito
const displayCart = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";
    //modal header
    const modalHeader = document.createElement('div');
    
    const modalClose = document.createElement('div');

    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);
    //cuando hago click en la x se cierra el carrito
    modalClose.addEventListener('click', () => {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    });
    //titulo del carrito
    const modalTitle = document.createElement('div');
    modalTitle.innerText = "Carrito de compras";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);
    //agruegar el carrito al modal
    modalContainer.append(modalHeader);

    //modal Body
    //si el carrito esta vacio
    if( cart.length > 0) {
        //se crea un div por cada producto
    cart.forEach((producto) => {
    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    modalBody.innerHTML = `
        <div class="product">
            <img src="${producto.img}" class="product-img" />
            <div class="product-info">
                <h4>${producto.productName}</h4>
            </div>
            <div class="quantity">
                <span class="quantity-btn-decrease">-</span>
                <span class="quantity-input">${producto.quanty}</span>
                <span class="quantity-btn-increase">+</span>
            </div>        
            <div class="product-price">
                <div class="price">${producto.price * producto.quanty} $</p>
                <div class="delete-product">❌</div>
        </div>        
    `;
    //agrergar el body al modalContainer
    modalContainer.append(modalBody);
    //console.log(modalBody);
    //modal body events
    //decremento la cantidad en el carrito    
    const decrease = modalBody.querySelector('.quantity-btn-decrease');
    decrease.addEventListener('click', () => {
        if(producto.quanty !== 1){
        producto.quanty --;
        displayCart();
        displayCartCounter();
        }    
    });
    //incremento la cantidad en el carrito
    const increase = modalBody.querySelector('.quantity-btn-increase');
    increase.addEventListener('click', () => {
        producto.quanty ++;
        displayCart();
        displayCartCounter();
    });

    //delete producto del carrito
    const deleteProduct = modalBody.querySelector('.delete-product');
    deleteProduct.addEventListener('click', () => {
        deleteCartProduct(producto.id);
    });

});


    //modal footer
    //calcula el total de la compra
    const total = cart.reduce((acc, elemento) => acc + elemento.price * elemento.quanty, 0);
    const modalFooter = document.createElement('div');
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
    <div class="total.price">Total de la compra: $ ${total}</div>
    `;
    modalContainer.append(modalFooter);
}else{
    //si el carrito esta vacio
    const modalText = document.createElement('h2');
    modalText.className = "modal-body";
    modalText.innerText = "No hay productos en el carrito";
    modalContainer.append(modalText);
}
};
//funcion para eliminar un producto del carrito
const deleteCartProduct = (id) =>{
    //busco el id del producto en el carrito
    const foundId = cart.findIndex((element) => element.id === id);
    //console.log(foundId);
    //elimino el producto del carrito con el id encontrado
    cart.splice(foundId, 1);
    displayCart();
    displayCartCounter();
}
//evento para mostrar el carrito
cartBtn.addEventListener('click', displayCart);
//funcion para mostrar la cantidad de productos en el carrito
const displayCartCounter = () => {
    //reduce para sumar la cantidad de productos en el carrito
    const cartLength = cart.reduce((acc, elem) => acc + elem.quanty, 0);
    //si el carrito tiene productos
    if(cart.length > 0) {
        cartCounter.style.display = "block";
        cartCounter.innerText = cartLength;
    }else{
        //si el carrito esta vacio
        cartCounter.style.display = "none";
    }
};



