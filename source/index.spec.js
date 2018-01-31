import { validate, isRequired, minLength } from "./index";
import { equal, notEqual } from "assert";
describe('Main', () => 
{
    it("Validates object", () =>
    {
        const validation = { name: [isRequired, minLength(3)] }
        notEqual(validate(validation, {}), undefined)
        equal(validate(validation, {name: "rodrigo"}), undefined)
    })
})