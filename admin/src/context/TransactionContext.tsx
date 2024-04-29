import React, {ChangeEvent, createContext, useEffect, useState, ReactNode } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constrants";
import { sha256 } from 'js-sha256'; 
import { json } from "react-router-dom";

export interface TransactionContextType {
  transactionCount: number;
  connectWallet: () => void;

  sendTransaction: () => void;
  transactions: any[]; // Adjust this according to the type of transactions
  currentAccount: string;
  isLoading: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>, name: string) => void;

  formData: { [key: string]: any };
 


  

  AddNewAuthority: () => void;
  GetAuthorityMemberList: () => void;
  getAuthorityDetails: () => void;

  AddNewInstitutionAdmin: () => void;
  GetInstitutionAdminList: () => void;
  UploadDocument: () => void;
  GetAllDoceuments : () =>void;

  
}

 



export const TransactionContext = createContext<TransactionContextType>({
  transactionCount: 0,
  connectWallet: () => { },
  sendTransaction: () => { },

  handleChange: (e, name) => {},
  formData: {},
  
  transactions: [],
  currentAccount: "",
  isLoading: false, 


  AddNewAuthority: () => { },
  GetAuthorityMemberList: () => { },
  getAuthorityDetails: () => { },
  AddNewInstitutionAdmin: () => { },
  GetInstitutionAdminList: () => { },
  UploadDocument : () =>{},
  GetAllDoceuments : () =>{},


});

const { ethereum } = window as any;

