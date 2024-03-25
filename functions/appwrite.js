import { databases } from "@/services/appwrite/appwrite";
import { useRouter } from "next/navigation";

export async function updateProduct(id,name,price,description,amount){

    await databases.updateDocument(
        process.env.NEXT_PUBLIC_DB_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID,
        id,
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

export async function deleteProduct(id){

    await databases.deleteDocument(
        process.env.NEXT_PUBLIC_DB_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID,
        id
    ).then((data)=>{console.log(data);return true})
    .catch((e)=>{console.log(e);return false})
}

export function logout(){
    const router = useRouter()
    localStorage.setItem('email','')
    localStorage.setItem('id','')
    router.push('/access/login')
}