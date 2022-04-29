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
    static applyValidationInNumber(number){
        if(number%5 === 0 && number%3 === 0){
            return "FIZZBUZZ";
        }if(number%5 === 0){
            return "BUZZ";
        }if(number%3 === 0){
            return "FIZZ";
        }else{
            return number;
        }
    }
}
module.exports = FizzBuzzService;