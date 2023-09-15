const shopContent = document.getElementById("shopContent");
const cart = [];//Este es nuestro carrito, un array vacio

products.forEach((product) => {
    const content = document.createElement("div");
    content.className = "card";
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
        const repeat = cart.some((repeatproduct) => repeatproduct.id === product.id);
            if (repeat) {
            cart.map((prod) => {
                if (prod.id === product.id) {
                    prod.quanty += 1;
                    displayCartCounter();
                }
            });
            } else {            
            cart.push({
            id: product.id,
            productName: product.productName,
            price: product.price,
            quanty: product.quanty,
            img: product.img,
        });
        displayCartCounter();
        }

    }); 
});
