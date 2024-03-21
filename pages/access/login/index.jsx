import { useContext, useState } from "react";
import { account } from "@/services/appwrite/appwrite";

import GridContainer from "@/components/GridContainer";
import AccountContext, { Account } from "@/context/appwrite/account";

export default function Login(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState(false)

    async function Login(email,password){
        if(email!=''&& password!=''){
            await account.createEmailPasswordSession(email,password)
            .then(data=>console.log(data))
            .catch(e=>console.log(e))
        }
    }
    return(
        <main>
            <GridContainer>
                <div className="flex flex-col gap-4 border-2 rounded-md w-[80%] pt-4">
                    <h1 className="text-center text-xl">Log In</h1>
                    <input className="mx-10 border-2 rounded-md py-2" style={{color:'red'}} onChange={(e)=>setEmail(e.target.value)} type="email" name="" id="" value={email} placeholder="Email"/>
                    <input className="mx-10 border-2 rounded-md py-2" style={{color:'red'}} onChange={(e)=>setPassword(e.target.value)} type="password" name="" id="" value={password} placeholder="Contraseña"/>
                    <button className="p-2 bg-green-400 text-white font-semibold" onClick={()=>Login(email,password)}>Log In </button>
                </div>
            </GridContainer>
        </main>
    )
}