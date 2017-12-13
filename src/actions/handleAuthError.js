const handleAuthError = (e) => {
  const errMessage = `An account already exists with the same email address: ${e.email}, please choose another service provider`;
  console.log(errMessage);
};

export default handleAuthError;
