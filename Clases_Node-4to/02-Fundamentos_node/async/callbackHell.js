function soyAsincrona(miCallback) {
    setTimeout(function () {
      console.log('Hola' +nombre);
      miCallback()
}, 1000);

function hablar(miCallbackHablar){
    setTimeout(function() {
        console.log('bla bla bla ');
        miCallbackHablar();

    }, 1000);
}

}
function adios(nombre, otroCallBack){
    setInterval(function () {
    console.log('Iniciando el proceso...');
    otroCallBack();
console.log('Adios',+ nombre);
    }, 1000);
}

//Función Recursiva
function conversacion(nombre, veces, Callback){
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, Callback);
        });
    }else{
        Callback(nombre,Callback);
    }
}


// ---Proceso principal 
console.log('Iniciando el proceso ...');
hola('Ariel', function (nombre ) {
    conversacion(nombre, 4, function () {
        console.log('terminando el proceso ...');
    });
});
//hola('Carlos', function(nombre) {
  //  hablar(function() {
    //    hablar(function() {
      //  adios(nombre, function(){
        //    console.log('Terminado el procesos..');
          //  });
       // });
    
   // });

// });

