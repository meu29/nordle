import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "0ian852vdy",
    apiKey: process.env.CMS_API_KEY
});