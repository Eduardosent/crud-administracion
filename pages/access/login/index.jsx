import { useContext, useState } from "react";
import { account } from "@/services/appwrite/appwrite";

import GridContainer from "@/components/GridContainer";
import AccountContext, { Account } from "@/context/appwrite/account";

export default function Login(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function Login(email,password){
        const promise = await account.createEmailPasswordSession(email,password);
        console.log(promise)
    }

    console.log(email)
    console.log(password)
    return(
        <main>
            <GridContainer>
                <AccountContext>
                <div className="flex flex-col gap-4 border-2 rounded-md w-[80%]">
                    <input className="mx-10 border-2 rounded-md" style={{color:'red'}} onChange={(e)=>setEmail(e.target.value)} type="email" name="" id="" value={email} placeholder="Email"/>
                    <input className="mx-10 border-2 rounded-md" style={{color:'red'}} onChange={(e)=>setPassword(e.target.value)} type="password" name="" id="" value={password} placeholder="Contraseña"/>
                    <button onClick={()=>Login(email,password)}>Log In </button>
                </div>
                </AccountContext>
            </GridContainer>
        </main>
    )
}