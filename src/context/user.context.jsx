import { useState,createContext } from "react";


export const UserContext = createContext({
    user:undefined,
    setUser:()=>null
})

export const UserProvider = ({ children }) =>{
    const [user,setUser] = useState(undefined);

    const values = {
        user,
        setUser
    } 

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}