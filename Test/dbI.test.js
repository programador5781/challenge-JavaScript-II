// ⚠️ No cambiar nada en este archivo

const ParkingSystem = require('../Desafios/dbI');

describe('ParkingSystem', () => {
  let parkingSystem;

  beforeEach(() => {
    parkingSystem = new ParkingSystem(1, 1, 0);
  });

  test('should allow parking a big car', () => {
    const result = parkingSystem.addCar(1);
    expect(result).toBe(true);
  });

  test('should allow parking a medium car', () => {
    const result = parkingSystem.addCar(2);
    expect(result).toBe(true);
  });

  test('should not allow parking a small car when no spaces available', () => {
    const result = parkingSystem.addCar(3);
    expect(result).toBe(false);
  });

  test('should not allow parking a big car when no spaces available', () => {
    parkingSystem.addCar(1); // Ocupa el único espacio disponible para automóviles grandes.
    const result = parkingSystem.addCar(1);
    expect(result).toBe(false);
  });
});
