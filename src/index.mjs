import {MemoryDriver, Queue} from "docmq";

export const queue = new Queue(new MemoryDriver("default"), "docmq");
