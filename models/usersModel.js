const mongoose = require("../config/mongodb")
const bcrypt=require("bcrypt")

const usersSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    minLength: 5,
    maxLength: 30,
  },
  apellido: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    minLength: 5,
    maxLength: 30,
  },
  password: {
    type: String,
    required: [true, "Es necesaria una clave"],
    minLength: 5,
    maxLength: 30,
  },
})

usersSchema.pre("save",function(next){
  this.password=bcrypt.hashSync(this.password,10)
  next()
})
const usersModel = mongoose.model("usuarios", usersSchema)

module.exports = usersModel