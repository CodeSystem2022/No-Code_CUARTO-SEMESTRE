let nombre = process.env.NOMBRE;

let web = process.env.WEB || 'No tengo web'

console.log('Hola ' + nombre);
console.log('Mi web es: ' + web);

console.log('Ultima ejecución');