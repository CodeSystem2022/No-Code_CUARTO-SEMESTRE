//Uso de las variables de entorno.
let nombre = process.env.NOMBRE || "Sin nombre"; //"Acceso al proceso.Variable de entorno.Nombre"
let web = process.env.WEB || "No tengo web";

console.log("hola " + nombre);
console.log("mi web es: " + web);
//De esta manera podemos agregar un valor a la variable nombre o web, ejecutando en la terminal: "$env:nombre="carlos"; node entorno.js"
//Pero cuando abrimos una nueva terminal y volvemos a ejecutar el archivo, perderemos el valor que le dimos a la variable.

//Las variables de entorno se escriben siempre en mayusculas y si hay mas de una palabra, se escriben con un guion bajo entre medio.