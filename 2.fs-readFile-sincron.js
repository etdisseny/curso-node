const fs = require('node:fs');

console.log("Leyendo primer archivo...")
const text = fs.readFileSync('archivo.txt', 'utf-8');
console.log(text);
console.log("hacer cosas mientras se lee el archivo...");//esto al ser sincrono, no podria continuar hasta que termine de leer el archivo
console.log("Leyendo segundo archivo...")
const text2 = fs.readFileSync('archivo2.txt', 'utf-8');
console.log(text2);