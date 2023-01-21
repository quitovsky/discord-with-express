import {IModule} from "../utils/types";
import State from "../utils/State";

export class NotifyRoute implements IModule {
    async init() {
        State.app?.post('/notify', async(req, res) => {
            const { id, title, text } = req.body
            if(!(id && title && text)) return res.sendStatus(400)
            State.client?.users.send(id.toString(), `
            **${title}**\n${text}
            `)
            res.sendStatus(200);
        })
    }
}