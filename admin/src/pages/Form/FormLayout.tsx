import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import DefaultLayout from '../../layout/DefaultLayout';
 

import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";


// const Input = ({ placeholder, name, type, value, handleChange }) => (
//   <input
//     placeholder={placeholder}
//     type={type}
//     step="0.0001"
//     value={value}
//     onChange={(e) => handleChange(e, name)}
//     className="w-full rounded border-[1.5px] border-stroke bg-transparent mb-2 py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//   />
// );

const Input = ({ placeholder, name, type, value, handleChange }) => {
  if (type === 'file') {
    return (
      <input
        type={type}
        onChange={(e) => handleChange(e, name)}
        className="w-full rounded border-[1.5px] border-stroke bg-transparent mb-2 py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
    
      />
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
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // console.log("Form Data:", formData); // Log entire formData state
  
    const { name, comment, doctype, djson, dpdf } = formData;
  
    console.log(name);
    console.log(comment);
    console.log(doctype);
    console.log("---------------------------pdf-----------------------",dpdf);
  
    // Access and parse the JSON data if available
    if (djson) {
      try {
        const jsonData = JSON.parse(djson);
        console.log("Parsed JSON data:", jsonData);
      } catch (error) {
        console.error("Error parsing JSON data:", error);
      }
    }
  };
  
  
  




  return (
<>

         

    <DefaultLayout>
      <Breadcrumb pageName="Add new Document" />



      <div className="p-5 w-full flex flex-col justify-start items-start blue-glassmorphism">
            {/* <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} /> */}
            <label className="mb-2.5 block text-left text-black dark:text-white">
                      Name
                    </label>
            <Input placeholder="Enter Name" name="name" type="text" handleChange={handleChange} />
            <label className="mb-2.5 block text-left text-black dark:text-white">
                      Document Type
                    </label>
            <Input placeholder="Certificate,Marksheet, Aggrement etc." name="doctype" type="text" handleChange={handleChange} />

            <label className="mb-2.5 block text-left text-black dark:text-white">
                      Document PDF
                    </label>
            <Input placeholder="Document PDF" name="dpdf" type="file" handleChange={handleChange} />
          
          
  
            
            <label className="mb-2.5 block text-left text-black dark:text-white">
            Document Data (json)
                    </label>
            <Input placeholder="Document PDF" name="djson" type="file" handleChange={handleChange} />

            




 


                <label className="mb-2.5 block text-left text-black dark:text-white">
                      Comment
                    </label>
            <Input placeholder="Write comment here" name="comment" type="text" handleChange={handleChange} />
  




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



      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                {/* Contact Form */}
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>





                <SelectGroupOne />

                {/* <!-- File upload --> */}


                <div className="mb-4.5">
                  <div>
                    <label className="mb-3 block text-black dark:text-white">
                      Document PDF
                    </label>
                    <input
                      type="file"
                      className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                    />
                  </div>
                </div>




                <div className="mb-4.5">
                  <div>
                    <label className="mb-3 block text-black dark:text-white">
                      Document Data (json)
                    </label>
                    <input
                      type="file"
                      className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                    />
                  </div>
                </div>





                 
                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Comment
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Comment"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>




                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>


      </div>
    </DefaultLayout>
    </>
  );
 
};

export default FormLayout;
