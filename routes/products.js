var express = require("express")
var router = express.Router()

const productsController = require("../controllers/productsControllers")

// Post Crear un producto
router.post("/", (req,res,next)=>req.app.verifyToken(req,res,next),productsController.nuevoArticulo)   


/* GET Recuperar todos los productos. */
router.get("/", productsController.getAll)

/* GET Recuperar producto por id. */
router.get("/por_id/:id",productsController.porId )
 

//Put Actualizar un producto
router.put(
  "/:id",
  (req, res, next) => req.app.verifyToken(req, res, next),
  productsController.modificaArticulo
)


//Delete Eliminar un producto
router.delete(
  "/:id",
  (req, res, next) => req.app.verifyToken(req, res, next),
  productsController.eliminaArticulo
)








module.exports = router
