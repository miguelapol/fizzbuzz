const ExplorerService=require("./../services/ExplorerService");
const FizzbuzzService=require("./../services/FizzbuzzService");
const Reader=require("./../utils/Reader");
const explorers=Reader.readJSONFile(process.cwd()+"/app/explorers.json");
const token ='TOKEN_HERE';
const TelegramBot = require("node-telegram-bot-api");
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
    static FizzTelegram(){
        const bot = new TelegramBot(token, {polling: true});
        bot.onText(/\/echo (.+)/, (msg, match) => {
        const chatId = msg.chat.id;
        const resp = match[1];
        bot.sendMessage(chatId, resp);
        });
    
        bot.on("message", (msg) => {
        const chatId = msg.chat.id;
        const numberToApplyFb = parseInt(msg.text);
    
        if(!isNaN(numberToApplyFb)){
            const fizzbuzzTrick = ExplorerController.fizzbuzz(numberToApplyFb);
            const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
            bot.sendMessage(chatId, responseBot);
        } else {
            bot.sendMessage(chatId, "Envía un número válido");
        }
    
        });
       }
    static ListUser(){
        const bot = new TelegramBot(token, {polling: true});
        bot.onText(/\/echo (.+)/, (msg, match) => {
        const chatId = msg.chat.id;
        const resp = match[1];
        bot.sendMessage(chatId, resp);
        });
        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const Mission = msg.text;
            if(Mission === "node"){    
                const ByMission = ExplorerController.getExplorersByMission(Mission);
                ByMission.map((students) => {
                    bot.sendMessage(chatId, students.name);
                });
        
            }else if(Mission === "java"){    
                const ByMission = ExplorerController.getExplorersByMission(Mission);
                ByMission.map((students) => {
                    bot.sendMessage(chatId, students.name);
                });
        
            }else{
                bot.sendMessage(chatId, "Envía un Mision válido");
        
            }
        });
    
       }


}
module.exports = ExplorerController;