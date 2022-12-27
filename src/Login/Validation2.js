const Validation2 = (emailPost, passwordPost, invalid) => {
  let errors = {};

  if (!emailPost) {
    errors.emailPost = "Email is required.";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailPost)) {
    errors.emailPost = "Email is invalid.";
  }

  if (!passwordPost) {
    errors.passwordPost = "Password is required.";
  } else if (passwordPost.length < 5) {
    errors.passwordPost = "Password must be more than five character.";
  }

  if (invalid) {
    errors.invalidError = "Invalid email or password";
  } else if (!invalid) {
    errors.invalidError = "";
  }

  return errors;
};

export default Validation2;
