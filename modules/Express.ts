import express from "express";
import {IModule} from "../utils/types";
import State from "../utils/State";
import ModulesManager from "../utils/ModulesManager";

export class ExpressModule implements IModule {
    async init() {
        const app = express();
        app.use(express.json());
        State.app = app;
        await ModulesManager.loadDirectory("routes")
        app.listen(3000)
        return;
    }
}