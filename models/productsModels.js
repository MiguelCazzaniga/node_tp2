const mongoose=require("../config/mongodb")

const productSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"Campo Obligatorio"]
    },
    price:{
        type:Number,
        min:[0,"El precio debe ser mayor a 0"]
    },
    description:String,
    quantity:Number
})

const productsModel=mongoose.model("productos",productSchema)

module.exports = productsModel