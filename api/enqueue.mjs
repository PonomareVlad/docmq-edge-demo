import {queue} from "../src/index.mjs";

export const config = {runtime: "edge"}

export default async () => Response.json(await queue.enqueue({payload: {time: Date.now()}}))
