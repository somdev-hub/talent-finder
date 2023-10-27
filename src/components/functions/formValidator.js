/**
 * formValidator.js
 * This function is used to validate the form fields. It takes rules as an argument which is an object of field name and field label. It returns a function which takes values as an argument and returns an object of errors. If there are no errors, it returns an empty object.
 * @param {object} rules - object of field name and field label
 * @returns {function} validateForm - function to validate form fields
 */

const formValidator = ({ rules }) => {
  const validateForm = (values) => {
    const errors = {};
    for (const [fieldName, fieldLabel] of Object.entries(rules)) {
      switch (fieldName) {
        case "email":
          if (!values[fieldName]) {
            errors[fieldName] = `${fieldLabel} is required`;
          } else if (!/\S+@\S+\.\S+/.test(values[fieldName])) {
            errors[fieldName] = `${fieldLabel} is invalid`;
          }
          break;
        case "phone":
          if (!values[fieldName]) {
            errors[fieldName] = `${fieldLabel} is required`;
          } else if (!/^\d{10}$/.test(values[fieldName])) {
            errors[fieldName] = `${fieldLabel} is invalid`;
          }
          break;
        case "skills":
        case "expertise":
          if (values[fieldName].length === 0) {
            errors[fieldName] = `${fieldLabel} is required`;
          }
          break;
        case "fullName":
          if (!values[fieldName]) {
            errors[fieldName] = `${fieldLabel} is required`;
          } else if (!/^[a-zA-Z ]+$/.test(values[fieldName])) {
            errors[fieldName] = `${fieldLabel} is invalid`;
          }
          break;
        default:
          if (!values[fieldName]) {
            errors[fieldName] = `${fieldLabel} is required`;
          }
          break;
      }
    }
    return errors;
  };
  return validateForm;
};

export default formValidator;
