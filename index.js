const Reader=require("./lib/utils/Reader");
const ExplorerService=require("./lib/services/ExplorerService");
const FizzbuzzService=require("./lib/services/FizzbuzzService");
const explorers=Reader.readJSONFile("./app/explorers.json");
console.log(explorers);

console.log(ExplorerService.filterbyMission(explorers, "node"));

console.log(ExplorerService.getExplorerUsernameByMission(explorers));

console.log(ExplorerService.getAmountOfExplorerByMission(explorers, "node"));

const explorer1 = {name: "Explorer1", score: 1};

console.log(FizzbuzzService.applyValidationInExplorer(explorer1));

const explorer2 = {name: "Explorer2", score: 3};

console.log(FizzbuzzService.applyValidationInExplorer(explorer2));

const explorer3 = {name: "Explorer3", score: 5};

console.log(FizzbuzzService.applyValidationInExplorer(explorer3));

const explorer4 = {name: "Explorer4", score: 15};

console.log(FizzbuzzService.applyValidationInExplorer(explorer4));