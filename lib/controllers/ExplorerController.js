const ExplorerService=require("./../services/ExplorerService");
const FizzbuzzService=require("./../services/FizzbuzzService");
const Reader=require("./../utils/Reader");
const explorers=Reader.readJSONFile(process.cwd()+"/test/data/explorers.json");
class ExplorerController{
    static getExplorersByMission(mision){
        return ExplorerService.filterbyMission(explorers, mision);
    }
    static getExplorerUsernameByMission(mision){
        return ExplorerService.getExplorerUsernameByMission(explorers, mision);
    }
    static getAmountOfExplorerByMission(mision){
        return ExplorerService.getAmountOfExplorerByMission(explorers, mision);
    }
}
module.exports = ExplorerController;