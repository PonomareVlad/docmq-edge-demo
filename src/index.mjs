import {Queue} from "docmq";
import {MongoDriver} from "docmq/driver/mongo";

export const queue = new Queue(new MongoDriver(process.env.MONGODB_URI), "docmq");
