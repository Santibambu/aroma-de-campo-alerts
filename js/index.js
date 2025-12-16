alert("Te damos la bienvenida a Aroma de Campo, la panadería artesanal mejor calificada en el mercado Argentino.");

let cuenta;
let sesion;

do {
    cuenta = prompt("Deseás crearte una cuenta para acceder a descuentos y promociones exclusivas?\nEscribir S o N.").toUpperCase();

    if (cuenta === "S") {
        let usuario = prompt("Ingresar un nombre de usuario.");
        prompt("Ingresar una contraseña.");
        alert("¡Te damos la bienvenida, " + usuario + "!" + "\nPronto podrás acceder a descuentos increíbles =).");
        sesion = "activa";
    } else if (cuenta === "N") {
        alert("Decidiste no crearte una cuenta.");
        sesion = "inactiva";
    } else if (cuenta.trim() === "") {
        alert("Opción inválida. Porfavor, ingresar S o N.");
    } else {
        alert("Opción inválida. Porfavor, ingresar S o N.");
    }
} while (cuenta !== "S" && cuenta !== "N");

let producto;
let precio;

do{
    producto = prompt("¿Qué producto desea comprar?\n\nIngresar el nombre del producto deseado.\n\nMedialunas de manteca: $ 50.\nMedialunas de grasa: $ 50.\nBizcochitos de grasa: $ 90.\nTorta frita: $ 150.\nCremona: $ 200.").toLowerCase();

    if (producto.trim() === "" || !isNaN(producto)) {
        alert("Opción inválida. Porfavor, ingresar un producto de la lista.");
    } else if (producto === "medialunas de manteca" || producto === "medialunas de grasa") {
        precio = 50;
    } else if (producto === "bizcochitos de grasa") {
        precio = 90;
    } else if (producto === "torta frita") {
        precio = 150;
    } else if (producto === "cremona") {
        precio = 200;
    } else {
        alert("Opción inválida. Porfavor, ingresar un producto de la lista.");
    }
} while (producto.trim() === "" || !isNaN(producto) || !precio);

let cantidad;

while(cantidad <= 0 || cantidad >= 500 || cantidad === null || isNaN(cantidad)) {
    cantidad = parseInt(prompt("¿Cuántos productos desea comprar?\n\nIngresar un número mayor que 0 y menor o igual que 500."));

    if (cantidad === null || isNaN(cantidad)) {
        alert("Opción inválida. Porfavor, ingresar la cantidad a comprar del producto deseado");
    } else if (cantidad <= 0) {
        alert("Opción inválida. Porfavor, ingresar un número mayor que 0.");
    } else if (cantidad >= 500) {
        alert("Opción inválida. Porfavor, ingresar un número mayor que 500.");
    } else {
        alert(`¡Perfecto! Tu orden de compra está terminada:\n\nProducto deseado: ${producto.charAt(0).toUpperCase() + producto.slice(1)}\nCantidad deseada: ${cantidad}`);
    }
}

function descuento(sesion, precio, cantidad) {
    if (sesion === "activa" && precio >= 100) {
        let precioDescuento = precio - (precio * 0.25);
        precioFinal = precioDescuento * cantidad;
        alert(`El total de tu orden de compra es de $ ${precioFinal}:\n\nPrecio base del producto: $ ${precio}.\nPrecio con descuento: $ ${precioDescuento} (existe una sesión activa y el valor de la compra es o excede los $ 100).\nPrecio final: $ ${precioFinal} (${precioDescuento} * ${cantidad}).\n\n¡Gracias por elegir Aroma de Campo!`);
    } else if (sesion === "inactiva") {
        let precioFinal = precio * cantidad;
        alert(`El total de tu orden de compra es de $ ${precioFinal}:\n\nPrecio base del producto: $ ${precio}.\nPrecio con descuento: $ ${precio} (no existe una sesión activa).\nPrecio final: $ ${precioFinal} (${precioFinal} * ${cantidad}).\n\n¡Gracias por elegir Aroma de Campo!`);
    } else {
        let precioFinal = precio * cantidad;
        alert(`El total de tu orden de compra es de $ ${precioFinal}:\n\nPrecio base del producto: $ ${precio}.\nPrecio con descuento: $ ${precio} (el precio total de la orden de compra no es ni excede los $ 100).\nPrecio final: $ ${precioFinal} (${precioFinal} * ${cantidad}).\n\n¡Gracias por elegir Aroma de Campo!`);
    }   
}

descuento(sesion, precio, cantidad);