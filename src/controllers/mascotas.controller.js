//const Portfolio = require('../models/mascotas')
const { uploadImage,deleteImage } = require('../config/cloudinary')
const fs = require('fs-extra')

const renderEstado = async(req,res)=>{
    //A PARTIR DEL MODELO USAR EL METODO FIND Y LUEGO EL METODO LEAN 
    //const portfolios = await Portfolio.find({user:req.user._id}).lean()
    res.render("./mascotas/estado"/*,{portfolios}*/)
}
const renderAllmascotas = async(req,res)=>{
    //A PARTIR DEL MODELO USAR EL METODO FIND Y LUEGO EL METODO LEAN 
    //const portfolios = await Portfolio.find({user:req.user._id}).lean()
    res.render("./mascotas/allMascotas"/*,{portfolios}*/)
}
//PRESENTAR EL FORMULARIO
const renderMascota = (req,res)=>{
    res.send('Mostrar el detalle de un portafolio')
}

module.exports = {
    renderAllmascotas,
    renderEstado,
    renderMascota
}
    // librería con funciones adicionales para el manejo de archivos en NOde.js
// npm install fs-extra