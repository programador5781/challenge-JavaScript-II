// Diseña un sistema de estacionamiento para un estacionamiento. El estacionamiento tiene tres tipos de espacios para estacionar: grande, mediano y pequeño, con un número fijo de espacios para cada tamaño.

// Implementa la clase ParkingSystem:

// ParkingSystem(int big, int medium, int small): Inicializa un objeto de la clase ParkingSystem. El número de espacios para cada tipo de estacionamiento se proporciona como parte del constructor.
// bool addCar(int carType): Verifica si hay un espacio de estacionamiento disponible del tipo carType para el automóvil que desea ingresar al estacionamiento. carType puede ser uno de tres tipos: grande, mediano o pequeño, representados por 1, 2 y 3 respectivamente. Un automóvil solo puede estacionarse en un espacio de estacionamiento de su tipo. Si no hay espacio disponible, devuelve falso; de lo contrario, estaciona el automóvil en ese espacio y devuelve verdadero.

var ParkingSystem = function(big, medium, small) {
    // Tu código acá:

};

ParkingSystem.prototype.addCar = function(carType) {
    // Tu código acá:

};

// Ejemplo de uso
// var obj = new ParkingSystem(1, 1, 0);
// var param_1 = obj.addCar(1);
// console.log(param_1); // true
// var param_2 = obj.addCar(2);
// console.log(param_2); // true
// var param_3 = obj.addCar(3);
// console.log(param_3); // false
// var param_4 = obj.addCar(1);
// console.log(param_4); // false



// No cambiar nada debajo de esta linea:

module.exports = ParkingSystem;