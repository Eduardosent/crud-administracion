import { ID } from "appwrite";

import { databases, storage } from "@/services/appwrite/appwrite";

//valida los inputs , si retorna true continua la creacion del nuevo producto
export function validateCreate(name,price){
    if(name.length>5 && price > 0){
        return true
    }else{
        return false
    }
}

export async function createProduct(name,price,description,amount){

    await databases.createDocument(
        process.env.NEXT_PUBLIC_DB_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID,
        ID.unique(),
        {
            userId : localStorage.getItem('id'),
            name: name,
            price: price,
            description : description,
            amount : amount,
            sold : 0
        }
    ).then((data)=>{console.log(data);return true})
    .catch((e)=>{console.log(e);return false})
}
//crear nueva imagen para un producto
export function createImage(file){
    storage.createFile(
        '65fcb5107e85fde0e5e3',
        ID.unique(),
        file
    )
    .then((data)=>{console.log(data)})
    .catch((e)=>{console.log(e)})
}