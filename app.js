/** Este es el archivo principal de la aplicación.

* require("dotenv").config(); carga las variables de entorno definidas en .env
* require("express") importa el módulo express que se utilizará para crear y configurar el servidor.
* require("cors") importa el módulo cors que se utilizará para habilitar el acceso a la API desde cualquier origen.
* require("./config/mongo"); importa la función dbConnect que establece la conexión con la base de datos MongoDB.
* const app = express() crea una instancia de la aplicación express.
* app.use(cors()) utiliza el middleware cors para permitir solicitudes CORS desde cualquier origen.
* const port = process.env.PORT || 3000; establece el número de puerto donde la aplicación escuchará las solicitudes de los clientes.
 El número de puerto se obtiene de la variable de entorno PORT definida en el archivo .env, o se establece en 3000 si no se encuentra la variable de entorno.
* app.use("/api",require("./routers/tracks")) define una ruta base /api y utiliza el router definido en el archivo ./routers/tracks.js para manejar todas las solicitudes a la API.
* app.listen(port, () => { ... }) inicia el servidor de la aplicación y escucha en el puerto especificado.
* dbConnect() llama a la función dbConnect para establecer la conexión con la base de datos MongoDB.
* 
*/

require("dotenv").config();
const express = require("express")
const cors = require("cors")
const dbConnect = require("./config/mongo");
const app = express()

app.use(cors())

const port = process.env.PORT || 3000;

//app.use("/api",require("./routers/tracks"))
app.use("/api",require("./routers"))
app.listen(port, () =>{
    console.log(`Tu  app esta lista desde el http://localhost:${port}`);
})


dbConnect()