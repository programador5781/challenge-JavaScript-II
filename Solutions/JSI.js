// Una posible solución

// Definición de la función constructora ParkingSystem
var ParkingSystem = function(big, medium, small) {
    // Inicialización de la propiedad spaces como un arreglo
    // El índice 0 representa los espacios no utilizados
    // Los índices 1, 2 y 3 representan la cantidad de espacios disponibles para los tipos de automóvil grande, mediano y pequeño respectivamente
    this.spaces = [0, big, medium, small];
};

// Definición del método addCar en el prototipo de ParkingSystem
ParkingSystem.prototype.addCar = function(carType) {
    // Verificar si hay espacios disponibles para el tipo de automóvil especificado
    if (this.spaces[carType] > 0) {
        // Si hay espacios disponibles, decrementar la cantidad de espacios para ese tipo de automóvil en uno
        this.spaces[carType]--;
        // Devolver true para indicar que el automóvil fue estacionado exitosamente
        return true;
    } else {
        // Si no hay espacios disponibles, devolver false para indicar que el automóvil no puede ser estacionado
        return false;
    }
};










// ⚠️ no cambiar nada debajo de esta linea:
module.exports = ParkingSystem;