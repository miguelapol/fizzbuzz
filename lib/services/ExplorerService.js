class ExplorerService{
    static filterbyMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorerByMission;
    }
    static getAmountOfExplorerByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorerByMission.length;
    }
    static getExplorerUsernameByMission(explorers){
        const explorerByMission =explorers.map((explorer) => explorer.githubUsername);
        return explorerByMission;
    }
    //un metodo que filtre por stacks y regrese los usuarios que tengan ese stack
    static filterbyStack(explorers, search){
        const explorerByStack = explorers.filter((explorer) => explorer.stacks.includes(search));
        return explorerByStack;
    }
    
}
module.exports = ExplorerService;
