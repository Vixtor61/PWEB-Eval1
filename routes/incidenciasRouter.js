const express = require('express');
const router = express.Router();
// configurar router
const {
    registrarIncidencia,listarIncidencias,busquedaIncidenciaID,cambiarEstadoIncidencia,eliminarIncidencia
} = require('../controllers/incidenciasController');

router.post('/registrar', registrarIncidencia)
router.get('/listar', listarIncidencias)
router.get('/buscar/:id', busquedaIncidenciaID)
router.put('/:id/estado', cambiarEstadoIncidencia)
//router.delete('/eliminar/:id', eliminarIncidencia)

module.exports = router;