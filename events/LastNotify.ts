import {IModule} from "../utils/types";
import State from "../utils/State";

export class LastNotify implements IModule {
    async init() {
        State.client?.on('messageCreate', async ctx => {
            if(ctx.content === "!last") {
                State.db?.get(`SELECT * FROM notifications ORDER BY date DESC LIMIT 1`, (err, row) => {
                    ctx.reply(`${row.text}`)
                    console.log(row.text)
                })
            }
        })
        return;
    }
}