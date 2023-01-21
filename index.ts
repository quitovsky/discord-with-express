import "dotenv/config"
import State from "./utils/State";
import ModulesManager from "./utils/ModulesManager";

async function start() {
    State.rootDir = __dirname;
    await ModulesManager.loadDirectory("modules")
}

start().catch(console.log)