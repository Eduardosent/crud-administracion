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

export function createProduct(name,price,description,amount){

    databases.createDocument(
        '65fb6b7219e917560ef9',
        '65fb6b84cd7071d2ba09',
        ID.unique(),
        {
            userId : localStorage.getItem('id'),
            name: name,
            price: price,
            description : description,
            amount : amount,
            sold : 0
        }
    ).then(()=>{return true})
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