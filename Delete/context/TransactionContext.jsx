import React, { useEffect, useState } from "react";
import {ethers} from 'ethers'
import { contractABI, contractAddress } from "../utils/constants";


// create context 
// get ethereum  object from wiondow
// fetch ethereum contract 
// context provider 

 

export const TransactionContext = React.createContext();
const {ethereum} = window;


// fetch ethereum contract 

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  console.log(transactionsContract)

  return transactionsContract;
};

  


export const TransactionContextProvider = ({children})=>{

    const [ connectedAccount , setConnectedAccount]= useState('')

    const checkWalletIsConnected = async () => {
        if (!ethereum)
          return alert("Please install MetaMask");
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        setConnectedAccount(accounts[0]);
        console.log(accounts);
      }


 
      const connectWallet = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
    
          const accounts = await ethereum.request({ method: "eth_requestAccounts", });
    
          setConnectedAccount(accounts[0]);
          window.location.reload();
        } catch (error) {
          console.log(error);
    
          throw new Error("No ethereum object");
        }
      };

    const disconnectWallet = async () => {
        try {
          if (!ethereum) {
            return alert('Please install MetaMask');
          }
      
          // Disconnect by clearing the selected address
          ethereum.selectedAddress = null;
          setConnectedAccount('');
      
          // You can also remove the accounts permission if needed
          // await ethereum.request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] });
          
        //   alert('Disconnected from MetaMask');
        } catch (error) {
          console.error('Error disconnecting from MetaMask:', error);
          alert('An error occurred while disconnecting from MetaMask. Please check your MetaMask extension and try again.');
        }
      }
      



      const sendTransaction  = async () =>{

        createEthereumContract();

      }






    useEffect( 
        ()=>{
            checkWalletIsConnected();
            
        },
        []
    )
    return(
        <TransactionContext.Provider value={{connectWallet,connectedAccount,disconnectWallet ,sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}