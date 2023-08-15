const  mongoose  = require("mongoose");

mongoose
.connect(`mongodb://127.0.0.1:27017/tpNode`)
.then(()=>{console.log("Conectado Mongoose")})
.catch((error=>console.log(error)))

module.exports = mongoose