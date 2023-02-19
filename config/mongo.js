/** Esta función se conecta a una base de datos MongoDB utilizando la 
 * URL proporcionada en la variable DB_URI (que se espera que 
 * esté definida en el archivo .env).
 * Cuando se establece la conexión, se muestra un mensaje en la consola indicando 
 * si la conexión se estableció correctamente o si hubo un error.
 */
const mongoose = require('mongoose')
const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    // Opcion de configuracion que permite que Mongoose 
    // pase parámetros de consulta no reconocidos sin generar un archivo StrictModeError.
    mongoose.set('strictQuery', false);
    // conexion con la base de datos DB_URI
    mongoose.connect(DB_URI, {
        // nuevo analizador  del formato de las cadenas de URL conexion de MongoDB  
        useNewUrlParser: true,
        // habilitar la nueva capa de transporte del controlador MongoDB
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log('**** CONEXION CORRECTA ****')
        } else {
            console.log('***** ERROR DE CONEXION ****')
        }
    })
}

// Exportar  la funcion para conectarse
module.exports = dbConnect;
