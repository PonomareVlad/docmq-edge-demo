import {Queue} from "docmq";
import {MongoDriver} from "docmq/driver/mongo";

export const queue = new Queue(new MongoDriver({url: process.env.DATA_API_URL}), "docmq");
