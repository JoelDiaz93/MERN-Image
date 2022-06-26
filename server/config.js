import { config } from "dotenv";
config();

export const MONGODB_URI = process.env.MONGO_URI || "mongodb://localhost/testdb";
export const PORT = process.env.PORT || 4000;
