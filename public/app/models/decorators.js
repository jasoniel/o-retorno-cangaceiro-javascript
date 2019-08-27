export const logExecutionTime = (method, property, args) => {
  console.time(property);
  const result = method(...args);
  console.timeEnd(property);

  return result;
};

export const inspectMethod = ({ excludeReturn } = {}) => (
  method,
  property,
  args
) => {
  console.log(`Metodo decorado: ${property}`);
  console.log(`Argumentos do metodo : ${args}`);
  const result = method(...args);
  console.log(`resultado do método: ${result}`);

  if (!excludeReturn) console.log(`resultado do metodo: ${result}`);

  return result;
};
