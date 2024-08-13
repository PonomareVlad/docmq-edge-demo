import {queue} from "../src/index.mjs";

export const config = {runtime: "edge"}

export default async () => {
    await queue.enqueue({payload: {time: Date.now()}});
    return Response.json({time: Date.now()})
}
