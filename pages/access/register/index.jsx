import { useState } from "react";
import { createAccount, createVerification } from "@/pages/access/register/functions";

export default function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) =>  {
        e.preventDefault()

        if (email != '' && password != '') {
            createAccount(email, password)
        } else {
            Console.log('hay al menos un campo vacio')
        }
    }

    return (
        <section className="h-screen flex items-center justify-center">
            <div className="bg-white relative items-center w-3/5 px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl border-solid border-2 border-black">
                <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                    <div className="flex flex-col">
                        <div>
                            <h2 className="text-4xl text-black">Registro</h2>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4 space-y-6">
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-gray-600"> Email </label>
                                <input type="email" placeholder="correo@correo.com"
                                       className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                       onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-gray-600"> Contraseña </label>
                                <input type="password" placeholder="******"
                                       className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                       onChange={e => setPassword(e.target.value)}/>
                            </div>

                            <div className="col-span-full">
                                <button type="submit"
                                        className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"> Submit
                                    your request
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}