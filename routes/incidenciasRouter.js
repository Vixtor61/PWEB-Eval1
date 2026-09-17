const express = require('express');
const router = express.Router();
// configurar router
const {
    registrarIncidencia,listarIncidencias,busquedaIncidenciaID,cambiarEstadoIncidencia,eliminarIncidencia
} = require('../controllers/incidenciasController');

router.post('/', registrarIncidencia)
router.get('/', listarIncidencias)
router.get('/:id', busquedaIncidenciaID)
router.put('/:id/estado', cambiarEstadoIncidencia)
router.delete('/:id', eliminarIncidencia)


module.exports = router;