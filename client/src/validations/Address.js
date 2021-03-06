export default function Address(input){
    let errors = {};
  
    if (!input.name) {
      errors.name = '• Name is required.';
    }
  
    if (!input.street) {
      errors.street = '• Street is required.';
    }
  
    if (!input.number) {
      errors.number = '• Number is required.';
    }

    if (!input.city) {
        errors.city = '• City is required.';
      }
  
    return errors;
  }
  
