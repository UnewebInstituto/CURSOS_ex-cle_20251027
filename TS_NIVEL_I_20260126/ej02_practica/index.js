"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Instancia de pedido
const miPedido = {
    cliente: {
        id: "C-123",
        nombre: "Ana Gómez",
        email: "ana@mail.com",
        telefono: "+58 212 1234567"
    },
    fecha: new Date(),
    productos: [
        [1, 'Laptop', 1, 1200.00],
        [2, 'Mouse', 2, 25.50]
    ],
    estado: "PENDIENTE",
    metodoPago: "TARJETA",
    total: 1251.00 // 1200 + (2 * 25.50)
};
// Instancia del Objeto
const tecladoMecanico = {
    // Propiedades del Producto
    id: 901,
    nombre: "Teclado Mecánico Pro",
    precio: 99.99,
    // Propiedades del Proveedor
    nombreEmpresa: "Tech Supplies Co.",
    contactoEmail: "support@tech.com",
    // Propiedades adicionales de la itersección
    stockActual: 50,
    categoria: "Oficina",
    // Movimientos de inventario
    movimientos: [
        [new Date('2026-01-27'), 'ENTRADA', 100],
        [new Date('2026-01-27'), 'SALIDA', 50]
    ]
};
// Impresión de los objetos
console.log("\nDetalles de miPedido:");
console.log(miPedido);
console.log("\nDetalles de tecladoMecanico:");
console.log(tecladoMecanico);
//# sourceMappingURL=index.js.map