import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext"; 


 
 

const Welcome = () => {
  const { isLoading,queryBlockchain,     uploadFile, transactions,  getAllTransactions,verifyFile } = useContext(TransactionContext);

 const testFunction =  ()=>{
  // const file  = 'hi hello';
  // const file  = 'ruhul';
  // const file  = 'nasim';
 
  
  // uploadFile(file);
  // verifyFile(file)
  // console.log(getAllTransactions()) 
 
  // uploadFile(file); 
  queryBlockchain();
 

  


 }

  return (
 <>
 
  
                <button
                  type="button"
                  onClick={testFunction}
                  className=" my-40  mt-40  mx-10 text-white  px-10  mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Click Here
                </button>

                {isLoading?  'Loading.........' : "" 
                }
 
 
 </>
  );
};

export default Welcome;
