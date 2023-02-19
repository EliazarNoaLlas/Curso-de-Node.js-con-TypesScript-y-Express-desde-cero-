/** Esquema de Mongosse para el modelo de ususario (users)
 * en la base de datos de mongo db
 */

const mongoose = require("mongoose");

/* se define un esquema "const my_esquema = new mongoose.Schema()"
   llamado UserScheme, que contiene varios campos,
   como name, age, email, password y role. Cada campo especifica el 
   tipo de datos que se espera que contenga y algunas opciones adicionales, 
   como unique(dato unico) para el campo email y default(por defecto) para el campo role.

* Opciones Adicionales
- timestamps: true  => Para agregar campos de marca de tiempo de creación 
                      y actualización automáticamente
- versionKey: false => para excluir el campo __v que Mongoose agrega 
                      por defecto para realizar control de versiones.
*/
const UserScheme = new mongoose.Schema(
  {
    // nombre
    name: {
      type: String,
    },
    // año
    age: {
      type: Number,
    },
    // email
    email: {
      type: String,
      unique: true,
    },
    // contraseña
    password: {
      type: String,
    },
    // rol del usuario
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/*  Se exporta el modelo a partir del esquema  UserScheme con el nombre "users"
    Este nombre se utilizará más tarde para realizar operaciones CRUD 
    en los documentos de usuario almacenados en la base de datos.
*/
module.exports = mongoose.model("users", UserScheme);
