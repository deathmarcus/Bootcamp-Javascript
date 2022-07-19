// Método Seal
// Object.seal() sella un objeto, evitando que nuevas propiedades sean añadidas a él, y marcando todas las 
// propiedades existentes como no configurables. Los valores de las propiedades todavia se pueden cambiar 
// mientras sean escribibles.
const object1 = {
    property1: 42
  };
  
  Object.seal(object1);
  object1.property1 = 33;
  console.log(object1.property1);
  // expected output: 33
  
  delete object1.property1; // cannot delete when sealed
  console.log(object1.property1);
  // expected output: 33