const createEthereumContract = async () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log(transactionsContract);

  return transactionsContract;
};

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(1);


  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const [transactions, setTransactions] = useState<any[]>([]); 

  

  const handleChange = (e, name) => {
    console.log("---------------------------" , name)
    if (e.target.type === 'file') {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        setFormData({
          ...formData,
          [name]: event.target.result // Store the content of the file
        });
      };
      
      reader.readAsText(file); // Read the file as text
    } else {
      setFormData({
        ...formData,
        [name]: e.target.value
      });
    }

    console.log(formData)
  };
  






    //////////////////////////////////////////////////////
    // *! add Authority member ------------------------ //
    //////////////////////////////////////////////////////

  const AddNewAuthority = async () => {

    const transactionsContract =   await createEthereumContract();

    const  id = "0x28F1170dE3752Bf8C091386801D4d1c3961006AC";
    const name = "Ruhul Account 1";
    const description = " this is for testing only"; 
    await transactionsContract.addAuthorityMember(id, name, description);

    const authorityMember = await transactionsContract.authorityMembers(id);

    console.log("-------------------------------------------")
    console.log(authorityMember)
    console.log("####################################################")

  }


    ////////////////////////////////////
  // *! Get Authority member details  //
  ////////////////////////////////////
  const getAuthorityDetails = async () => { 
    const transactionsContract =   await createEthereumContract();

   const  id = "0x27aE72820F05f8B823530d66Bb4FC14b37b6E028";
    const authorityMember = await transactionsContract.authorityMembers(id);
    console.log("-------------------------------------------")
    console.log(authorityMember)
    console.log("####################################################")

  }

  
       //////////////////////////////////
    // *! Get authority member list //
    //////////////////////////////////

  const GetAuthorityMemberList = async () => { 

    const transactionsContract =   await createEthereumContract();

    const authorityMemberList = await transactionsContract.getAuthorityMemberList(); 

    console.log("-------------------------------------------")
    console.log(authorityMemberList)
    console.log("####################################################")

  }






    //////////////////////////////////
   
    // *! add Institutions admin//
    //////////////////////////////////

    const AddNewInstitutionAdmin = async () => { 

      console.log("------- Adding Institutions admin -----------------")
  
      const transactionsContract =   await createEthereumContract();

      const id = "0x28F1170dE3752Bf8C091386801D4d1c3961006AC";
      const name = "Shahjalal University of Science and Technology";
      const description = " added for testing only";
      const institutions = await transactionsContract.addInstitutionAdmin(id, name, description);
    
        console.log(institutions)
        console.log("####################################################")
    
      }
  






    //////////////////////////////////
   
    // *! Get  Institutions list //
    //////////////////////////////////

    const GetInstitutionAdminList = async () => { 
    
    const transactionsContract =   await createEthereumContract();
  
    const institutions  =await transactionsContract.getInstitutionAdminList();
  
      console.log("-------------------------------------------")
      console.log(institutions)
      console.log("####################################################")
  
    }

    



      //////////////////////////////////////////////////////
    // *! upload new  Document  ------------------------ //

    //////////////////////////////////////////////////////


    const UploadDocument = async () => { 

    const transactionsContract =   await createEthereumContract();

    const {id, name, comment, doctype, djson, dpdf } = formData;


    const pdfHash =  sha256(dpdf)
    const dataHash =  sha256(sha256(JSON.stringify(djson)))
      
    const encryptedData = "S9WVhp2Ww2paZYYm3YlCPxYwd+cYqrFE91brrCY6BLU5ukLxDgZ8fHShS0vtce0oOZbIGqXfwV6u5O6+SLhpuQAHCL1UXnJi4iAhF4TURTPRh6kOzjt0GdQ66oMUowT/qo+x3mcYFIvkR8cRbn8vFnXhe+lNsNM6PWkNa2SvEp8=" 
    


   const document=  await transactionsContract.uploadDocument(pdfHash,dataHash,encryptedData,doctype);
 
     
     
        console.log("-------------------------------------------")
        console.log(document)
        console.log("####################################################")
        alert("Certificate Uploaded successfully !!!! ")
    
      }


    //////////////////////////////////
   
    // *! Get  Institutions list //
    //////////////////////////////////

    const GetAllDoceuments = async () => { 
    
      const transactionsContract =   await createEthereumContract();
      console.log("--------------------------- ",currentAccount)
    
      const documents  =await transactionsContract.getUploaderDocuments(currentAccount);
    
        console.log("-------------------------------------------")
        console.log(JSON.stringify(documents))
        console.log("####################################################")
    
      }
  
    
      


   

    








  const sendTransaction = async () => {

    console.log("  ===============================   send transaction  11 ==============================")
    const transactionsContract = await createEthereumContract();
    let id;
    let data;

    //////////////////////////////////////////////////////////
    // *! This codes for instraction only. dont uncomment this //
    //////////////////////////////////////////////////////////


  

 





    ////////////////////////////////////
    // *!change authority member status //getAuthorityDetails
    ////////////////////////////////////

    //   id = "0x27aE72820F05f8B823530d66Bb4FC14b37b6E028";
    // const status = false ;
    // await transactionsContract.changeAuthorityMemberStatus(id, status);





    ////////////////////////////////////
    // *!Remove authority member //
    ////////////////////////////////////

    //   id = "0x27aE72820F05f8B823530d66Bb4FC14b37b6E028";
    // await transactionsContract.removeAuthorityMember(id);



   


    ///////////////////////////////////////////////
    // *! Get Institutions admin details  //
    /////////////////////////////////////////////////

    //   id = "0x27aE72820F05f8B823530d66Bb4FC14b37b6E028";
    // data = await transactionsContract.institutionAdmins(id);

    ////////////////////////////////////
    // *!change Institutions admin  status //
    ////////////////////////////////////

    //   id = "0x27aE72820F05f8B823530d66Bb4FC14b37b6E028";
    // const status = false ;
    // await transactionsContract.changeInstitutionAdminStatus(id, status);



    ////////////////////////////////////
    // *!Remove Institutions admin  //
    ////////////////////////////////////

    //   id = "0x27aE72820F05f8B823530d66Bb4FC14b37b6E028";
    // await transactionsContract.removeInstitutionAdmin(id);


  



    //////////////////////////////////////////////////////
    // *! Disqualify Document  ------------------------ //

    //////////////////////////////////////////////////////

    // const pdfHash = "9e9465e36826bb361103b0b614a0685bf547ce10e4a9b244aed4d4354908b500" ;
    // const msg = "thare was and issue";
    // const newPdfHash = "9e9465e36826bb361103b0b614a0685bf547ce10e4a9b244aed4d4354908b500" ;

    // await transactionsContract.disqualifyDocument(pdfHash,msg,newPdfHash);





    //////////////////////////////////////////////////////
    // *! Verify document via Data hash  ------------------------ //

    //////////////////////////////////////////////////////

    const dataHash = "6fe6021f948f23a378d338e5aae048b05bbf2a796101e6e5b10cf15dd0917a00"

    console.log(" status ----  ", " data== ", await transactionsContract.checkDataHashExistence(dataHash));


    //////////////////////////////////////////////////////
    // *! Verify document via pdfHash  ------------------------ //

    //////////////////////////////////////////////////////

    const pdfHash = "6fe6021f948f23a378d338e5aae048b05bbf2a796101e6e5b10cf15dd09178"

    console.log(" status ----  ", " pdf == ", await transactionsContract.checkPdfHashExistence(pdfHash));


    //////////////////////////////////////////////////////
    // *! Verify document via Document Id  ------------------------ //

    //////////////////////////////////////////////////////



    console.log(" status ----  ", "id  == ", await transactionsContract.checkDocumentExistence(2));




    const institutions = await transactionsContract.getUploaderDocuments("0x28F1170dE3752Bf8C091386801D4d1c3961006AC");
    console.log("certificate List ", (institutions))
    console.log("data ============== ", await transactionsContract.owner())


    console.log("  ===============================   send transaction 22 ==============================")

  }





  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = await createEthereumContract();

        const availableTransactions =
          await transactionsContract.getUploaderDocuments();

        // Update transactions state with availableTransactions
        setTransactions(availableTransactions);
      } else {
        console.log("Ethereum test is not present");
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
        console.log("   ----   Connected account is   --  ", accounts[0]);
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

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      console.log("       --------        current account      -----------   ");
      console.log(currentAccount);
      console.log("       --------        current account2      -----------   ");
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();


  }, []);

  return (
    <TransactionContext.Provider
      value={{
        handleChange,
        formData,
        transactionCount,
        connectWallet,
        transactions,
        currentAccount,
        isLoading,
        sendTransaction,


        AddNewAuthority,
        GetAuthorityMemberList,
        getAuthorityDetails,
        AddNewInstitutionAdmin,
        GetInstitutionAdminList,
        UploadDocument,
        GetAllDoceuments,
        
        

      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
