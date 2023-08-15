var express = require('express');
var router = express.Router();

const usersControllers = require("../controllers/usersControllers")

// Post Crear un Usuario
router.post("/sign_in", usersControllers.altaUsuario ) 
  
/* GET Recuperar Usuario por id. */
router.get("/login/:id", usersControllers.loginUser) 
  


//Put Modificar Datos Usuario
router.put("/modificaUsuario/:id", usersControllers.modificaUsuario)



//Delete Eliminar un producto
router.delete("/eliminaUsuario/:id", usersControllers.eliminaUsuario)
 
module.exports = router;
