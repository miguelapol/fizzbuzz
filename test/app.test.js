
const ExplorerService=require("./../lib/services/ExplorerService");



describe("Pruebas de unidad", function() {
    test("Filters of explorers", function() {
        const input=[{id:3,mission: "node"}];
        const out=[{id:3,mission: "node"}];
        const explorersInNode=ExplorerService.filterbyMission(input, "node");
        expect(explorersInNode).toEqual(out);
        
    });
    test("Amount by mission", function() {
        const input=[{id:3,mission: "node"}];
        expect(ExplorerService.getAmountOfExplorerByMission(input, "node")).toBe(1);        
    });
    test("User name", function() {
        const input=[{githubUsername: "apol"}];
        const out=["apol"];
        const explorersInNode=ExplorerService.getExplorerUsernameByMission(input);
        //hacer un expect para que me duelva un valor de un array
        expect(explorersInNode).toEqual(out);
        
    });
    //aqui filtramos por stacks el explorer service
    test("Filters by stacks", function() {
        const input=[{id:3,mission: "node",stacks:["node","react"]}];
        const out=[{id:3,mission: "node",stacks:["node","react"]}];
        const explorersInNode=ExplorerService.filterbyStack(input,"node");
        expect(explorersInNode).toEqual(out);
        
    })
    
});
