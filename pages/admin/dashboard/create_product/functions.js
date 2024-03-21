import { ID } from "appwrite";

import { databases } from "@/services/appwrite/appwrite";

export function validateCreate(name,price){
    if(name.length>5 && price > 0){
        return true
    }else{
        return false
    }
}

export function createProduct(name,price,description,amount){

    var obj = 
    {
        name: name,
        price: price,
        description : description,
        amount : amount,
        sold : 0
    }
    console.log(obj)
    databases.createDocument(
        '65fb6b7219e917560ef9',
        '65fb6b84cd7071d2ba09',
        ID.unique(),
        {
            name: name,
            price: price,
            description : description,
            amount : amount,
            sold : 0
        }
    ).then(()=>{return true})
    .catch((e)=>{console.log(e);return false})
}