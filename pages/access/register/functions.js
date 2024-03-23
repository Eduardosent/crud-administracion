import { account } from "@/services/appwrite/appwrite";
import { ID } from 'appwrite'

    function createAccount(email, password) {
        const promise = account.create(ID.unique(), email, password)

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
}

    function createVerification() {
        const promise = account.createVerification('')

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
}

export { createAccount, createVerification }