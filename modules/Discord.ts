import { Client, GatewayIntentBits } from "discord.js";
import {IModule} from "../utils/types";
import ModulesManager from "../utils/ModulesManager";
import State from "../utils/State";

export class DiscordModule implements IModule {
    async init() {
        const client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.MessageContent
            ]
        })
        State.client = client;
        await ModulesManager.loadDirectory("events");
        await client.login(process.env.DISCORD_TOKEN);
    }
}