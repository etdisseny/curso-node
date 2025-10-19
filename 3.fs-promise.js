const fs = require("node:fs/promises");//muchos modulos de node tienen una versión basada en promesas

//en los módulos nativos que no tienen promesas nativas,
//podemos usar el módulo 'util' para convertir funciones basadas en callbacks a promesas
//const util = require("node:util");
// const readFilePromise = util.promisify(fs.readFile); //promisify convierte una función basada en callback a una que devuelve una promesa

//ahora con node:fs/promises podemos usar promesas en lugar de callbacks en la mayoria de modulos de fs. Sino tambien esta la opció de arriba
console.log("Leyendo primer archivo...");

fs.readFile("archivo.txt", "utf-8").then((text) => {
  console.log(text);
});

console.log("hacer cosas mientras se lee el archivo..."); //si ejecutamos este código, se muestra antes que el contenido del archivo
console.log("Leyendo segundo archivo...");
fs.readFile("archivo2.txt", "utf-8").then((text2) => {
  console.log(text2);
});
