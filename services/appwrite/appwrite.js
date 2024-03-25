import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

    console.log(process.env.NEXT_PUBLIC_PROJECT_ID)
    console.log(process.env.NEXT_PUBLIC_COLLECTION_ID)
    console.log(process.env.NEXT_PUBLIC_DB_ID)

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client)

export {client, account, databases, storage }