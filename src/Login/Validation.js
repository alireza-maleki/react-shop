const Validation = (
  namePost,
  emailPost,
  passwordPost,
  repeatPasswordPost,
  exist,
  invalid
) => {
  // const namePost = useSelector((state) => state.namePost);
  // const emailPost = useSelector((state) => state.emailPost);
  // const passwordPost = useSelector((state) => state.passwordPost);
  // const repeatPasswordPost = useSelector((state) => state.repeatPasswordPost);

  let errors = {};

  if (!namePost) {
    errors.namePost = "Name is required.";
  }

  if (!emailPost) {
    errors.emailPost = "Email is required.";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailPost)) {
    errors.emailPost = "Email is invalid.";
  }

  if (exist) {
    errors.existError = "User Already Exist!";
  } else if (!exist) {
    errors.existError = "";
  }

  if (!passwordPost) {
    errors.passwordPost = "Password is required.";
  } else if (passwordPost.length < 5) {
    errors.passwordPost = "Password must be more than five character.";
  }

  if (!repeatPasswordPost) {
    errors.repeatPasswordPost = "Confirmpassword is required.";
  } else if (repeatPasswordPost.length < 5) {
    errors.repeatPasswordPost =
      "Confirmpassword must be more than five character.";
  }

  if (repeatPasswordPost !== passwordPost) {
    errors.repeatPasswordPost =
      "Confirmpassword and passwordPost must be equal.";
  }

  return errors;
};

export default Validation;
