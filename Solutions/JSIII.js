// Una posible solución

var createCounter = function(n) {
    var counter = n; // Variable local que almacenará el estado actual del contador

    return function() {
        var current = counter; // Almacenar el valor actual del contador en una variable local
        counter++; // Incrementar el contador en 1
        return current; // Devolver el valor almacenado en la variable local
    };
};
