import { Client } from "discord.js";
import { Express } from 'express'
import { Database } from "sqlite3";

class State {
    rootDir = "";
    client?: Client = undefined;
    app?: Express = undefined;
    db?: Database = undefined;
}

export default new State()