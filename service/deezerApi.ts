import axios from "axios";
import { useEffect, useState } from "react";

export function deezerApi(req:string='/user/5'){
    const [teste,setTeste]=useState()
    useEffect(() => {
    if (typeof window !== 'undefined') {
        
    const data=window.DZ.api('/user/5', (response:any)=>{
        
    });
        console.log(teste)
    }
    }, [])

return teste;

}