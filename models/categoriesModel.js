const mongoose=require("../config/mongodb")

const categorySchema=new mongoose.Schema({
    name:String,
});

/* categorySchema.statics.findBydIdAndValidate=async function(id){
    const document=await this.finById(id);
    if(!document){
        return{
            error:true,
            message:"No existe categoria"
        }
    }
    return document;
} */
    module.exports=mongoose.model("categories",categorySchema)
