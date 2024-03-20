export default function GridContainer({children}){
    return( 
    <div className="h-[100vh] w-[100%] grid place-items-center">
        {children}
    </div>
    );
}