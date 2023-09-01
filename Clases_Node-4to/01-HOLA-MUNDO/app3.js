console.log('Inicio del programa'); //1

setTimeout(() => {
    console.log('Primer Timeout');  //5  -->5
},3000);// 3000 milisegundos = 3 segundos

setTimeout(() => {
    console.log('Segundo Timeout');  //2 -->3   
},0); // 0 milisegundos = 0 segundos

setTimeout(() => {
    console.log('Tercer Timeout');   //3  -->4
},0); // 0 milisegundos = 0 segundos

console.log('Fin del programa');//4--->2



