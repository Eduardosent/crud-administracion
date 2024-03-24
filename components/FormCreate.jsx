import { TiDeleteOutline } from "react-icons/ti";

export default function FormCreate(){
    return(
        <div className="w-[85%] h-[70%] bg-white rounded-lg flex flex-col items-center relative">
            <TiDeleteOutline style={{top:'3px',right:'3px'}} className='absolute cursor-pointer' size={40} color='red'></TiDeleteOutline>
            <input className="w-[80%] py-1 my-2" type="text" name="" id="" placeholder="nombre del producto"/>
        </div>
    )
}