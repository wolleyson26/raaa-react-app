const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be more than 6 characters";
  }
  if (!values.password2) {
    errors.password2 = "Required";
  } else if (values.password !== values.password2) {
    errors.password2 = "Passwords do not match!";
  }
  if (!values.gender) {
    errors.gender = "Required";
  }
  if (!values.birthDate) {
    errors.birthDate = "Required";
  }
  if (!values.from) {
    errors.from = "Required";
  }
  if (!values.to) {
    errors.to = "Required";
  }
  if (!values.school) {
    errors.school = "Required";
  }
  if (!values.degree) {
    errors.degree = "Required";
  }
  if (!values.job) {
    errors.job = "Required";
  }
  if (!values.company) {
    errors.company = "Required";
  }
  if (!values.staddress) {
    errors.staddress = "Required";
  }
  if (!values.city) {
    errors.city = "Required";
  }
  if (!values.state) {
    errors.state = "Required";
  }
  if (!values.country) {
    errors.country = "Required";
  }
  if (!values.phone) {
    errors.phone = "Required";
  }
  return errors;
};

export default validate;
