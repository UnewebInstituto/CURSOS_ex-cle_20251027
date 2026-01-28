// Creación de interface
interface Cliente{
    id:string;
    nombre:string;
    email:string;
    telefono?:string; // Atributo opcional  
}

// Creación de una tupla
// [id producto, nombre, cantidad, precio unitario]
type LineaPedido = [number, string, number, number];

// Creacion de Unión de literales
type EstadoPedido = "PENDIENTE" | "ENVIADO" | "ENTREGADO" | 
"CANCELADO";

// Interface con Unión
interface Pedido{
    cliente:Cliente;
    fecha:Date;
    productos:LineaPedido[];
    estado:EstadoPedido;
    metodoPago:"TARJETA" | "EFECTIVO" | "TRANSFERENCIA";
    total:number;
}

// Instancia de pedido
const miPedido:Pedido = {
    cliente:{
        id:"C-123",
        nombre:"Ana Gómez",
        email:"ana@mail.com",
        telefono:"+58 212 1234567"
    },
    fecha:new Date(),
    productos:[
        [1,'Laptop',1,1200.00],
        [2,'Mouse',2,25.50]
    ],
    estado:"PENDIENTE",
    metodoPago:"TARJETA",
    total:1251.00 // 1200 + (2 * 25.50)
}

// 2da. Parte
// Producto
interface Producto{
    id:number;
    nombre:string;
    descripcion?:string;
    precio:number;
}

// Proveedor
interface Proveedor{
    nombreEmpresa:string;
    contactoEmail:string;
}

// Declaración del tipo Tupla
// [Fecha, Tipo de Movimiento ('ENTRADA' | 'SALIDA'), Cantidad]
type Movimiento=[Date,"ENTRADA"|"SALIDA",number];

type Categoria="Electrónica"|"Hogar"|"Oficina"|"Alimentos";

// Intersección de interfaces
type ArticuloInventario=Producto & Proveedor & {
    stockActual:number;
    categoria:Categoria;
    movimientos:Movimiento[];
}

// Instancia del Objeto
const tecladoMecanico:ArticuloInventario={
     // Propiedades del Producto
    id:901,
    nombre:"Teclado Mecánico Pro",
    precio:99.99,

    // Propiedades del Proveedor
    nombreEmpresa:"Tech Supplies Co.",
    contactoEmail:"support@tech.com",

    // Propiedades adicionales de la itersección
    stockActual:50,
    categoria:"Oficina",

    // Movimientos de inventario
    movimientos:[
        [new Date('2026-01-27'),'ENTRADA',100],
        [new Date('2026-01-27'),'SALIDA',50]
    ]
}

// Impresión de los objetos
console.log("\nDetalles de miPedido:");
console.log(miPedido);
console.log("\nDetalles de tecladoMecanico:");
console.log(tecladoMecanico);


