var express = require("express")
var router = express.Router()
const usersController = require("../controllers/usersControllers")

// Post Crear un Usuario
router.post("/", usersController.nuevoUsuario)   

//Leer todos los Usuarios
router.get("/", usersController.getAll)

/* GET Recuperar usuario por id. */
router.post("/auth",usersController.auth )
 
//Put Actualizar un Usuario
router.put("/:id", usersController.modificaUsuario)


//Delete Eliminar un usuario
router.delete("/:id", usersController.eliminaUsuario)
module.exports = router
