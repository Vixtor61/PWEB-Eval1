const incidencias = require('../data/incidencias');




const ValidarNuevaIncidencia = (incidencia) => {
    console.log(incidencia)
    let resultado = {valido: false, mensaje: ''};
    const {  empleado, area,descripcion, prioridad } = incidencia;
    if ( !empleado || !area || !descripcion || !prioridad) {
        
        
        return resultado = {valido: false, mensaje: 'Los campos deben ser cadenas no vacías'};
        
    }
    if ( !cadenaValida(empleado) || !cadenaValida(area) || !cadenaValida(descripcion) || !cadenaValida(prioridad)) {
        return resultado = {valido: false, mensaje: 'Los campos deben ser cadenas no vacías'};
    }
    console.log('probar prioridad');
    switch (prioridad) {
        case 'Alta':
        case 'Media':
        case 'Baja':
            break;
        default:
            return resultado = {valido: false, mensaje: 'Prioridad inválida. Debe ser \'Alta\', \'Media\' o \'Baja\''};
    }
    console.log('Incidencia válida');
    return resultado = {valido: true, mensaje: 'Incidencia válida'};
    
}

const cadenaValida = (cadena) => {
    if (typeof cadena === 'string' && cadena.trim().length > 0) {
        return true;
    }
    return false;
}

module.exports = { ValidarNuevaIncidencia };
