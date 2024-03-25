import {account, databases} from "@/services/appwrite/appwrite";
import { Query, ID } from "appwrite";

export async function getProducts(){
    const promise = await databases.listDocuments(
        '65fb6b7219e917560ef9',
        '65fb6b84cd7071d2ba09',
        [
            Query.equal('userId', [localStorage.getItem('id')])
        ]
    )
    if(promise.documents){
        return promise.documents
    }else{
        return null
    }
}

export function confirmAccount(email) {
    const promise = account.createMagicURLSession(ID.unique(), email)

    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
}