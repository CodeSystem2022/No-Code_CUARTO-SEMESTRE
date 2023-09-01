const shopContent = document.getElementById("shopContent");
const cart = [];//Este es nuestro carrito, un array vacio

products.forEach((product) => {
    const content = document.createElement("div");
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.productName}</h3>
        <p>${product.price} $</p>
    `;

    shopContent.append(content);

    const buybutton = document.createElement("button");
    buybutton.innerText = "Comprar";

    content.append(buybutton);

    buybutton.addEventListener("click", () => {
        cart.push({
            id: product.id,
            productName: product.productName,
            price: product.price,
            img: product.img
        })
        console.log(cart);
        })
});
