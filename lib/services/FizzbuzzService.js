class FizzBuzzService{
    static applyValidationInExplorer(explorers){
        if(explorers.score%5 === 0){
            explorers.trick = "BUZZ";
            return explorers;
        }else if(explorers.score%5 === 0 && explorer.score%3 === 0){
            explorers.trick = "FIZZBUZZ";
            return explorers;
        }
        else{
            explorers.trick = explorers.score;
            return explorers;
        }

    }
}
module.exports = FizzBuzzService;