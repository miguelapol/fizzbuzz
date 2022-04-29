const Reader=require("./../lib/utils/Reader");
const explorers=Reader.readJSONFile("./app/explorers.json");


describe("Pruebas de unidad", function() {
    test("Read of explorers", function() {
        expect(explorers).not.toBeUndefined();
        
    });
});
