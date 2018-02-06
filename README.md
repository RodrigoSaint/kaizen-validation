# Kaizen validation ![Build passing](https://travis-ci.org/RodrigoSaint/kaizen-validation.svg?branch=master)

Kaizen validation is a javascript package designed to be simple and flexible. It relies on simple javascript functions so you can use it on frontend or backend and with any kind of framework.

To create a validation using it you only need to import it and invoke the validate method. This method receive two arguments, the validation constraint and the model to be validated. The constraint is a object that should have the attributes that you want to validate on the model and their value should be a array of functions that receive a value and return a string if has a error or undefined if is valid. If all validations pass undefined will be returned.

For example:

```javascript
const validationDefinition = {name: [ name => name == undefined? "The name is required": undefined ]};
const modelToValidate = {name: undefined};
const result = validate(validationDefinition, modelToValidate);
//the result will return a object with the attribute name containing a array with "The name is required" message
```

If you want to create a validation that can depends on another argument you may do it by [currying](https://en.wikipedia.org/wiki/Currying).

For example:

```javascript
export const maxLength = length => 
    (property => property !== undefined && property.length > length? lengthError : undefined);
```

This maxLength function depends on the length argument, when it is invoked it will return a new funcion that can be used on the validation. 

This package also have some built-in validations, but I encourage you to create your own if they not attend. At current time they are:

 - **isRequired** - It will validate if the property is undefined.
 - **minLength -** It will validate property's minimum length. It should receive a number as parameter.
 - **maxLength -** It will validate property's maximum length. It should receive a number as parameter.
 - **greatherThan** - It will validate if the property is bigger than its parameter. It should receive a number as parameter.
 - **smallerThan** - It will validate if the property is smaller than its parameter. It should receive a number as parameter.
 - **containsAtArray**- It will validate if a value is at a array. It should receive a array as parameter.

You may create PRs with new generic validations.
