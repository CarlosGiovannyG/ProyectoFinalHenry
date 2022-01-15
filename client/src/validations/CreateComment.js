const createComment =(input)=> {
  let errors = {};

  if (!input.title) {
    errors.title = '• Title is required.';
  }

  if (!input.comment) {
    errors.comment = '• Comment is required.';
  }

  if (input.comment.length > 256) {
    errors.comment = '• Please, maximun of 260 characters.';
  }

  if (!input.email) {
    errors.email = '• Name is required.';
  }

  return errors;
}

export default createComment;
