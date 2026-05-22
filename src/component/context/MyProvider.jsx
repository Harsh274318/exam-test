import React, { useState } from "react";
import MyContext from "./MyContext";
const MyProvider = ({children})=>{
const [stutus,setStutus] = useState(false)

    return(
       
        <MyContext.Provider value={{stutus,setStutus}}>
        {children}
        </MyContext.Provider>
    )
}
export default MyProvider