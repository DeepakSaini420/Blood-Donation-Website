import { useState,createContext } from "react";
import { bloods } from "../utils/dummy";

export const BloodDonaterProvider = createContext({
    data:bloods,
    setData:()=>null,
    search: ()=>null
})

const searchFilter =  (searchValue)=>{
    if(isNaN(searchValue)){
        return bloods.filter(({state}) => state.toLowerCase().includes(searchValue.toLowerCase()))
    }else if(searchValue.length !== 0){
        return bloods.filter(({ quantity }) => quantity === Number(searchValue));
    }else{
        return bloods
    }
} 

export const BloodStateContext = ({ children })=>{

    const [data,setData] = useState(bloods);

    const search = (searchValue)=>{
        setData(searchFilter(searchValue))
        console.log(data);
    }

    const values = {
        data,
        search
    }

    return <BloodDonaterProvider.Provider value={values}>{children}</BloodDonaterProvider.Provider>
}