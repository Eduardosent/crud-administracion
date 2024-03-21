export default function Modal({children,show}){
    return(
        <div style={{backgroundColor: 'rgba(0,0,255,0.3)',zIndex:2}} className={`absolute w-[100%] h-[100vh] bg-white place-items-center ${show ? 'grid' : 'hidden'}`}>{children}</div>
    )
}