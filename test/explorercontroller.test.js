const controller=require("./../lib/controllers/ExplorerController");

describe("Pruebas de unidad", function() {
    // test("controllers explorers amount", function() {
    //     expect(controller.getAmountOfExplorerByMission("node")).toBe(1);
    // });
    // test("controllers explorers filter mission", function() {
    //     const out=[{githubUsername:"apol",score:1,mission:"node"}];
    //     expect(controller.getExplorersByMission("node")).toEqual(out);
    // });
    // test("controllers explorers Usernameby Mission", function() {
    //     const out=["apol"];
    //     expect(controller.getExplorerUsernameByMission("node")).toEqual(out);
    // });
    test("controllers fizzbuzz", function() {
        const out="FIZZ";
        expect(controller.fizzbuzz(3)).toEqual(out);
    });
});
