import {Queue} from "docmq";
import {MongoClient} from "mongodb";
import {MongoDriver} from "docmq/driver/mongo";

export const queue = new Queue(new MongoDriver(new MongoClient({url: process.env.DATA_API_URL})), "docmq");
