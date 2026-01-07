import { Outlet,Navigate } from "react-router-dom"
import { useSelectorCustom } from "../store/store"

export default function RequiredAuth() {

    const {token} = useSelectorCustom((state)=>state.auth)

    if(token){
        return <Outlet/>
    }else{
        return <Navigate to={"/login"}/>
    }

  return (
    <>
        
    </>    
)
}
