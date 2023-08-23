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
/*
const renderAllmascotas = async (req, res) => {
    try {
        const mascotas = await Mascota.find().lean();
        res.render("./mascotas/allMascotas", { mascotas });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};
*/
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

const renderMascotasForm = async (req, res) => {
    res.render('mascotas/newFormMascota')
}
const renderNewMascotas = async (req, res) => {
    const {nombre,especie,raza,color,sexo,finca,tamanio,fecha_nacimiento,ingreso_empresa,rasgos,estado} = req.body
    const newMascota = new Mascota({nombre,especie,raza,color,sexo,finca,tamanio,fecha_nacimiento,ingreso_empresa,rasgos,estado})

    newMascota.color = ""
    newMascota.sexo = ""
    newMascota.finca = ""
    newMascota.tamanio = ""
    newMascota.fecha_nacimiento = "2023-01-01T00:00:00.000+00:00"
    newMascota.ingreso_empresa = "2023-01-01T00:00:00.000+00:00"
    newMascota.estado = 1
    newMascota.fecha_estado = "2023-01-01T00:00:00.000+00:00"

    if(!(req.files?.image)) return res.send("Se requiere una imagen")
    const imageUpload = await uploadImage(req.files.image.tempFilePath)
    newMascota.image = {
        public_id:imageUpload.public_id,
        secure_url:imageUpload.secure_url
    }

    //ALMACENA DATOS DEL FORMULARIO
    await fs.unlink(req.files.image.tempFilePath)
    await newMascota.save()
    res.redirect('/estado')
}
const renderEditMascotasForm = async (req, res) => {
    const mascota = await Mascota.findById(req.params.id).lean()
    res.render('mascotas/editMascota',{mascota})
    console.log("(RenderEditMascotasForm)Mascota......",mascota)
}
const updateMascotas = async (req, res) => {
    const mascota = await Mascota.findById(req.params.id).lean()
    if(mascota._id != req.params.id) return res.redirect('/estado')
    if(req.files?.image) {
        if(!(req.files?.image)) return res.send("Se requiere una imagen")
        await deleteImage(mascota.image.public_id)
        const imageUpload = await uploadImage(req.files.image.tempFilePath)
        const data ={
            nombre:req.body.name || Mascota.name,
            especie: req.body.especie || Mascota.especie,
            raza:req.body.raza || Mascota.raza,
            color:req.body.color || Mascota.color,
            sexo:req.body.sexo || Mascota.sexo,
            finca:req.body.finca || Mascota.finca,
            tamanio:req.body.tamanio || Mascota.tamanio,
            fecha_nacimiento:req.body.fecha_nacimiento || Mascota.fecha_nacimiento,
            ingreso_empresa:req.body.ingreso_empresa || Mascota.ingreso_empresa,
            rasgos:req.body.rasgos || Mascota.rasgos,
            fecha_estado:req.body.raza || Mascota.fecha_estado,
            estado:req.body.estado || Mascota.estado,
            image : {
            public_id:imageUpload.public_id,
            secure_url:imageUpload.secure_url
            }
        }
        await fs.unlink(req.files.image.tempFilePath)
        await Mascota.findByIdAndUpdate(req.params.id,data)
    }
    else{
        const {nombre,especie,raza,color,sexo,finca,tamanio,fecha_nacimiento,ingreso_empresa,rasgos,estado}= req.body
        await Mascota.findByIdAndUpdate(req.params.id,{nombre,especie,raza,color,sexo,finca,tamanio,fecha_nacimiento,ingreso_empresa,rasgos,estado})
    }
    res.redirect('/estado')
}
const deleteMascotas = async (req, res) => {
    const mascota = await Mascota.findByIdAndDelete(req.params.id)
    await deleteImage(mascota.image.public_id)
    res.redirect('/estado')
}

module.exports = {
    /*renderAllmascotas,*/
    renderEstado,
    renderMascota,
    renderCampamento,
    renderAdopcion,
    renderSin_estado,
    renderMascotasForm,
    renderNewMascotas,
    renderEditMascotasForm,
    updateMascotas,
    deleteMascotas
};
