class FizzBuzzService{
    static applyValidationInExplorer(explorers){
       if(explorers.score%5 === 0 && explorers.score%3 === 0){
            explorers.trick = "FIZZBUZZ";
            return explorers;
        }if(explorers.score%5 === 0){
            explorers.trick = "BUZZ";
            return explorers;
        }
        else{
            explorers.trick = explorers.score;
            return explorers;
        }

    }
}
module.exports = FizzBuzzService;