/**Este código define una ruta en Express que maneja 
 * una solicitud GET a la ruta "/". Cuando se solicita esta ruta, 
 * se devuelve un objeto JSON con una matriz de dos cadenas de texto:
 *  "hola" y "mundo". Este código también exporta el objeto router,
 *  que puede ser utilizado por otro módulo 
 * para incluir esta ruta en una aplicación de Express más grande.
 * 
 */

const express = require("express");
const router = express.Router();

// TODO htt://localhost/tracks => GET POST DELETE PUT
// OBTENEAR UNA LISTA DE RUTAS
router.get("/", (req,res) => {
  const data = ["hola", "mundo"]
  res.send({data:data})
})

module.exports = router
