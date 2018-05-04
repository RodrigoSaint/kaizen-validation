import * as Constraint from "./constraint";
import * as CommonValidation from "./common-validation";

export function validate(validation, model) {
  const propertyErrorCollection = Object.keys(validation)
    .map(property => validateProperty(validation, property, model))
    .filter(property => property[Object.keys(property)[0]].length);
  return propertyErrorCollection.length
    ? Object.assign(...propertyErrorCollection)
    : undefined;
}

function validateProperty(validation, property, model) {
  const propertyValidationCollection = validation[property];
  const value = model[property];
  const validationResult = new Object();
  validationResult[property] = propertyValidationCollection
    .map(propertyValidation => propertyValidation(value))
    .filter(error => error != undefined);
  return validationResult;
}

export * from "./constraint";
export * from "./common-validation";
