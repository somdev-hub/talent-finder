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
      if (!values[fieldName]) {
        errors[fieldName] = `${fieldLabel} is required`;
      } else if (
        fieldName === "email" &&
        !/\S+@\S+\.\S+/.test(values[fieldName])
      ) {
        errors[fieldName] = `${fieldLabel} is invalid`;
      } else if (fieldName === "phone" && !/^\d{10}$/.test(values[fieldName])) {
        errors[fieldName] = `${fieldLabel} is invalid`;
      } else if (
        (fieldName === "skills" || fieldName === "expertise") &&
        values[fieldName].length === 0
      ) {
        errors[fieldName] = `${fieldLabel} is required`;
      }
    }
    return errors;
  };

  return validateForm;
};

export default formValidator;
