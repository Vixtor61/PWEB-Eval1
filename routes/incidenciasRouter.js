const express = require('express');
const router = express.Router();
// configurar router
const {
    registrarIncidencia,listarIncidencias,busquedaIncidenciaID,cambiarEstadoIncidencia,eliminarIncidencia,
    obtenerClasificacion
} = require('../controllers/incidenciasController');

router.post('/', registrarIncidencia)
router.get('/', listarIncidencias)
router.get('/:id', busquedaIncidenciaID)
router.put('/:id/estado', cambiarEstadoIncidencia)
router.delete('/:id', eliminarIncidencia)
router.get('/:id/clasificacion', obtenerClasificacion)


module.exports = router;