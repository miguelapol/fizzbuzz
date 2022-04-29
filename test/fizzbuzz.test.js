const fizzbuzz = require("./../lib/services/FizzbuzzService");
describe("Pruebas de unidad", function() {
    test("Fizzbuzz of explorers", function() {
        const input={name:"apol",score: 1};
        const out={name:"apol",score:1,trick:1};
        expect(fizzbuzz.applyValidationInExplorer(input)).toEqual(out);
        
    });
    test("Fizzbuzz number", function() {
        const out="FIZZ";
        expect(fizzbuzz.applyValidationInNumber(3)).toEqual(out);
        
    });
});
