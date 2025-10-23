import fs from "node:fs/promises";


console.log("Leyendo primer archivo...");

//en ecmascript modules, se puede usar top-level await sin necesidad de envolver el código en una función



  const text1= await fs.readFile("archivo.txt", "utf-8");
  console.log(text1);
  console.log("hacer cosas mientras se lee el archivo..."); //si ejecutamos este código, se muestra antes que el contenido del archivo
  console.log("Leyendo segundo archivo...");
  const text2 = await fs.readFile("archivo2.txt", "utf-8");
  console.log(text2); 


