import { HiMagnifyingGlassCircle } from "react-icons/hi2";

import UpdateModal from "@/components/UpdateModal";
import { useEffect, useState } from "react";
import {confirmAccount, getProducts} from "./functions";
import DeleteModal from "@/components/DeleteModal";
import { protectPage } from "@/functions/protect";
import Image from "next/image";
import userImage from "@/public/Foto-ejemplo.jpg"

export default function Dashboard(){

    const[updateModal,setUpdateModal] = useState(false)
    const[deleteModal,setDeleteModal] = useState(false)
    const[data,setData] = useState({
        name : '',
        price : 0,
        description : '',
        amount : 0
    })
    const[products,setProducts] = useState([])
    const[results,setResult] = useState([])
    const[email, setEmail] = useState('')

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
        protectPage()
        gettingProducts()
    },[updateModal,deleteModal])

    return(
        <div className="relative">

            <UpdateModal show={updateModal} setShow={()=>{setUpdateModal(false)}} data={data}/>
            <DeleteModal show={deleteModal} setShow={setDeleteModal} data={data}/>
            <div className="flex flex-row justify-between p-4 items-center">

                <Image
                    src={userImage}
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
                <div className="relative">
                    <HiMagnifyingGlassCircle className="absolute" size={40} color="blue" style={{top:"-5px",left:"-15px"}}/>
                <input className="border-2 rounded-lg px-5" type="search" name="" id="" onChange={(e)=>finder(e.target.value)}/>
                </div>
            <a className="border-2 py-2 px-5 bg-green-400" href="/admin/dashboard/create_product">Crear</a>
            </div>
            <div className="relative overflow-x-auto m-4 rounded-md">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Imagen
                </th>
                <th scope="col" className="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    Precio
                </th>
                <th scope="col" className="px-6 py-3">
                    Descripción
                </th>
                <th scope="col" className="px-6 py-3">
                    Acciones
                </th>
            </tr>
        </thead>
        <tbody>
            {
                products.length>0 &&
                results.map((product,i)=>(
                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Imagen
                    </th>
                    <td className="px-6 py-4">
                        {product.name}
                    </td>
                    <td className="px-6 py-4">
                        {product.price}
                    </td>
                    <td className="px-6 py-4">
                        {product.description}
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                        <button className="text-blue-400" onClick={()=>{setUpdateModal(true);setData(product);}}>Edit</button>
                        <button className="text-red-400" onClick={()=>{setDeleteModal(true);setData(product);}}>Delete</button>
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