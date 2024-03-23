import { account } from "@/services/appwrite/appwrite";
import { ID } from 'appwrite'

export default function createAccount(email, password) {
    const promise = account.create(ID.unique(), email, password)

    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
}