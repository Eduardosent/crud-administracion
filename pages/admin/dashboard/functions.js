import { databases } from "@/services/appwrite/appwrite";
import { Query } from "appwrite";

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