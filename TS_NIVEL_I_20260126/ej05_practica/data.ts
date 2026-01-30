// TIPO BASE
interface Producto{
    id:number;
    nombre:string;
    descripcion:string;
    precio:number;
    // propiedad de tipo interno que no debe salir al exterior
    esInterno:boolean;
}

export type {Producto};

// TIPOS DE UTILIDAD
// DTO de Creación: Omite del 'Id' (lo genera el servidor)
// y 'esInterno' (propiedad interna)
export type ProductoCreateDTO = Omit<Producto, 'id' | 'esInterno'>;

// DTO de Resumen: Sólo incluye la propiedades esenciales
// para mostrar en una lista
export type ProductoSummaryDTO = Pick<Producto, 'id' | 'nombre' | 'precio'>;

// DTO de actualización parcial: Todos los campos son opcionales
export type ProductoUpdateDTO = Partial<ProductoCreateDTO>;

// Enum para la respuesta de la API
export enum HttpStatus{
    OK=200,
    NOT_FOUND=404,
    SERVER_ERROR=500
}
