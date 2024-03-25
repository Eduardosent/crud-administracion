import { TiDeleteOutline } from "react-icons/ti";
import {useEffect, useState} from 'react'
import { validateCreate } from "@/functions/validateCreateorUpdate";
import { updateProduct } from "@/functions/appwrite";

export default function UpdateModal({show,setShow,data}){

  const[name,setName] = useState(data.name)
  const[price,setPrice] = useState(data.price)
  const[description,setDescription] = useState(data.description)
  const[amount,setAmount] = useState(data.amount)

  const[error,setError] = useState('')

  function onUpdate(){
    console.log(data.$id,name,price,description,amount)
    if(validateCreate(name,price)){
      setError('')
      if(updateProduct(data.$id,name,price,description,amount)){
        alert('actualizado exitosamente')
        setShow(false)
      }else{
        setError('Ocurrió un error desconocido contacte a soporte')
      }
    }else{
      setError('El nombre debe tener mas de 5 caracteres y el precio mayor a $0')
    }
  }

  function onClose(){
    setError('')
    setShow(false)
  }

  useEffect(()=>{
    setName(data.name)
    setPrice(data.price)
    setDescription(data.description)
    setAmount(data.amount)
  },[data])

    return(
        <div style={{backgroundColor: 'rgba(0,0,255,0.3)',zIndex:2}} className={`absolute w-[100%] h-[100vh] bg-white place-items-center ${show ? 'grid' : 'hidden'}`}>
          <div className="w-[85%] sm:w-[70%] md:w-[50%] h-[90%] bg-white rounded-lg grid place-items-center relative">
            <TiDeleteOutline onClick={()=>{onClose()}} style={{top:'3px',right:'3px'}} className='absolute cursor-pointer' size={40} color='red'></TiDeleteOutline>
            <div>
              <h2 className="text-xl text-orange-400 text-center my-2">Actualizar Producto</h2>
            <div className="flex flex-col justify-start">
            <label className="p-0" htmlFor="Nombre">Nombre</label>
            <input className="w-[80%] border-2 p-1 rounded-md" type="text" name="" id="" placeholder="nombre del producto" value={name} onChange={(e)=>{setName(e.target.value);console.log(e.target.value)}}/>
            </div>
            <div  className="flex flex-col justify-start">
              <label htmlFor="">Precio</label>
              <input className="w-[80%] border-2 p-1 rounded-md" type="number" name="" id="" placeholder="precio del producto" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <textarea className="border-2 rounded-md mt-1" placeholder="descripcion" name="" id="" cols="30" rows="10" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            <div>
              <label htmlFor="">Cantidad</label>
              <input className="w-[80%] border-2 rounded-md p-1 " type="number" name="" id="" placeholder="cantidad de producto" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            {
                error!='' &&
                <p style={{color:'red'}}>{error}</p>
            }
            <button style={{bottom:'10px',right:'10px'}} className="absolute text-white bg-orange-400 py-1 px-3 rounded-md" onClick={onUpdate}>Actualizar</button>
            </div>
          </div>
        </div>
    )
}