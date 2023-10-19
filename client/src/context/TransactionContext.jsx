import React, { useEffect, useState } from "react";
import { BigNumber, ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);

  const provider = new ethers.providers.Web3Provider(ethereum);

  const prepareBytes32Hash = async (inputData) => {
    const data = ethers.utils.toUtf8Bytes(inputData); // Convert your input data to bytes
    console.log("data ",data)
    const hash = ethers.utils.keccak256(data); // Compute the keccak256 hash
    console.log("hash ",hash)
    return hash;
  };
  




  

const contractInteraction = async () => {
  const  walletContraact = createEthereumContract(); 
  
  let number = await walletContraact.num();
  console.log('number : ', ethers.utils.formatEther(number) );

let num = ethers.utils.parseEther('8888')
console.log('num : : ',num)
await walletContraact.satValue( num);

  number = await walletContraact.num();
  console.log('number : ', ethers.utils.formatEther(number) );


}


const queryBlockchain = async ()=>{
  const  walletContract = createEthereumContract(); 
  // const  transactionAllTransaction = await walletContract.getAllTransactions();
  // const  transactionCount = await walletContract.getTransactionCount();
  // console.log("Total Transactions : ", ethers.utils.formatEther(transactionCount))
  const balance= await provider.getBalance("0x776Ce6367999C182b5e1D3660c9561dAC4da68b6");
  console.log(balance)
  console.log('current balance is ', ethers.utils.formatEther(balance))
 
}

 

const uploadFile = async(file)=>{
  const  walletContract = createEthereumContract();  
  const fileHash = prepareBytes32Hash(file);

  setIsLoading(true)
  queryBlockchain()
  await walletContract.registerFileHash(fileHash);
  setIsLoading(false)
    queryBlockchain()
  // getAllTransactions();

}

const verifyFile= async (file)=>{
  const  walletContract = createEthereumContract(); 
  const fileHash = prepareBytes32Hash(file);


  const status= await walletContract.verifyFileHash(fileHash)
  status?console.log( fileHash, " file exist "): console.log(fileHash, ' Doesnt Exist ' );
  
}


const getAllTransactions = async()=>{
  const  walletContract = createEthereumContract();  
  const transactionList= await walletContract.getAllFileHashes();
  console.log(  transactionList)
  setTransactions(transactionList)
   return transactionList;

}


 

  useEffect(() => {
 
  }, [ ]);

  return (
    <TransactionContext.Provider
      value={{
        isLoading,
        transactions,
        uploadFile,
        getAllTransactions,
        verifyFile,
        queryBlockchain
 
    
     
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
