import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "ydelhuya",
    dataset: "production",
    apiVersion: "2023-12-01",
    useCdn: false,
};

const client = createClient(config);

export default client;
