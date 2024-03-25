import { deleteProduct } from "@/functions/appwrite"

export default function DeleteModal({show,setShow,data}){

    function onDelete(){
        if(deleteProduct(data.$id)){
            alert('Eliminado exitosamente')
            setShow(false)
        }else{
            alert('Ocurrió un error al eliminar el elemento consulte a soporte')
            setShow(false)
        }
    }

    return(
        <div style={{backgroundColor: 'rgba(0,0,255,0.3)',zIndex:2}} className={`absolute w-[100%] h-[100vh] bg-white place-items-center ${show ? 'grid' : 'hidden'}`}>
            <div className=' bg-white rounded-lg'>
                <p className="text-center text-md font-semibold p-4">Esta seguro que desea eliminar a: {data.name} ?</p>
                <div className="flex flex-row justify-center gap-10 p-4">
                    <button className="py-2 px-3 bg-red-500 text-white rounded-md font-medium" onClick={()=>setShow(false)}>Cancelar</button>
                    <button onClick={onDelete} className="py-2 px-3 bg-green-500 text-white rounded-md font-medium">Confirmar</button>
                </div>
            </div>
        </div>
    )
}