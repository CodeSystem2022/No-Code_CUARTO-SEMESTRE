console.log("Hola a toda la cohorte 2022")

//Creamos un setInterval y mostramos un mensaje y un iterador, cada 1000 milisegundos.
var i = 0;
setInterval(function() {
    console.log("Sigo activo");
    console.log(i);
    i++;

    //Creamos un error dentro del ciclo
    /*
    if(i === 5){
        console.log("Forzamos un error en la iteracion cinco");
        var a = 3 + z;
    }
    */
}, 1000);
//En Node nuestra funcion se ejecutara ultimo, despues de haber corrido la linea 1, 4 y 19.
console.log("Segunda instruccion");