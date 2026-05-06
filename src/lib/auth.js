// import dns from "node:dns";
// MdDns.setServers(['8.8.8.8', '8.8.4.4']);

import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.BETTER_AUTH_CLUSTER);
const db = client.db("dragon-news");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
