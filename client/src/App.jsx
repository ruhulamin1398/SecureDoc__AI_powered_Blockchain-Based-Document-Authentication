
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import DeleteCertificate from "./Component/DeleteCertificate/DeleteCertificate";
import FileUpload from "./Component/FileUpload/FileUpload";
import Footer from "./Component/Footer/Footer";
import Certificate from "./Component/FullReport/Certificate";
import FullReport from "./Component/FullReport/FullReport";

import Home from "./Component/HomePage/Home";
import LoginPage from "./Component/LoginPage/LoginPage";
import Nevbar from './Component/Nevbar/Nevbar';
import RegistrationPage from './Component/RegistrationPage/RegistrationPage';
import UserProfile from "./Component/UserProfle/UserProfile";
import VerifyCertificate from "./Component/VerifyCertificate/VerifyCertificate";

export const userContext = createContext();

function App() {

  const [userLogin, setUserLogin] = useState(false)


  return (
    <userContext.Provider value={[userLogin, setUserLogin]}>
      <BrowserRouter>
        <Nevbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reg" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          {sessionStorage.getItem("username") || userLogin === true ? (<>
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/uploadFile" element={<FileUpload />} />
            <Route path="/viewReport/:id" element={<FullReport />} />
            <Route path="/fullimage/:id" element={<Certificate />} />
            <Route path="/viewReport/:id" element={<FullReport />} />
            <Route path="/delete/:id" element={<DeleteCertificate />} />

          </>) :
            <>


            </>
          }
          <Route path="/VeryfyCerticate" element={<VerifyCertificate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </userContext.Provider>
  )
} 

export default App;
