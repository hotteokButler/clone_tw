export const checkEmail = (str: string): boolean => {
  const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!reg_email.test(str) && str.length > 1) {
    return false;
  } else {
    return true;
  }
};

export const checkPassword = (str: string): boolean => {
  const reg_password = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,12}$/;
  if (!reg_password.test(str) && str.length > 1) {
    return false;
  } else {
    return true;
  }
};
