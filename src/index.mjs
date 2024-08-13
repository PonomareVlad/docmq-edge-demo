import {Queue} from "docmq";
import {MongoDriver} from "docmq/driver/mongo";

export const queue = new Queue(new MongoDriver(process.env.DATA_API_URL), "docmq");
