// Invocar la función router
const{Router} = require('express')
const router = Router()
const {isAuthenticated} = require('../helpers/validate-auth')

//IMPORTAR MIS CONTROLADORES
const {
    renderAllmascotas,
    renderEstado,
    renderMascota,
    renderCampamento,
    renderAdopcion,
    renderSin_estado
} = require('../controllers/mascotas.controller');

// PROTECCIÓN DE RUTAS
router.get('/estado',isAuthenticated,renderEstado)
router.get('/mascotas',isAuthenticated,renderAllmascotas)
router.get('/mascota/:id', isAuthenticated,renderMascota)

router.get('/mascotas/campamento',isAuthenticated,renderCampamento)
router.get('/mascotas/adopcion',isAuthenticated,renderAdopcion)
router.get('/mascotas/sin_estado',isAuthenticated,renderSin_estado)

module.exports = router;
