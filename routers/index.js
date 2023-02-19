const express = require("express");
const fs = require("fs")
const router  = express.Router();

const PATH_ROUTES = __dirname;


const a = fs.readFileSync(PATH_ROUTES)
console.log({a})
module.export = router;
