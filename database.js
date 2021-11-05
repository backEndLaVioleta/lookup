import { MongoClient } from "mongodb";
import config from './config.js';


class MongoManager {
    constructor(config){

        this.url = config.urlDatabase;
        this. _connect(config.db);

    };

    async _connect(){

        try {
            
            this.client = new MongoClient(this.url, {useNewUrlParser: true});
            this.client.connect();
            this.db = this.client.db(db);

        } catch (error) {

            throw error;
            
        }
    };

    async _close(){
        this.client.close();
    }
}

export default new MongoManager(config);