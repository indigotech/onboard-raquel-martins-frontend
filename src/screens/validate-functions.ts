export const validateEmail = (email: string) => {
  const regexEmailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (!regexEmailValidation.test(email) || email.length <= 0) {
    return false;
  } else {
    return true;
  }
};

export const validatePassword = (password: string) => {
  const regexPasswordValidation = /^([a-zA-Z0-9]+)$/;

  if (password.length < 7 || password.length <= 0 || !regexPasswordValidation.test(password)) {
    return false;
  } else {
    return true;
  }
};
