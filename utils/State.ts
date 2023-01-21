import { Client } from "discord.js";
import { Express } from 'express'

class State {
    rootDir = "";
    client?: Client = undefined;
    app: Express | undefined = undefined;
}

export default new State()