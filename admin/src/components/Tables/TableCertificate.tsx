
import {useContext, useEffect} from "react"
import { TransactionContext } from '../../context/TransactionContext'; 

import {handleDecrypt,handleEncrypt,shortenAddress } from "../../utils/constrants";

import { BRAND } from '../../types/brand';
import BrandOne from '../../images/brand/brand-01.svg';
import BrandTwo from '../../images/brand/brand-02.svg';
import BrandThree from '../../images/brand/brand-03.svg';
import BrandFour from '../../images/brand/brand-04.svg';
import BrandFive from '../../images/brand/brand-05.svg';
import { encrypt } from "js-crypto-aes";

const brandData: BRAND[] = [
  {
    logo: BrandOne,
    name: 'Google',
    visitors: 3.5,
    revenues: '5,768',
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: BrandTwo,
    name: 'Twitter',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'Github',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'Vimeo',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'Facebook',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
];





const CertificateTable =  () => {

  const { currentAccount, connectWallet, handleChange,formData, sendTransaction,  isLoading , AddNewAuthority, GetAuthorityMemberList,  getAuthorityDetails ,AddNewInstitutionAdmin, GetInstitutionAdminList, UploadDocument,GetAllDoceuments , allDoceuments} = useContext(TransactionContext);

  useEffect(() => {
    GetAllDoceuments();


  }, []);

  const getName = (data)=>{
  

    let  decryptedData= handleDecrypt(data)
    decryptedData= JSON.parse(decryptedData)
    decryptedData= JSON.parse(decryptedData)
    
    // decryptedData=  JSON.parse(decryptedData);
 
    // console.log("2 " , decryptedData);  
    // console.log("keys   " , Object.keys(decryptedData))
    
    
    return decryptedData.name;
  }

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Copied to clipboard:", text);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  
console.log("allDoceuments")
console.log(allDoceuments)

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      {/* <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Channels
      </h4> */}

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              ID
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              PDF
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Data
            </h5>
          </div> 
        </div>

        {allDoceuments.map((document) => (
           
          
          <div
            className={`grid grid-cols-3 sm:grid-cols-4  `}
            
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                {parseInt(document.id)+1 }
              </div>
              
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">
              {getName(document.encryptedData)} 

              </p>
            </div>


            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {shortenAddress(document.pdfHash)}
                
              <button onClick={()=>copyToClipboard(document.pdfHash)} > <img src="https://www.svgrepo.com/show/11279/file.svg" alt="" width={"20px"} /></button>

              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3"> 
              {shortenAddress(document.dataHash)}
              <button onClick={()=>copyToClipboard( document.dataHash )} > <img src="https://www.svgrepo.com/show/11279/file.svg" alt="" width={"20px"} /></button>
              </p>
            </div>

       

             
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateTable;
