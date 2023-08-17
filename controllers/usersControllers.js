const UsersModel = require("../models/usersModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

// Recuperar todos los usuarios
const getAll = async function (req, res, next) {
  try {
    const documents = await UsersModel.find()
    res.status(200).json(documents)
  } catch (e) {
    console.log(e)
  }
}

//Recuperar un Usuario
const auth = async function (req, res, next) {
  try {
    const document = await UsersModel.findOne({email:req.body.email})
    if(!document){
      return res.json({message:"Correo o Contraseña Incorrectos"})
    }
    if(bcrypt.compareSync(req.body.password,document.password)){
      const token = jwt.sign(
        { userId: document._id },
        req.app.get("secretKey"),
        { expiresIn: "1h" }
      )
      return res.json(token)
    }else{
      return res.json({ message: "Correo o Contraseña Incorrectos" })
    }
    res.status(200).json(document)
  } catch (e) {
    console.log(e)
    next(e)
  }
}

//Ingresar nuevo usuario
const nuevoUsuario = async function (req, res, next) {
  try {
    const user = new UsersModel(req.body)
    const document = await user.save()
    res.status(201).json(document)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

//Eliminar un usuario
const eliminaUsuario = async function (req, res, next) {
  try {
    const document = await UsersModel.deleteOne({ _id: req.params.id })
    res.status(204).json()
  } catch (error) {
    console.log(error)
  }
}

//Modificar usuario
const modificaUsuario = async function (req, res, next) {
  try {
    const document = await UsersModel.updateOne(
      { _id: req.params.id },
      req.body
    )
    res.json()
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  getAll,
  auth,
  nuevoUsuario,
  eliminaUsuario,
  modificaUsuario,
}
