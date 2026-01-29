// 1RA. PARTE
function logearAccion(accion:string):void{
    console.log(`[LOG] Acción realizada: ${accion}`);
}


enum CodigoError{
    OK = 200,
    RECURSO_NO_ENCONTRADO = 404,
    ERROR_INTERNO = 500,
}

enum Status{
    CONECTADO,
    DESCONECTADO,
    EN_MANTENIMIENTO,
}

class ServicioDatos{
    // Atributos
    private readonly apiUrl:string = "https://api.ejemplo.com/v1/";
    private status:Status = Status.DESCONECTADO;

    // Métodos
    // Tipado
    conectar(): CodigoError{
        this.status = Status.CONECTADO;
        logearAccion("Servicio conectado");
        return CodigoError.OK;
    }
    // Parámetros opcionales
    obtenerRecurso(endpoint:string, id?:number):string|CodigoError{
        if (this.status !== Status.CONECTADO){
            return CodigoError.ERROR_INTERNO;
        }
    
    const url = this.apiUrl + endpoint;
   
    if (!id){
        return `Recurso obtenidos de ${url}`;
    }
    // Simulación de búsqueda (Si el id = 99 falla)

    if (id === 99){
        return CodigoError.RECURSO_NO_ENCONTRADO
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
const usuario = servicio.obtenerRecurso("usuarios",10);
console.log(`[Resultado ID 10]: ${usuario}`);


// Prueba 3: Petición con error 404
const error404 = servicio.obtenerRecurso("usuarios",99);
if (error404 === CodigoError.RECURSO_NO_ENCONTRADO){
    console.log(`[Error] Fallo al obtener el recurso. Código: ${error404}`);
}

// 2DA. PARTE

enum EstadoTarea{
    PENDIENTE = 'PENDIENTE',
    EN_PROGRESO = 'EN_PROGRESO',
    COMPLETADA = 'COMPLETADA',
    CANCELADA  = 'CANCELADA',
}

enum Prioridad{
    BAJA,
    MEDIA,
    ALTA = 3,
}

interface Tarea{
    id:number;
    titulo:string;
    estado:EstadoTarea;
    prioridad:Prioridad;
    fechaCreacion:Date;
    fechaLimite?:Date | undefined;
}

class TaskManager{
    private tasks: Tarea[] = [];
    private lastId: number = 0;

    public crearTarea(titulo:string, prioridad:Prioridad, fechaLimite?:Date):Tarea{
        this.lastId++;

        const nuevaTarea: Tarea = {
            id: this.lastId,
            titulo: titulo,
            estado: EstadoTarea.PENDIENTE,
            prioridad: prioridad,
            fechaCreacion: new Date(),
            fechaLimite: fechaLimite ,
        };

        this.tasks.push(nuevaTarea);
        return nuevaTarea;

    }

    public actualizarEstado(id:number, nuevoEstado:EstadoTarea):boolean{
        const tareaEncontrada = this.tasks.find(t=> t.id === id);

        if (tareaEncontrada){
            tareaEncontrada.estado = nuevoEstado;
            return true;
        }
        return false;
    }

    public obtenerTareasPorEstado(estado:EstadoTarea):Tarea[]{
        return this.tasks.filter(t => t.estado === estado);
    }

    public logearAccionNuevo(mensaje:string):void{
        console.log(`[LOG - ${new Date().toLocaleTimeString()}]: ${mensaje}`);
    }

    public obtenerTodasLasTareas():readonly Tarea[]{
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


