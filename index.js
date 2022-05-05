const Reader=require("./lib/utils/Reader");
const ExplorerService=require("./lib/services/ExplorerService");
const FizzbuzzService=require("./lib/services/FizzbuzzService");
const explorers=Reader.readJSONFile("./app/explorers.json");
const ExplorerController = require("./lib/controllers/ExplorerController");
ExplorerController.ListUser();