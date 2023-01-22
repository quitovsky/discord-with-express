import {IModule} from "../utils/types";
import {Database, verbose} from "sqlite3";
import State from "../utils/State";

const sqlite3 = verbose();

export class DatabaseModule implements IModule {

    db?: Database = undefined;

    async init() {
        this.db = new sqlite3.Database('index.db')
        this.db.on('trace', sql => console.log(`[SQLite] ${sql}`))
        this.db.exec('CREATE TABLE IF NOT EXISTS "notifications" (' +
            '"text" TEXT, ' +
            '"date" TEXT' +
            ')')
        this.db.get('SELECT COUNT(text) AS count FROM notifications', (err, row) => console.log(`[SQLite] Found ${row.count} rows in 'notifications' table`))

        State.db = this.db;
        return;
    }
}