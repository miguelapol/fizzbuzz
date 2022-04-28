const fizzbuzz = require('./../lib/services/FizzbuzzService');
describe("Pruebas de unidad", function() {
    test("Fizzbuzz of explorers", function() {
        const input=[{id:3,score: 15}];
        const out=[{id:3, score: 15, trick: "FIZZ"}];
        expect(fizzbuzz.applyValidationInExplorer(input)).toEqual(out);
        
    });
});
