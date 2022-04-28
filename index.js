const Reader=require("./lib/utils/Reader");
const ExplorerService=require("./lib/services/ExplorerService");
const explorers=Reader.readJSONFile("./app/explorers.json");
console.log(ExplorerService.filterbyMission(explorers, "node"));
console.log(ExplorerService.getExplorerUsernameByMission(explorers));
console.log(ExplorerService.getAmountOfExplorerByMission(explorers, "node"));