const reader=require("./../lib/utils/Reader");
const explorers=reader.readJSONFile("./app/explorers.json");


describe("Pruebas de unidad", function() {
    test("Read of explorers", function() {
      
        expect(explorers).not.toBeUndefined();
        
    });
});
