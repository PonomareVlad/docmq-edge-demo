import {Queue} from "docmq";
import {MongoClient} from "mongodb";
import {MongoDriver} from "docmq/driver/mongo";

export const queue = new Queue(new MongoDriver(new MongoClient({
    serviceName: process.env.DATA_SOURCE_NAME,
    key: process.env.DATA_API_KEY,
    url: process.env.DATA_API_URL,
})), "docmq");
