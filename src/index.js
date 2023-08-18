require('dotenv').config() //Método para cargar las variables del archivo .env
const app = require('./server.js')
const connection = require('./database.js')

connection()
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})

// npm init --y
    // Módulos de entorno de desarrollo y de producción: dependencias 
// npm i express connect-flash bcryptjs express-handlebars express-session method-override mongoose passport passport-local
    //Módulo de entorno de desarrollo: funcionamiento de nodemon
//npm i dotenv nodemon npm-check-updates -D
    // intalación de requerimientos
// npm i
    // uso de Cloudinary
//npm i express-fileupload
    // uso de nodemailer: autenticación de correo electrónico
// npm install nodemailer

