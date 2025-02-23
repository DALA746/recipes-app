export const checkValidData = (email, password) => {
  const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const isEmailValid = emailPattern.test(email);
  const isPasswordValid = passwordPattern.test(password);
  if (!isEmailValid) return 'Email ID is not valid';
  if (!isPasswordValid) return 'Password is not valid';

  return null;
};
