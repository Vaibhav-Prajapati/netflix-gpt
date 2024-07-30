export const checkValidData = (email, password) => {
  const isEmailValid =
    /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

  if (!isEmailValid && !isPasswordValid)
    return "Email and Password are not valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
