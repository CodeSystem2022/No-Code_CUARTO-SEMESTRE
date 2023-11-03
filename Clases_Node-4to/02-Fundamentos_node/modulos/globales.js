//this === global = true

//Mostrar algo en consola
//console.log();
//mostrar un error en consola
//console.error();
//Ejecutar un código después de un intervalo
//setTimeout(() => {  });

//Ejecutar un código cada cierto intervalo
//setInterval(() => {  });

//Da prioridad de ejecución a una función asincronica
//setImmediate(() => {  });

//console.log(setInterval);
//console.log(setImmediate);

let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola');
    if (i === 3) {
        clearInterval(intervalo); //detenemos la función
    }
    i++;
}, 1000);

setImmediate(() => {
    console.log('Saludo inmediato');
});

console.log(process); //nos muestra información del proceso
//directorio
console.log(__dirname);
//archivo
console.log(__filename);

globalThis.miVariable = 'mi variable global';
console.log(miVariable);



