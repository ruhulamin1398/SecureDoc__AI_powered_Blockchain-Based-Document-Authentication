import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress, encryptData } from "../utils/constrants";

interface Transaction {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message: string;
  keyword: string;
  amount: number;
}

interface FormData {
  name: string;
  doctype: string;
  comment: string;
  
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionContext = React.createContext<any>(null);

const { ethereum } = window as any;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
};

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({ children }) => {
  
  const [formData, setformData] = useState<FormData>({ addressTo: "", amount: "", keyword: "", message: "" });
  const [currentAccount, setCurrentAccount] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [transactionCount, setTransactionCount] = useState<number | null>(parseInt(localStorage.getItem("transactionCount") || '0'));
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  

  const handleChange = (e, name) => {
    if (e.target.type === 'file') {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        setformData({
          ...formData,
          [name]: event.target.result // Store the content of the file
        });
      };
      
      reader.readAsText(file); // Read the file as text
    } else {
      setformData({
        ...formData,
        [name]: e.target.value
      });
    }
  };
  



  const getOwner = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const owenerAddress = await transactionsContract.owner();
        console.log("        Owner                      ----------   ")
        console.log(owenerAddress)

        console.log("        Owner                      ----------   ")

     
      }
     } catch (error) {
        console.log(error);
      }

   
  };






  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        getOwner();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const owner = await transactionsContract.owner();
        console.log("owner              ", owner)

       
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
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



  useEffect(() => {
    checkIfWalletIsConnect();
    checkIfTransactionsExists();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        connectWallet,
        transactions,
        currentAccount,
        isLoading,
        handleChange,
        formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
