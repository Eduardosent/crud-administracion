export default function Logout({show,setShow}){

    return(
        <div style={{backgroundColor: 'rgba(0,0,255,0.3)',zIndex:2}} className={`absolute w-[100%] h-[100vh] bg-white place-items-center ${show ? 'grid' : 'hidden'}`}>
            <div className=' bg-white rounded-lg'>
                <p className="text-center text-md font-semibold p-4">Esta seguro que desea Cerrar Sesión ?</p>
                <div className="flex flex-row justify-center gap-10 p-4">
                    <button className="py-2 px-3 bg-red-500 text-white rounded-md" onClick={()=>setShow(false)}>Cancelar</button>
                    <button className="py-2 px-3 bg-green-500 text-white rounded-md">Cerrar Sesión</button>
                </div>
            </div>
        </div>
    )
}