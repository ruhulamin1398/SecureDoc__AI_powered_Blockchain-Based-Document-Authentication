import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constrants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = async () => {

 
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
  console.log("transactions contract ", transactionsContract)

  return transactionsContract;
};

export const TransactionsProvider = ({ children }) => { 

  const [hash, setHash] = useState(''); 
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(0);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);
  const [verificationStatus,SetverificationStatus] = useState(0)
  const [verificationResult,SetverificationResult] = useState(0)


  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

 
  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]); 
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

 

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };


  const  verifiyHash = async () =>{
console.log("connecting ............")

    const transactionsContract =   await createEthereumContract();
    console.log("--------------------------- ",currentAccount)
  
    const documents  =await transactionsContract.getUploaderDocuments(currentAccount);
    let ind= -1;

    console.log(documents)
     

      documents.map((document)=>{
        console.log(document)
        console.log("datahash ",document.pdfHash)
        console.log("hash ",hash )

        if(document.pdfHash == hash){
          
          ind =1 ; 
          SetverificationStatus(1);
          SetverificationResult((document));
           ;
        }
         
         
  })
       
    
  if(ind==-1){

    SetverificationStatus(0); 
    SetverificationResult("certificate no found ")

  }

    
  }

  
  

  useEffect(() => {
    checkIfWalletIsConnect(); 
  }, [transactionCount]);

 

 
  

  return (
    <TransactionContext.Provider
      value={{  
        currentAccount, 
        connectWallet,
        setHash,hash,
        verifiyHash,
        verificationStatus,SetverificationStatus,verificationResult,SetverificationResult,
        isLoading, setIsLoading

      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
