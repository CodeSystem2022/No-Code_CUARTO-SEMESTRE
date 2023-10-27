function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 2000);
    });
}

function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Bla bla bla bla...');
            //resolve(nombre);
            reject('Hay un error');
        }, 5000);
    });
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios ' + nombre);
            resolve();
        }, 5000);
    });
}

//llamamos a la funcion
console.log('Iniciando proceso...');
hola('Ariel')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminando proceso...');
})
.catch(error => {
    console.error('Ha habido un error:');
    console.error(error);
})

