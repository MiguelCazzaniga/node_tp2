var express=require('express');
var router=express.Router();
const categoriesController=require("../controllers/categoriesController")

//Leer todas las categorías
router.get('/',categoriesController.getAll);

//Agregar categoría
router.post('/',categoriesController.create)

module.exports=router;