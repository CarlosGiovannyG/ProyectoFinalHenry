const CreateProduct=(input) =>{
    let errors = {};
  
    if (!input.title) {
      errors.title = '• Title is required.';
    }
  
    if (!input.description) {
      errors.description = '• Description is required.';
    }
  
    if (!input.price) {
      errors.price = '• Price is required.';
    }

    if (input.category == 'Category...') {
      errors.category = '• Category is required.';
    }

    if (!input.image) {
    errors.image = '• Image is required.';
    }
  
    return errors;
  }
  
  export default CreateProduct;