import { requiredError, lengthError, invalidOptionError, biggerThanError, smallerThanError } from "./constraint";

export const isRequired = property => !property? requiredError : undefined; 

export const minLength = length => 
    (property => property !== undefined && property.length < length? lengthError : undefined);

export const maxLength = length => 
    (property => property !== undefined && property.length > length? lengthError : undefined);

export const containsAtArray = collection => property => 
    (!collection.find(item => property == item) ? invalidOptionError : undefined)

export const greatherThan = value => 
    (property => property !== undefined && property > value? biggerThanError : undefined);

export const smallerThan = value => 
    (property => property !== undefined && property < value? smallerThanError : undefined);