function validarArray(array, tamanho) {
  try {
    if (array && array.length === tamanho) {
      return array;
    } else if (!array && !tamanho) {
      throw new ReferenceError();
    } else if (!array instanceof Object || !tamanho instanceof Number) {
      throw new TypeError();
    } else if (array.length !== tamanho) {
      throw new RangeError();
    }
  } catch (e) {
    if (e instanceof ReferenceError) {
      return (e.message = "Os paramêtros não foram enviados");
    } else if (e instanceof TypeError) {
      return (e.message =
        "O array enviado não é do tipo 'Object' ou o valor do tamanho desejado não é do tipo 'Number'");
    } else if (e instanceof RangeError) {
      return (e.message =
        "O tamanho do array é diferente do valor enviado por parametro");
    }
  }
}

const array = [1, 2];
const number = 5;

console.log(validarArray(array, number));
