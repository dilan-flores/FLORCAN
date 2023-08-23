const {Schema,model} = require('mongoose')

const padrinoSchema = new Schema({
    nombre:{
        type:String,
        require:true
    },
    CI:{
        type:String,
        require:true
    },
    telefono:{
        type:String,
        require:true
    },
    celular:{
        type:String,
        require:true
    },
    direccion:{
        type:String,
        require:true
    },
    parroquia:{
        type:String,
        require:true
    },
    barrio:{
        type:String,
        require:true
    },
    email:{
        type:Date,
        require:true
    },
    mascota:{
        type:String,
        required:true
    },
},{
    timestamps:true
})

module.exports = model('Padrino', mascotasSchema);
