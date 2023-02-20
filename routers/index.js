/** Este código es un archivo que exporta un Router de Express que es utilizado para la gestión de rutas en una aplicación Node.js.

El código utiliza el módulo fspara leer los archivos de una carpeta que se encuentra en la misma ubicación que el archivo actual (en este caso, en la carpeta routers). Luego, el código filtra los archivos que tienen la extensión .jsy utiliza el nombre de archivo sin la extensión como el nombre de la ruta para cada archivo. Si el nombre de archivo es index.js, se omite ya que se utiliza para definir la ruta principal.

Por último, para cada archivo de ruta encontrado, se utiliza el método .use()de Express para agregar una ruta a la aplicación. La ruta es la ruta que se define en el archivo y el manejador de ruta es el archivo en sí mismo.

Entonces, por ejemplo, si el archivo tracks.jsse encuentra en la carpeta routers, el código agregará la ruta /tracksa la aplicación y el manejador de ruta será el archivo tracks.js.

El código resultó crea una API REST que tiene rutas para cada uno de los archivos de la carpeta routers, utilizando la estructura de carpetas como base para las rutas.
* 
*/


const express = require("express");
const fs = require("fs")
const router  = express.Router();

const PATH_ROUTES = __dirname; // direccion actual routers/index.js

const removeExtension = (filename)=>{
    // TODO:  ["index","js"] => index
    return filename.split(".").shift();

}
fs.readdirSync(PATH_ROUTES).filter((file) =>{
    //TOdo Si file es models/nosql =>  name = [index, tracks]
    //TOdo Si file es routers =>  name = [index, tracks]
    const name =removeExtension(file) // recorre por cada elemento del arreglo
    if(name !== "index"){
        console.log(`${file}`)
        router.use(`/${name}`,require(`./${file}`)) //http:localhost:3000/api/tracks
    }}
    )
module.exports = router;
