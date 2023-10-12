import React from "react";
import {ethers} from 'ethers'
import { contractABI, contractAddress } from "../utils/constants";


// create context 
// get ethereum  object from wiondow
// fetch ethereum contract 
// context provider 

 

export const TransactionContext = React.createContext();
const {ethereum} = window;


// fetch ethereum contract 


const getEthereumContract = () =>{
    const provider = new ethers.provider.Web3Provider(ethereum)
    const signer = provider.getSigner();
    // to fetch etherum contract need to 3 parameter
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer)
    
    console.log({
        provider,
        signer,
        transactionContract
    })
}


export const TransactionContextProvider = ({children})=>{
    return(
        <TransactionContext.Provider value={{ value: "Test"}}>
            {children}
        </TransactionContext.Provider>
    )
}