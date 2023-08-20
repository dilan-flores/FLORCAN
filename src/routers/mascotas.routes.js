// Invocar la función router
const{Router} = require('express')
const router = Router()
const {isAuthenticated} = require('../helpers/validate-auth')

//IMPORTAR MIS CONTROLADORES
const {
    renderAllmascotas,
    renderEstado,
    renderMascota
} = require('../controllers/mascotas.controller');

// PROTECCIÓN DE RUTAS
router.get('/estado',isAuthenticated,renderEstado)
router.get('/mascotas',isAuthenticated,renderAllmascotas)
router.get('/mascota/:id', isAuthenticated,renderMascota)

module.exports = router;
