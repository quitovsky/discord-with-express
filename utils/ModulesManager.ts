import path from 'path';
import fs from 'fs'
import State from "./State";
import {IModule} from "./types";

class ModulesManager {
    async loadDirectory(
        directory: string
    ) {
        const modulesPath = path.join(State.rootDir, directory);
        const modulesFiles = fs
            .readdirSync(modulesPath)
            .filter((file) => file.endsWith(".ts") || file.endsWith(".js"))
        const modules = []
        for(let i = 0, l = modulesFiles.length; i<l; i++) {
            const start = Date.now()
            const filePath = path.join(modulesPath, modulesFiles[i]);
            const moduleObject = Object.values<any>(await import(filePath))[0];
            if(!("init" in moduleObject.prototype)) continue;
            const module: IModule = new moduleObject();
            await module.init();
            console.log(`[Modules] Loaded ${directory}/${modulesFiles[i]} (in ${Date.now() - start}ms)`)
            modules.push(module)
        }
        console.log(`[Modules] Loaded ${modules.length} modules from "${directory}" directory.`)
    }
}

export default new ModulesManager();