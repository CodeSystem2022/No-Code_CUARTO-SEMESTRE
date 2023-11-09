const fs = require('fs'); 

//Primero leemos el archivo.txt
function lee(ruta, cb){
    fs.readFile(ruta, (err, data) => {
        console.log(data);
    })
}

listenerCount(_dirname + '/archivo.txt', console.log); //Sintaxis ES6

//Segundo escribimos el archivo1.txt creandolo
function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contendido, function (err){
    if (err){
        console.log('Nose ha podido escribir', err);

    }else {
        console.log('Se ha escrito correctamente');
    }    
    })
}

//Tercero eliminamos el archivo1.txt
function borrar(ruta, bc){
    fs.unlink(ruta, cb); //Elimina de manerar asicrona
}
borrar(`${_dirname}/archivo1.txt`, console.log); 

//escribir(`${_dirname}/archivo1.txt`, 'reescribimos el archivo', console.log);s