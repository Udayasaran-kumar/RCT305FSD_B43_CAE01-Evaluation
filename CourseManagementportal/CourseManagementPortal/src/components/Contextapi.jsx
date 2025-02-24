import { createContext, useContext, useState } from "react";

export const Contextapi=createContext();

export const ApiProvider=({children})=>{
    const [isInsructor,setInsructor]=useState(false);

return(
    <Contextapi.Provider value={{isInsructor,setInsructor}}>
    {children}
    </Contextapi.Provider>

);
}
export const UseAppContext=()=>{
    return useContext(ApiProvider);
    };