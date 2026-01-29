"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1RA. PARTE
function logearAccion(accion) {
    console.log(`[LOG] Acción realizada: ${accion}`);
}
var CodigoError;
(function (CodigoError) {
    CodigoError[CodigoError["OK"] = 200] = "OK";
    CodigoError[CodigoError["RECURSO_NO_ENCONTRADO"] = 404] = "RECURSO_NO_ENCONTRADO";
    CodigoError[CodigoError["ERROR_INTERNO"] = 500] = "ERROR_INTERNO";
})(CodigoError || (CodigoError = {}));
var Status;
(function (Status) {
    Status[Status["CONECTADO"] = 0] = "CONECTADO";
    Status[Status["DESCONECTADO"] = 1] = "DESCONECTADO";
    Status[Status["EN_MANTENIMIENTO"] = 2] = "EN_MANTENIMIENTO";
})(Status || (Status = {}));
class ServicioDatos {
    // Atributos
    apiUrl = "https://api.ejemplo.com/v1/";
    status = Status.DESCONECTADO;
    // Métodos
    // Tipado
    conectar() {
        this.status = Status.CONECTADO;
        logearAccion("Servicio conectado");
        return CodigoError.OK;
    }
    // Parámetros opcionales
    obtenerRecurso(endpoint, id) {
        if (this.status !== Status.CONECTADO) {
            return CodigoError.ERROR_INTERNO;
        }
        const url = this.apiUrl + endpoint;
        if (!id) {
            return `Recurso obtenidos de ${url}`;
        }
        // Simulación de búsqueda (Si el id = 99 falla)
        if (id === 99) {
            return CodigoError.RECURSO_NO_ENCONTRADO;
        }
        return `Recurso (ID: ${id}) obtenido de ${url}`;
    }
}
// INSTANCIA DE LA CLASE
const servicio = new ServicioDatos();
servicio.conectar();
// Prueba 1 : Petición exitosa con parámetro opcional
const lista = servicio.obtenerRecurso("usuarios");
console.log(`[Resultado Lista]: ${lista}`);
// Prueba 2 : Peticion exitosa
const usuario = servicio.obtenerRecurso("usuarios", 10);
console.log(`[Resultado ID 10]: ${usuario}`);
// Prueba 3: Petición con error 404
const error404 = servicio.obtenerRecurso("usuarios", 99);
if (error404 === CodigoError.RECURSO_NO_ENCONTRADO) {
    console.log(`[Error] Fallo al obtener el recurso. Código: ${error404}`);
}
// 2DA. PARTE
var EstadoTarea;
(function (EstadoTarea) {
    EstadoTarea["PENDIENTE"] = "PENDIENTE";
    EstadoTarea["EN_PROGRESO"] = "EN_PROGRESO";
    EstadoTarea["COMPLETADA"] = "COMPLETADA";
    EstadoTarea["CANCELADA"] = "CANCELADA";
})(EstadoTarea || (EstadoTarea = {}));
var Prioridad;
(function (Prioridad) {
    Prioridad[Prioridad["BAJA"] = 0] = "BAJA";
    Prioridad[Prioridad["MEDIA"] = 1] = "MEDIA";
    Prioridad[Prioridad["ALTA"] = 3] = "ALTA";
})(Prioridad || (Prioridad = {}));
class TaskManager {
    tasks = [];
    lastId = 0;
    crearTarea(titulo, prioridad, fechaLimite) {
        this.lastId++;
        const nuevaTarea = {
            id: this.lastId,
            titulo: titulo,
            estado: EstadoTarea.PENDIENTE,
            prioridad: prioridad,
            fechaCreacion: new Date(),
            fechaLimite: fechaLimite,
        };
        this.tasks.push(nuevaTarea);
        return nuevaTarea;
    }
    actualizarEstado(id, nuevoEstado) {
        const tareaEncontrada = this.tasks.find(t => t.id === id);
        if (tareaEncontrada) {
            tareaEncontrada.estado = nuevoEstado;
            return true;
        }
        return false;
    }
    obtenerTareasPorEstado(estado) {
        return this.tasks.filter(t => t.estado === estado);
    }
    logearAccionNuevo(mensaje) {
        console.log(`[LOG - ${new Date().toLocaleTimeString()}]: ${mensaje}`);
    }
    obtenerTodasLasTareas() {
        return this.tasks;
    }
}
// INSTANCIA DE LA CLASE TASKMANAGER
console.log("--- 🚀 Iniciando Gestor de Tareas ---");
const gestor = new TaskManager();
// 1. Creación de tareas usando los Enums
const tarea1 = gestor.crearTarea("Diseñar la interfaz de usuario", Prioridad.ALTA);
const tarea2 = gestor.crearTarea("Corregir errores menores", Prioridad.MEDIA);
const tarea3 = gestor.crearTarea("Documentación final", Prioridad.BAJA);
gestor.logearAccionNuevo(`Creadas ${gestor.obtenerTodasLasTareas().length} tareas.`);
// 2. Actualización de estado usando el Enum
console.log(`\nEstado inicial de Tarea 1: ${tarea1.estado}`);
gestor.actualizarEstado(tarea1.id, EstadoTarea.EN_PROGRESO);
console.log(`Estado actualizado de Tarea 1: ${tarea1.estado}`);
// 3. Intento de actualizar con un string no válido (Fallo de compilación)
// gestor.actualizarEstado(tarea2.id, "TERMINADO");
// ❌ ERROR: El argumento debe ser de tipo 'EstadoTarea'.
// 4. Filtrado de tareas por estado
gestor.actualizarEstado(tarea3.id, EstadoTarea.COMPLETADA);
const pendientes = gestor.obtenerTareasPorEstado(EstadoTarea.PENDIENTE);
const completadas = gestor.obtenerTareasPorEstado(EstadoTarea.COMPLETADA);
console.log(`\nTareas Pendientes: ${pendientes.length} (ID: ${pendientes.map(t => t.id).join(', ')})`);
console.log(`Tareas Completadas: ${completadas.length} (ID: ${completadas.map(t => t.id).join(', ')})`);
//# sourceMappingURL=index.js.map