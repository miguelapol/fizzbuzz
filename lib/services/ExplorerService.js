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
}
module.exports = ExplorerService;