import { IoMdAdd } from "react-icons/io";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";

import Table from "@/components/Table";
import Modal from "@/components/Modal";
import FormCreate from "@/components/FormCreate";
import UpdateModal from "@/components/UpdateModal";
import { useEffect, useState } from "react";
import {confirmAccount, getProducts} from "./functions";

export default function Dashboard(){

    const[updateModal,setUpdateModal] = useState(false)
    const[products,setProducts] = useState([])
    const[results,setResult] = useState([])
    const[email, setEmail] = useState('')

    var data = {
        name : 'Licuadora',
        price : 0.5,
        description : 'descripcion',
        amount : 1
    }

    async function gettingProducts(){
        const products = await getProducts();
        setProducts(products)
        setResult(products)
    }

    function finder(search){
        if(search.length > 0){
            const res = products.filter((p)=>p.name.toLowerCase().includes(search.toLowerCase()))
            setResult(res)
        }else{
            setResult(products)
        }
    }

    function Account() {
        confirmAccount(email)
    }

    useEffect(()=>{
        gettingProducts()
    },[])

    return(
        <div className="relative">

            <UpdateModal show={updateModal} setShow={()=>{setUpdateModal(false)}} update={()=>{print('update')}} data={data}/>
            <div className="flex flex-row justify-between m-4 items-center">
                <div className="relative">
                    <HiMagnifyingGlassCircle className="absolute" size={40} color="blue" style={{top:"-5px",left:"-15px"}}/>
                <input className="border-2 rounded-lg px-5" type="search" name="" id="" onChange={(e)=>finder(e.target.value)}/>
                    <input onClick={Account} onChange={e => setEmail(e.target.value)} value={email} className="pl-5 pr-5 border-2 border-black"></input>
                </div>
            <a className="border-2 py-2 px-5 bg-green-400" href="/admin/dashboard/create_product">Crear</a>
            </div>
            <div class="relative overflow-x-auto m-4 rounded-md">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Imagen
                </th>
                <th scope="col" class="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" class="px-6 py-3">
                    Precio
                </th>
                <th scope="col" class="px-6 py-3">
                    Descripción
                </th>
                <th scope="col" class="px-6 py-3">
                    Acciones
                </th>
            </tr>
        </thead>
        <tbody>
            {
                products.length>0 &&
                results.map((product,i)=>(
                    <tr key={i} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Imagen
                    </th>
                    <td class="px-6 py-4">
                        {product.name}
                    </td>
                    <td class="px-6 py-4">
                        {product.price}
                    </td>
                    <td class="px-6 py-4">
                        {product.description}
                    </td>
                    <td class="px-6 py-4">
                        <button onClick={()=>setUpdateModal(true)}>Edit</button>
                    </td>
                </tr>
                ))
            }

        </tbody>
    </table>
</div>
        </div>
    )
}