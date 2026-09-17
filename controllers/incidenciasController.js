const incidencias = require('../data/incidencias');
const { ValidarNuevaIncidencia, validarIDBusqueda } = require('../utils/helpers');

const registrarIncidencia = (req, res) => {
    try {
       
        if ( req.body === undefined) {
            return res.status(400).json({ error: 'peticion inválida' });
        }

        const {  empleado, area,descripcion, prioridad } = req.body;
        const nuevaIncidencia = { empleado, area, descripcion, prioridad };

        validacion = ValidarNuevaIncidencia(nuevaIncidencia);
        if (!validacion.valido) {
            return res.status(400).json({ error: validacion.mensaje });
        }
        //Asignar ID y guardar la incidencia
        id = incidencias.length + 1;
        nuevaIncidencia.id = id;
        incidencias.push(nuevaIncidencia);
        res.status(201).json({ message: 'Incidencia registrada correctamente' });
        }

    catch (error) {
        console.error('Error al registrar la incidencia:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }



}

const listarIncidencias = (req, res) => {
    try {
        res.status(200).json(incidencias);
      
    }

    catch (error) {
        
        res.status(500).json({ error: 'Error interno del servidor' });
    }
    
}

const busquedaIncidenciaID = (req, res) => {
    id = req.params.id
    validacion = validarIDBusqueda(id);
    if (!validacion.valido) {
        return res.status(400).json({ error: validacion.mensaje });
    }
    incidencia = incidencias.find(incidencia => incidencia.id === parseInt(id));
    if (!incidencia) {
        return res.status(404).json({ error: 'Incidencia no encontrada' });
    }
    res.status(200).json(incidencia);
}
module.exports = {registrarIncidencia, listarIncidencias, busquedaIncidenciaID};