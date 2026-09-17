const incidencias = require('../data/incidencias');
const helper = require('../utils/helpers');
//TODO modificar creacion de ID luego
const registrarIncidencia = (req, res) => {
    try {
       
        if ( req.body === undefined) {
            return res.status(400).json({ error: 'peticion inválida' });
        }

        const {  empleado, area,descripcion, prioridad } = req.body;
        const nuevaIncidencia = { empleado, area, descripcion, prioridad };

        const validacion = helper.ValidarNuevaIncidencia(nuevaIncidencia);
        if (!validacion.valido) {
            return res.status(400).json({ error: validacion.mensaje });
        }
        //Asignar ID y guardar la incidencia
        let id = incidencias.length + 1;
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
    let id = req.params.id
    const validacionID = helper.ValidarIDBusqueda(id);
    if (!validacionID.valido) {
        return res.status(400).json({ error: validacionID.mensaje });
    }
    id = Number(id);
    let incidencia = incidencias.find(incidencia => incidencia.id === id);
    if (!incidencia) {
        return res.status(404).json({ error: 'Incidencia no encontrada' });
    }
    res.status(200).json(incidencia);
}

const cambiarEstadoIncidencia = (req, res) => {
    try{
        //Validar ID y estado  
        let id = req.params.id
        if ( req.body === undefined) {
                return res.status(400).json({ error: 'peticion inválida' });
            }
        const validacionBusqueda = helper.ValidarIDBusqueda(id);
        if (!validacionBusqueda.valido) {
            return res.status(400).json({ error: validacionBusqueda.mensaje });
        }
        id = Number(id);
        let incidencia = incidencias.find(incidencia => incidencia.id === id);
        
        if (!incidencia) {
            return res.status(404).json({ error: 'Incidencia no encontrada' });
        }
        let estado = req.body.estado
        const validacion = helper.ValidarEstado(estado);

        if (!validacion.valido) {
            return res.status(400).json({ error: validacion.mensaje });
        }

        incidencia.estado = estado;

        
        res.status(200).json(incidencia);
    }
    catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

const eliminarIncidencia = (req, res) => {
    try{
        //Validar ID y estado  
        let id = req.params.id

        const validacionID = helper.ValidarIDBusqueda(id);
        if (!validacionID.valido) {
            return res.status(400).json({ error: validacionID.mensaje });
        }
        id = Number(id);
 
        let findIndex = incidencias.findIndex(incidencia => incidencia.id === id);
        if (findIndex === -1) {
            return res.status(404).json({ error: 'Incidencia no encontrada' });
        }
        
        incidencias.splice(findIndex, 1);
        
        res.status(200).json({ message: 'Incidencia eliminada correctamente' });
    }
    catch (error) {
        console.error('Error al eliminar la incidencia:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}


const estadisticasIncidencias = (req, res) => {
    try {
        res.status(200).json({
            "totalIncidencias": incidencias.length,
            "pendientes": incidencias.filter(incidencia => incidencia.estado === 'Pendiente').length,
            "enProceso": incidencias.filter(incidencia => incidencia.estado === 'En Progreso').length,
            "resueltas": incidencias.filter(incidencia => incidencia.estado === 'Resuelta').length,
            "canceladas": incidencias.filter(incidencia => incidencia.estado === 'Cancelada').length
        });
      
    }

    catch (error) {
        
        res.status(500).json({ error: 'Error interno del servidor' });
    }
    
}

module.exports = {registrarIncidencia, listarIncidencias, busquedaIncidenciaID, cambiarEstadoIncidencia, eliminarIncidencia,estadisticasIncidencias};