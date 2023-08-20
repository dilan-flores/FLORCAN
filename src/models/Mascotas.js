const {Schema,model} = require('mongoose')

const mascotasSchema = new Schema({
    nombre:{
        type:String,
        require:true
    },
    especie:{
        type:String,
        require:true
    },
    raza:{
        type:String,
        require:true
    },
    color:{
        type:String,
        require:true
    },
    sexo:{
        type:String,
        require:true
    },
    finca:{
        type:String,
        require:true
    },
    tamaño:{
        type:String,
        require:true
    },
    fecha_nacimiento:{
        type:String,
        require:true
    },
    ingreso_empresa:{
        type:String,
        require:true
    },
    rasgos:{
        type:String,
        require:true
    },
    fecha_estado:{
        type:String,
        require:true
    },
    estado:{ /*Esta parte sería como una FK para determinar el estado y que se muestre el correspondiente*/
        type:String,
        required:true
    },
    image:{
        public_id:String,
        secure_url:String
    }
},{
    timestamps:true
})

module.exports = model('mascotas',mascotasSchema)