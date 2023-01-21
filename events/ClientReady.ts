import State from "../utils/State";

export class ClientReady {
    async init() {
        State.client?.once('ready', async ctx => {
            console.log(`[Discord] Logged in as ${ctx.user.tag}`)
        })
        return;
    }
}