// configuracion mensaje de error por email o username duplicados
const handleDuplicateKeyError = (err, res) => {
  const fiel = Object.keys(err.keyValue);
  const code = 201;
  const error = `Ya existe una cuenta con ese  ${fiel}.`;
  res.status(code).send({ message: error, field: fiel });
}

//configuracion formato, y contraseñas no coinciden

const handleValidationtError = (err, res) => {
  let errors = Object.values(err.errors).map(err => err.message);
  let fields = Object.values(err.errors).map(err => err.path);
  let code = 201;
  if (errors.length > 1) {
    const formattedErrors = errors.join(' ').split('');
    res.status(code).send({ message: formattedErrors, field: fields })
  } else {
    res.status(code).send({ message: errors, field: fields })
  }
}

module.exports = (err, req, res, next) => {
  try {
    if (err.name === 'ValidationError') return err = handleValidationtError(err, res);
    if (err.code && err.code === 11000) return err = handleDuplicateKeyError(err, res);
  } catch (error) {
    res.status(500).send('Ocurrio un error desconocido')
  }
}