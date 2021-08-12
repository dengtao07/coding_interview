Number.isInteger = Number.isInteger || function (value) {
  return typeof value === 'number'
         && Number.isFinite(value)
         && Math.floor(value) === value;
};
