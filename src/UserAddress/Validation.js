const Validation = (values) => {
    let errors = {};
  
    if (!values.username) {
      errors.username = "Username is required.";
    }
  
    if (!values.phonenumber) {
      errors.phonenumber = "Phone number is required.";
    } else if (values.phonenumber.length < 11) {
      errors.phonenumber = "Phone number is invalid.";
    }
  
    if (!values.address) {
      errors.address = "Address is required.";
    }
  
    return errors;
  };
  
  export default Validation;
  