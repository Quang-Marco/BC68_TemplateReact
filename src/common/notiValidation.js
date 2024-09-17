export const notiValidation = {
  empty: "This field cannot be left blank",
  email: "Please enter a valid email",
  phone: "Please enter a valid Vietnamese phone number starting with 0 or +84",
  password:
    "The password must be 8-20 characters and must contain at least one lowercase, one uppercase, one special character, and one number",
  min: (minValue) => `Please enter at least ${minValue} characters`,
  max: (maxValue) => `Please enter no more than ${maxValue} characters`,
};
