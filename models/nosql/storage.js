/** Esquema de Mongosse para el modelo de almacenamiento(storage)
 * en la base de datos de mongo db de base de datos
 */
const mongoose = require("mongoose");
const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("storage", StorageScheme);
