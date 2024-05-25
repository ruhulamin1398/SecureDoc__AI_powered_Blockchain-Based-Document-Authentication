import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { sha256 } from 'js-sha256'; 



import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

import DefaultLayout from '../../layout/DefaultLayout';
import { TransactionContext } from "../../context/TransactionContext";  




const Input = ({ placeholder, name, type, value, handleChange }) => {
  if (type === 'file') {
    return (
     <>
      <input
        type={type}
        onChange={(e) => handleChange(e, name)}
        className="w-full rounded border-[1.5px] border-stroke bg-transparent mb-2 py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"

      />
     </>
    );
  } else {
    return (
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="w-full rounded border-[1.5px] border-stroke bg-transparent mb-2 py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />
    );
  }
};






const FormLayout = () => {
  const { currentAccount, connectWallet, handleChange,formData, sendTransaction,  isLoading , AddNewAuthority, GetAuthorityMemberList,  getAuthorityDetails ,AddNewInstitutionAdmin, GetInstitutionAdminList, UploadDocument,GetAllDoceuments } = useContext(TransactionContext);
  const [pdfHash, setPdfHash] =useState<string | null>(null)
  const [dataHash, setDataHash] = useState<string | null>(null)
  const [encryptedData, setEncryptedData] =useState<string | null>(null) 
 




  const handleSubmit = async(e) => {
    

console.log("submitted")
  // AddNewAuthority()
  // GetAuthorityMemberList()
  // AddNewInstitutionAdmin()
  // GetInstitutionAdminList();
   UploadDocument()
  GetAllDoceuments();
    
    e.preventDefault();

    console.log("Form Data:", formData); // Log entire formData state

    // const { name, comment, doctype, djson, dpdf } = formData;
    // setPdfHash(sha256(dpdf))
    // setDataHash(sha256(JSON.stringify(djson)))
    // setEncryptedData((JSON.stringify(djson)))
    
    // console.log("encryptedData  : ",encryptedData)
    // console.log("dataHash  : ",dataHash)
    // console.log("pdfHash  : ",pdfHash)
 
    

    


 
    
 
 
    // Access and parse the JSON data if available
    // if (djson) {
    //   try {
    //     const jsonData = JSON.parse(djson);
    //     console.log("---------------------------pdf form url -----------------------", sha256(djson));

    //     console.log("Parsed JSON data:", jsonData);
    //   } catch (error) {
    //     console.error("Error parsing JSON data:", error);
    //   }
    // }
  };







  return (
    <>



      <DefaultLayout>
        <Breadcrumb pageName="Add new Certificate" />

<div>{currentAccount}</div>

        <div className="p-5 w-full flex flex-col justify-start items-start blue-glassmorphism">
          {/* <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} /> */}
    

          {/* <label className="mb-2.5 block text-left text-black dark:text-white">
            Name
          </label>  

          <Input placeholder="Enter Name" name="name" type="text" handleChange={handleChange} />
          
          <label className="mb-2.5 block text-left text-black dark:text-white">
            Document Type 
          </label>
          <Input placeholder="Certificate,Marksheet, Aggrement etc." name="doctype" type="text" handleChange={handleChange} /> */}

          <label className="mb-2.5 block text-left text-black dark:text-white">
            Document PDF  
          </label>
          <Input placeholder="Document PDF" name="dpdf" type="file" handleChange={handleChange} />




          <label className="mb-2.5 block text-left text-black dark:text-white">
            Document Data (json) 
          </label>
          <Input placeholder="Document PDF" name="djson" type="file" handleChange={handleChange} />


          {/* <label className="mb-2.5 block text-left text-black dark:text-white">
            Comment
          </label>
          <Input placeholder="Write comment here" name="comment" type="text" handleChange={handleChange} /> */}





          <div className="h-[1px] w-full bg-gray-400 my-2" />

          {isLoading
            ? <Loader />
            : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Upload
              </button>
            )}
        </div>






      </DefaultLayout>
    </>
  );

};

export default FormLayout;
