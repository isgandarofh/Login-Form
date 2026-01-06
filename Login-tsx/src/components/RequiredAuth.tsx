import Cookies from "js-cookie"
import { Outlet,Navigate } from "react-router-dom"

export default function RequiredAuth() {

    const token = Cookies.get('idToken')

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
