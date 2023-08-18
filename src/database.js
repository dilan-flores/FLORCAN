const mongoose = require('mongoose')

//Conexion de la base de datos atlas
const {DBUSER,DBPASSWORD,DBNAME} = process.env
const MONGODB_URI = `mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0.rmnp8hq.mongodb.net/${DBNAME}`
//const MONGOOSE_URI='mongodb://0.0.0.0:27017/FLORCAN' 
connection = async()=>{
    try {
         await mongoose.connect(MONGODB_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("LA BASE ESTA CONECTADA!")
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection