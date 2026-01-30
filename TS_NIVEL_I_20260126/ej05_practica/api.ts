import {Producto, ProductoSummaryDTO, HttpStatus, ProductoCreateDTO} from './data.js';

// INTERFAZ GENERICA PARA LA RESPUESTA DE LA API.
// T será el tipo de los datos (por ejmplo Producto[], string, ProductoSummaryDTO)

interface ApiResponse<T>{
    status:HttpStatus;
    data: T | null;
    error?:string;
}

// --- FUNCIÓN GENÉRICA DEL CLIENTE ---
/**
* Simula una llamada fetch a una API.
* @param endpoint El endpoint de la API.
* @returns Una promesa que resuelve a un ApiResponse<T>.
*/

export async function fechData<T>(endpoint: string): Promise<ApiResponse<T>> {
    console.log(`\n[API] Solicitando ${endpoint}`);

    // Simuación de respuesta de la API
    if (endpoint === 'products'){
        const mockData: Producto[] = [
            {id:1,nombre:"Laptop",descripcion:"Portátil potente",precio:1200,esInterno:false},
            {id:2,nombre:"Monitor",descripcion:"Pantalla 4K",precio:450,esInterno:true},
        ];
    // Mapeo seguro a un DTO de Resumen usando Pick
    const summaryData: ProductoSummaryDTO[] = mockData.map(
        p=>({
            id:p.id,
            nombre:p.nombre,
            precio:p.precio
        }))// Recomensación de Paolo
        // })) as T[]; // Aserción al tipo genérico de retorno T (ProductoSummaryDTO[])
        return {status:HttpStatus.OK, data:summaryData as T}
    }

    if (endpoint === 'product/view'){
        return {status:HttpStatus.NOT_FOUND,data:null,error:'Ruta de creación no implementada'};;
    }

    return {status:HttpStatus.SERVER_ERROR, data:null, error:'Error de servidor simulado'};


}
