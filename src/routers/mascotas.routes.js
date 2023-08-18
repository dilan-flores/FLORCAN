// Invocar la función router
const{Router} = require('express')
const router = Router()
const {isAuthenticated} = require('../helpers/validate-auth')

//IMPORTAR MIS CONTROLADORES
const {
    renderEstado
} = require('../controllers/mascotas.controller');

// PROTECCIÓN DE RUTAS
router.get('/estado',isAuthenticated,renderEstado)

module.exports = router;
