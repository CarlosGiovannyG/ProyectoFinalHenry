const CreateProduct = (input) => {
  let errors = {};

  if (!input.name) {
    errors.name = '• Title is required.';
  }

  if (!input.description) {
    errors.description = '• Description is required.';
  }

  if (!input.price) {
    errors.price = '• Price is required.';
  }

  if (input.category === 'Category...') {
    errors.category = '• Category is required.';
  }

  return errors;
}

export default CreateProduct;