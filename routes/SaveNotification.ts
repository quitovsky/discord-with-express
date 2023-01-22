import {IModule} from "../utils/types";
import State from "../utils/State";

export class SaveNotificationRoute implements IModule {
    async init() {
        State.app?.post('/saveNotification', async (req,res) => {
            const { text } = req.body;
            if(!text) return res.sendStatus(400);
            State.db?.exec(`INSERT INTO notifications VALUES ("${text}", "${Date.now()}")`)
            res.sendStatus(200);
        })
    }
}