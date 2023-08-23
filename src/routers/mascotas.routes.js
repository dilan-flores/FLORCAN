// Invocar la función router
const{Router} = require('express')
const router = Router()
const {isAuthenticated} = require('../helpers/validate-auth')

//IMPORTAR MIS CONTROLADORES
const {
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
} = require('../controllers/mascotas.controller');

// PROTECCIÓN DE RUTAS
router.get('/estado',isAuthenticated,renderEstado)
/*router.get('/mascotas',isAuthenticated,renderAllmascotas)*/
router.get('/mascota/:id', isAuthenticated,renderMascota)

router.get('/mascotas/campamento',isAuthenticated,renderCampamento)
router.get('/mascotas/adopcion',isAuthenticated,renderAdopcion)
router.get('/mascotas/sin_estado',isAuthenticated,renderSin_estado)

// TRAER TODOS LOS DATOS DE LA MASCOTA Y CREAR UNO NUEVO
router.get('/mascotas/add', isAuthenticated,renderMascotasForm)
router.post('/mascotas/add',isAuthenticated,renderNewMascotas)
// TRAER TODAS LOS DATOS DE LA MASCOTA
router.get('/mascotas/edit/:id',isAuthenticated,renderEditMascotasForm)
// ACTUALIZAR LAS MASCOTA
router.put('/mascotas/edit/:id',isAuthenticated,updateMascotas)
// EIMINAR MASCOTA
router.delete('/mascotas/delete/:id', isAuthenticated,deleteMascotas)
module.exports = router;
