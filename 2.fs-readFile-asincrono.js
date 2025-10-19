const fs = require('node:fs');
//callbacks, son funciones que se ejecutan cuando una tarea asíncrona ha finalizado
console.log("Leyendo primer archivo...")
//cambiamos el metod por readFile que es asíncrono y recibe un callback
fs.readFile('archivo.txt', 'utf-8', (err, text) => {
    console.log(text);
});

console.log("hacer cosas mientras se lee el archivo..."); //si ejecutamos este código, se muestra antes que el contenido del archivo
console.log("Leyendo segundo archivo...")
fs.readFile('archivo2.txt', 'utf-8', (err, text2) => {
    console.log(text2);
});
