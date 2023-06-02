var createCounter = require('../Desafios/JSIII'); // Importa la implementación de createCounter

describe('createCounter', function() {
  it('debería devolver un contador secuencial', function() {
    var counter = createCounter(10);

    expect(counter()).toBe(10);
    expect(counter()).toBe(11);
    expect(counter()).toBe(12);
  });
});
