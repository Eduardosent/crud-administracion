export function validateCreate(name,price){
    if(name.length>5 && price > 0){
        return true
    }else{
        return false
    }
}