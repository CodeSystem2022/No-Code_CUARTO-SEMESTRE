// La palabra aync no es necesaria en las funciones, porque ya son asincronas
// Igual proyectan  una sincronia visual
async function hola(nombre) {
    return new Promise (function (resolve, reject){
        setTimeout(function () {
            console.log('hola '+nombre);
            resolve(nombre);
        }, 1000);
    })
}
  

async function hablar(nombre){
    return new Promise( ( resolve, reject) =>{ // Usamos la sintaxis ES6
        setTimeout(function() {
            console.log('bla bla bla ');
            resolve(nombre);
            }, 1000);
    });
    
}


async function adios(nombre) {
    return new Promise( ( resolve, reject) => {
        setInterval(function () {
            resolve('Adios '+ nombre);
            }, 1500);
    }) 
}

//await hola('Ariel'); // esto es una mala sintaxis
// await solo es valido dentro de una función asincrona
async function main(){
    let nombre = await hola('Ariel');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}   console.log('Termina el proceso...')

console,log('Empezamos el proceso...')
main();
console.log('Esta va a ser la segunda instrucción')

// es asincrono y retorna una promesa
function sayHello(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello ${name}`);
        }, 1000);
    });
}

async function conversation(name) {
    console.log('code in inglish')
    console.log('starting async process...')
    await sayHello(name);
    await talk();
    await talk();
    await talk();
    await talk();
    await sayBay(name);
    console.log('finished async process...');
}

conversation("Ariel");
