function soyAsincrona(miCallback) {
    setTimeout(function () {
      console.log('Hola' +nombre);
      miCallback()
}, 1000);

}
function adios(nombre, otroCallBack){
    setInterval(function () {
    console.log('Iniciando el proceso...');
    otroCallBack();
console.log('Adios',+ nombre);
    }, 1000);
}

console.log('Iniciando el proceso ...'),
hola('Carlos', function() {
    adios('Carlos',function(){
        console.log('Terminado el procesos..');
    });
});

//hola('Carlos',function(){});
//adios('Carlos', function(){});