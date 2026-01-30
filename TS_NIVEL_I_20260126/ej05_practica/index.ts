import { fechData } from "./api.js";
import { ProductoSummaryDTO, HttpStatus, ProductoCreateDTO } from "./data.js";

// --- USO 1: Obtener una lista tipada ---

async function obtenerResumenProductos() {
    // Definimos explícitamente el tipo genérico esperado: array de ProductoSummaryDTO
    const response = await fechData<ProductoSummaryDTO[]>('products');

    if (response.status === HttpStatus.OK && response.data) {
        console.log('\n[CLIENTE] Resumen de Productos:');
        response.data.forEach(producto =>{
            console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
        })
    }
}

//  --- USO 2: Simular una creación con DTO de entrada ---
function simularCreacion(nuevoProducto: ProductoCreateDTO) {
    console.log('\n[CLIENTE] Simulando creación de producto');
    // TypeScript nos protege y nos pide SÓLO los campos del DTO de creación
    console.log(`Enviando a Api: Nombre ${nuevoProducto.nombre}, Descripción: ${nuevoProducto.descripcion}`);
}


// Ejecución 
obtenerResumenProductos();

const teclado: ProductoCreateDTO = {
    nombre: "Teclado Ergonómico",
    descripcion: "Para escritura comoda",
    precio:85.99
}

simularCreacion(teclado);

