import { TiDeleteOutline } from "react-icons/ti";

export default function UpdateModal({show,setShow,update,data}){

    return(
        <div style={{backgroundColor: 'rgba(0,0,255,0.3)',zIndex:2}} className={`absolute w-[100%] h-[100vh] bg-white place-items-center ${show ? 'grid' : 'hidden'}`}>
          <div className="w-[85%] h-[70%] bg-white rounded-lg flex flex-col items-center relative">
            <TiDeleteOutline onClick={setShow} style={{top:'3px',right:'3px'}} className='absolute cursor-pointer' size={40} color='red'></TiDeleteOutline>
            <input className="w-[80%] py-1 my-2" type="text" name="" id="" placeholder="nombre del producto" value={data.name}/>
            <input className="w-[80%] py-1 my-2" type="number" name="" id="" placeholder="precio del producto" value={data.price}/>
            <textarea name="" id="" cols="30" rows="10" value={data.description}></textarea>
            <input className="w-[80%] py-1 my-2" type="number" name="" id="" placeholder="cantidad de producto" value={data.amount}/>
            <button onClick={update}>Actualizar</button>
          </div>
        </div>
    )
}