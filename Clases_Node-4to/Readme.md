Repositorio de Node 4to Semestre

Clase 04 de NodeJs 12/09:

Conceptos basicos de Node.Js: 
_ Se puede utilizar Javascript fuera del navegador para mayor capacidad de scripting.
_ Uno de sus usos mas comunes es el desarrollo de servidores web.

Ventajas de Node.Js:
_ Funcionamiento en un solo hilo para minimizar el coste de memoria.
_ Utiliza el motor V8 creado para el navegador Chrome.
_ Los desarrolladores pueden crear paquetes para subirlos a un repositorio (npm) para distribuirlos.

Limitaciones de Node.js:
_En tareas intensivas de CPU, su impacto en memoria es mayor debido a que cada hilo tiene su propia instancia en
Node y el motor Javascriot.
_ Calidad regular en los modulos npm.

Event loop:
  Es un bucle que esta constantemente ejecutandose automaticamente para que lo que le mandemos a ese bucle funcione de forma asincrona. 
Los eventos llegan desde la cola de eventos (Event Queue) el cual tiene todo lo que se ejecuta en el codigo para despues ir a la cola de eventos (Event Loop)
y ser procesados, si el evento es resuelto rapidamente, este se va thread pool, caso contrario seguira en el Event Loop para ser gestionado de forma asincrona.

Clase 05 de NodeJs 20/09:

Funcionamiento de Node Js:
_ Node tiene un bucle de eventos diferente al de los otros lenguajes, puede llegar a ser muy complejo. Dejo un link sobre el tema:
https://codigoencasa.com/bucle-de-eventos-en-nodejs-con-qwik/
_ Para dar una sencilla explicación y un ejemplo práctico del bucle de eventos en Node Js y en JavaScript, creamos el archivo "monohilo.js" y mostramos sus propiedades. Al ejecutar veremos que antes de hacer uso de la función, Se leen otras líneas de código que se priorizan por delante de la función.
