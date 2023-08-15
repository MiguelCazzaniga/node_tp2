const ProductsModel =require("../models/productsModels")

// Recuperar todos los articulos
const getAll = async function(req,res,next){
  try {
    const documents=await ProductsModel.find()
    res.status(200).json(documents)
  } catch (e) {
    console.log(e)
  }

}

//Recuperar un articulo en particular
const porId= async function(req,res,next){
 try {
  const document=await ProductsModel.findById(req.params.id)
  res.status(200).json(document)
 } catch (e) {
  console.log(e)  
  next(e)
 }
}

//Ingresar Articulo nuevo
const nuevoArticulo= async function(req,res,next){
  try {
  
  const product= new ProductsModel({
    title:req.body.title,
    price:req.body.price,
    description:req.body.description,
    quantity:req.body.quantity

  })
  const document=await product.save()
  res.status(201).json(document)
 } catch (e) {
   res.status(400).json(e.message)
 } 
}

//Eliminar un articulo
const eliminaArticulo= async function(req,res,next){
 try {
  const document=await ProductsModel.deleteOne({_id:req.params.id})
  res.status(204).json()
 } catch (e) {
  console.log(e)
 }
}

//Modificar Articulo
const modificaArticulo= async function(req,res,next){
  try {
    const document=await ProductsModel.updateOne({_id:req.params.id},req.body)
    res.status(200).json(document)
  } catch (e) {
    res.status(400).json(e.message)
  }
}

module.exports={
    getAll,porId,nuevoArticulo,eliminaArticulo,modificaArticulo
}