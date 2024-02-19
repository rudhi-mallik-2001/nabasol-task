import { createContext,useContext } from "react";

export const GetDetails =createContext({
    currentPage:1,
    nextPage:()=>{},
    prevPage:()=>{},
    addDetails:()=>{},
    updateDetails:()=>{},
    details:{},
})

export const DetailsProvider=GetDetails.Provider

export default function useDetails(){
    return useContext(GetDetails)
}