const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");
const ExplorerService=require("./services/ExplorerService");

//usar el token de la api de telegram del archivo .env
const token = "API_HERE";


// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {     const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);

    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = ExplorerController.fizzbuzz(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;         bot.sendMessage(chatId, responseBot);
    } else {         bot.sendMessage(chatId, "Envía un número válido");
    }

});
//aqui revisara si el mensaje de la mision y devolvera los usuarios de la misma
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const Mission = msg.text;
    if(Mission === "node"){    
        const ByMission = ExplorerController.getExplorersByMission(Mission);
        console.log(ByMission);
        ByMission.map((students) => {
            bot.sendMessage(chatId, students.name);
            console.log(students);
        });

    }if(Mission === "java"){    
        const ByMission = ExplorerController.getExplorersByMission(Mission);
        console.log(ByMission);
        ByMission.map((students) => {
            bot.sendMessage(chatId, students.name);
            console.log(students);
        });

    }else{
        bot.sendMessage(chatId, "Envía un Mision válido");

    }
});