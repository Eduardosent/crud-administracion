import { useState } from "react"

import { validateCreate,createProduct } from "./functions"

export default function CreateProduct(){

    const[name,setName] = useState('')
    const[price,setPrice] = useState(0)
    const[description,setDescription] = useState('')
    const[amount, setAmount] = useState(0)

    const[error,setError] = useState('')

    function handleCreate(){
        if(validateCreate(name,price)){
            setError('')
            createProduct(name,price,description,amount)
        }else{
            setError('el nombre debe ser mayor a 5 caracteres y el precio mayor a 0')
        }
    }

    return(
        <main>
            <h1>Crear Nuevo Producto</h1>
            <div>
                <label htmlFor="">Nombre:</label>
                <input type="text" name="" id="" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="">Precio:</label>
                <input type="number" name="" id="" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            </div>
            <button onClick={handleCreate}>Crear</button>
            {
                error!='' &&
                <p className="text-red">{error}</p>
            }
        </main>
    )
}