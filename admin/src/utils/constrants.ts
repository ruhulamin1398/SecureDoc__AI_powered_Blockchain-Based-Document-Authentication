import CryptoJS from 'crypto-js';

import abi from "./Tabi.json"; 

export const contractOwner='0x28f1170de3752bf8c091386801d4d1c3961006ac';
export const contractAddress = "0x184D1e8d243c81533937d5e7714b335E4f19372E";
export const contractABI = abi;
 

export const shortenAddress = (address:string) => `${address.slice(0, 10)}...${address.slice(address.length - 7)}`;



const secretKey = 'my-secret-key'; 

export const handleEncrypt = (data) => {
  const encrypted = CryptoJS.AES.encrypt(data, secretKey).toString();
  return (encrypted);
};

export const handleDecrypt = (data) => {
  const decrypted = CryptoJS.AES.decrypt(data, secretKey).toString(CryptoJS.enc.Utf8);
  
  return (decrypted);
};


 


 