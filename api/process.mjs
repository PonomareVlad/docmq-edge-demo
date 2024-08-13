import {queue} from "../src/index.mjs";

export const config = {runtime: "edge"}

const wait = t => new Promise((resolve, reject) => setTimeout(resolve, t))

export default async () => {
    const results = []
    queue.process(async (job, api) => {
        results.push(job);
        await api.ack();
    })
    await wait(20000);
    return Response.json(results)
}
