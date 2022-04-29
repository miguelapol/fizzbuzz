const ExplorerService=require("./../services/ExplorerService");
const FizzbuzzService=require("./../services/FizzbuzzService");
const Reader=require("./../utils/Reader");

class ExplorerController{
    static getExplorersByMission(mision){
        const explorers=Reader.readJSONFile("./../../app/explorers.json")
        return ExplorerService.filterbyMission(explorers, mision);
    }
    static getExplorerUsernameByMission(mision){
        const explorers=Reader.readJSONFile("./../../app/explorers.json")
        return ExplorerService.getExplorerUsernameByMission(explorers, mision);
    }
    static getAmountOfExplorerByMission(mision){
        const explorers=Reader.readJSONFile("./../../app/explorers.json")
        return ExplorerService.getAmountOfExplorerByMission(explorers, mision);
    }
}
module.exports = ExplorerController;