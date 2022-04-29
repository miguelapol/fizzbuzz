const controller=require('./../lib/controllers/ExplorerController');

describe("Pruebas de unidad", function() {
    test("controllers explorers amount", function() {
           expect(controller.getAmountOfExplorerByMission('node')).toBe(10);
    });
});
