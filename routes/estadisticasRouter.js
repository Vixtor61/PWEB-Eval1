const express = require('express');
const router = express.Router();
// configurar router
const {
    estadisticasIncidencias
} = require('../controllers/incidenciasController');


router.get('/', estadisticasIncidencias)


module.exports = router;