export const checkValidData = (email, password, username) => {
  const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
  // Minimum eight characters, at least one letter and one number
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const usernamePattern = /^(?=.*[A-Za-z0-9]).{3,30}$/;

  const isEmailValid = emailPattern.test(email);
  const isPasswordValid = passwordPattern.test(password);
  const isUsernameValid = usernamePattern.test(username);
  if (!isUsernameValid) return 'Username is not valid';
  if (!isEmailValid) return 'Email ID is not valid';
  if (!isPasswordValid) return 'Password is not valid';

  return null;
};
