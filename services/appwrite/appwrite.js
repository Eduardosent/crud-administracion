import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65fb1b72d8f5ddc566e6');

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client)

export {client, account, databases, storage }