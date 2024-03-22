import { useEffect } from "react"

export default function Table({openModal,products}){

    return(
        

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                products.map((product,i)=>(
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
                        <button onClick={()=>openModal(true)}>Edit</button>
                    </td>
                </tr>
                ))
            }

        </tbody>
    </table>
</div>

    )
}