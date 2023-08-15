//Crear Usuario
const altaUsuario = function (req, res, next) {
   console.log("Crear Usuario")
   console.log(req.body)

   res.json(req.body)
}

//Recuperar un Usuario
const loginUser=function(req,res,next){
    console.log(req.query)
  const usuario = [
    {
      id: 1,
      nombre: "Usuario 1",
      apellido: "Usuario 1",
      email: "Usuario1 Correo",
    },
    {
      id: 2,
      nombre: "Usuario 2",
      apellido: "Usuario 2",
      email: "Usuario2 Correo",
    },
  ]
  res.json(usuario[req.params.id])
}

const modificaUsuario=function(req,res,next){
  console.log(req.params.id)
  console.log(req.body)
 
  res. json("Modificar datos Usuario")
}

const eliminaUsuario=function(res,res,next){

 
  res.json("Eliminar datos del Usuario")
  
}


module.exports = {
    altaUsuario,
    loginUser,
    modificaUsuario,
    eliminaUsuario
}
