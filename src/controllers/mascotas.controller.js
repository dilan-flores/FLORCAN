const Mascota = require('../models/Mascotas');
const { uploadImage, deleteImage } = require('../config/cloudinary');
const fs = require('fs-extra');
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create();

// hbs.handlebars.registerHelper('eq', function (value1, value2, options) {
//     if (value1 === value2) {
//         return options.fn(this);
//     }
//     return options.inverse(this);
// });

const renderEstado = async (req, res) => {
    res.render("./mascotas/estado");
};

const renderAllmascotas = async (req, res) => {
    try {
        const mascotas = await Mascota.find().lean();
        res.render("./mascotas/allMascotas", { mascotas });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};

const renderMascota = (req, res) => {
    res.send('Mostrar el detalle de un portafolio');
};

const renderCampamento = async (req, res) => {
    try {
        const mascotas = await Mascota.find().lean();
        
        // Filtrar las mascotas con estado igual a 1
        const mascotasFiltradas = mascotas.filter(mascota => mascota.estado === 1);
        
        res.render("./mascotas/allMascotas", { mascotas: mascotasFiltradas });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};

const renderAdopcion = async (req, res) => {
    try {
        const mascotas = await Mascota.find().lean();
        
        // Filtrar las mascotas con estado igual a 1
        const mascotasFiltradas = mascotas.filter(mascota => mascota.estado === 2);
        
        res.render("./mascotas/allMascotas", { mascotas: mascotasFiltradas });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};

const renderSin_estado = async (req, res) => {
    try {
        const mascotas = await Mascota.find().lean();
        
        // Filtrar las mascotas con estado igual a 1
        const mascotasFiltradas = mascotas.filter(mascota => mascota.estado === 3);
        
        res.render("./mascotas/allMascotas", { mascotas: mascotasFiltradas });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};

module.exports = {
    renderAllmascotas,
    renderEstado,
    renderMascota,
    renderCampamento,
    renderAdopcion,
    renderSin_estado
};
