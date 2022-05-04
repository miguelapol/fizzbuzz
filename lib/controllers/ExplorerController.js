const ExplorerService=require("./../services/ExplorerService");
const FizzbuzzService=require("./../services/FizzbuzzService");
const Reader=require("./../utils/Reader");
const explorers=Reader.readJSONFile(process.cwd()+"/app/explorers.json");
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
    static fizzbuzz(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }
    static Stacks(search){
        return ExplorerService.filterbyStack(explorers, search);
    }
}
module.exports = ExplorerController;