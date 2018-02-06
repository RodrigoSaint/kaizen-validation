import { equal, notEqual } from "assert";

import * as validation from './common-validation';
import * as constraint from './constraint';

describe('Common validations', () => 
{
    it("validate required", () => {
        equal(validation.isRequired("name"), undefined)
        equal(validation.isRequired(""), constraint.requiredError)
    })

    it('validate min length', () => {
        const validateMinLength = validation.minLength(3);
        equal(validateMinLength("more than five"), undefined)
        equal(validateMinLength(""), constraint.lengthError)
    })

    it('validate max length', () => {
        const validateMinLength = validation.maxLength(3);
        equal(validateMinLength(""), undefined)
        equal(validateMinLength("more than five"), constraint.lengthError)
    })

    it('validate contains at array', () => {
        const validateIfContainsAtArray = validation.containsAtArray(['name']);
        equal(validateIfContainsAtArray('name'), undefined)
        equal(validateIfContainsAtArray(''), constraint.invalidOptionError)
    })

    it('validate bigger than', () => {
        const isBiggerThan5 = validation.greatherThan(5);
        equal(isBiggerThan5(3), undefined)
        equal(isBiggerThan5(6), constraint.biggerThanError)
    })

    it('validate smaller than', () => {
        const isSmallerThan5 = validation.smallerThan(5);
        equal(isSmallerThan5(6), undefined)
        equal(isSmallerThan5(3), constraint.smallerThanError)
    })

})