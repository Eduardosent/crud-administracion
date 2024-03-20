import { account } from "@/services/appwrite/appwrite";
import { createContext } from "react";

export const Account = createContext();

export default function AccountContext({children}){

    async function Login({email,password}){
        const promise = await account.createEmailPasswordSession(email,password);
        console.log(promise)
    }


    return(
        <Account.Provider value={{Login}}>
            {children}
        </Account.Provider>
    )
}