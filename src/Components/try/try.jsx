import { useEffect, useState } from "react";

export default function Try () {
    const [Counter , SetCounter] = useState(0)
    const [IsLogIn , SetIsLogIn] = useState(true)
    // const [Input , SetInput] = useState('')
    useEffect(()=>{
        if (IsLogIn){
            SetCounter(5)
        }
    },[IsLogIn])
    return(
        <div>
            <button onClick={()=>{
                SetIsLogIn(!IsLogIn)
            }}>Log Out</button>
            {/* <input type="text" onChange={(e)=>{
                SetInput(e.target.value)
            }} />
            <p>{Input}</p> */}
            <button onClick={()=>{
                SetCounter(Counter+1)
            }}>+</button>
            <p>{Counter}</p>
            <button onClick={()=>{
                SetCounter(Counter-1)
            }}>-</button>
        </div>
    )
}

