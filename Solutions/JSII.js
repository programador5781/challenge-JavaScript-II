// Una posible solución

// Extendiendo el prototipo del objeto Array para agregar el método last()
Array.prototype.last = function () {
    // Verificar si el array está vacío
    if (this.length === 0) {
        // Si está vacío, retornar -1
        return -1;
    } else {
        // Si no está vacío, retornar el último elemento del array
        return this[this.length - 1];
    }
};


// No cambiar nada debajo de esta linea:

module.exports = Array;

// Explicación a detalle:

/*En este código, se está agregando el método last() al prototipo del objeto Array para mejorar su funcionalidad. 
A continuación, se detallan los comentarios línea por línea:

Array.prototype.last = function (): Se está agregando el método last() al prototipo del objeto Array para que todos los arrays puedan acceder a él.
if (this.length === 0) {: Se verifica si el array está vacío, es decir, si su propiedad length es igual a 0.
return -1;: Si el array está vacío, se retorna el valor -1.
else {: Si el array no está vacío, se ejecuta el bloque de código siguiente.
return this[this.length - 1];: Se retorna el último elemento del array accediendo a él mediante this[this.length - 1]. this.length - 1 
representa el índice del último elemento del array.*/





