import { useRouter } from "next/navigation";

const router = useRouter;

export function protectPage(){
    if(!localStorage.getItem('id').length>0){
        router().push('/access/login')
    }
}