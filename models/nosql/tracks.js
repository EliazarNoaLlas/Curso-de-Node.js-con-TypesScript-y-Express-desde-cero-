/** Esquema de Mongosse para el modelo de pistas de musica (tracks)
 * en la base de datos de mongo db Atlas
 * 
 * Este es un ejemplo de un esquema de Mongoose para una colección de "Tracks".

EXPLICACION
La colección "Tracks" contiene información sobre canciones, 
y el esquema define los campos que se pueden almacenar en cada documento
 de la colección. Cada campo tiene un tipo específico (String, Number, ObjectId)
  y algunas restricciones de validación.

El esquema también incluye algunas opciones adicionales, 
como versionKey: false que especifica que no se debe agregar un 
campo de versión a cada documento, y 
timestamps: true que especifica quese deben agregar campos createdAt 
y updatedAt a cada documento.
 */


const mongoose = require("mongoose");

const TracksScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true; // devuelve true si existe un error pero en realidad no la valida
        },
        message: "ERROR_URL",
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
      type: mongoose.Types.ObjectId, // Identicador unico generado por mongoDB
    },
  },
  {
    versionKey: false, // No especificar el campo d eversion a cada documento
    timestamps: true, // campos de CreatedAt y UpdateduP -> LOS DATOS DE HORA DE CREACION Y MODIFICADO
  }
);
module.exports = mongoose.model("tracks", TracksScheme);
