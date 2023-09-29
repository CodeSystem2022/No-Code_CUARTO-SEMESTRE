

const contenedorMain = document.querySelector(".productos");
const tituloEncabezado = document.querySelector(".titulo");
const tituloSuperior =  document.querySelector(".titulo_superior")
var valorOpcionMenu = undefined;


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
    const divContenedorPorducto = document.createElement("div");

    divContenedorPorducto.innerHTML = `
        <div class="contenedor-producto">
            <div class="div-imagen-producto">
                <img src="${producto.img}" class="img-producto">
            </div>
            <div class="div-nombre-precio">
                <h2 class="div-nombre">${producto.nombreProducto}</h2>
                <p class="div-precio">$${producto.precio}</p>
                <button class="btn-agregar-carrito" id="categoria-remeras-producto-1">Agregar al Carrito</button>
            </div>
        </div>

    `;

    contenedorMain.append(divContenedorPorducto);
}