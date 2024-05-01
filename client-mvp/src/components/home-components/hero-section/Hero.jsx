import { Button, Input } from "antd";
import "./Hero.css";
import { useState } from "react";
import JsonFile from "../../hero-components/json-file/JsonFile";
import PdfComponents from "../../hero-components/pdf-components/PdfComponents";

const { Search } = Input;

const Hero = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [showPdfOption, setShowPdfOption] = useState(false);
  const [registrationValue, setRegistrationValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");


  const [hash, setHash] = useState('');


  const [pdfSrc, setPdfSrc] = useState(null);

  const handleLoginClick = () => {
    setShowRegistration(true);
    setShowSearch(false);
  };

  const handleSearchClick = () => {
    setShowRegistration(false);
    setShowSearch(true);
  };

  const handleLogin = () => {
    console.log("Registration:", registrationValue);
    console.log("Password:", passwordValue);
  };

  return (
    <div className="hero-wrapper">
      <div className="hero-inner-wrapper">
        <h3 className="hero-title font-ibm">SecureDoc Universal Verifier</h3>
        {!showPdfOption && (
          <div className="search-container">
            <Search
              placeholder="Enter Hash"
              allowClear
              enterButton="Verify"
              size="large"
              onClick={handleSearchClick}
              className="url-search"
              onChange={(e) => setHash(e.target.value)}
              
            />
             
          </div>
        )}

        {showPdfOption && (
          <PdfComponents setPdfSrc={setPdfSrc} pdfSrc={pdfSrc} />
        )}

        {showRegistration && (
          <div className="login-container">
            <div>
              <Input
                placeholder="Registration"
                size="large"
                className="login-input"
                value={registrationValue}
                onChange={(e) => setRegistrationValue(e.target.value)}
              />
            </div>

            <div>
              <Input.Password
                placeholder="Password"
                size="large"
                className="login-input"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
            </div>
            <div>
              <Button className="login-button" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </div>
        )}
        <div className="pdf-regi-wrapper">
          <p
            onClick={() => setShowPdfOption(!showPdfOption)}
            className="pdf-text"
          >
            Upload PDF
          </p>
          <JsonFile />
          <div>
            {showSearch && (
              <p onClick={handleLoginClick} className="pdf-text">
                login via Registration and password
              </p>
            )}
            {showRegistration && (
              <p onClick={handleSearchClick} className="pdf-text">
                Enter Hash
              </p>
            )}
          </div>
        </div>

        {pdfSrc && (
          <div style={{ marginTop: "20px" }}>
            <iframe
              title="pdf"
              src={pdfSrc}
              width="780px"
              height="900px"
            ></iframe>
          </div>
        )}

        <div className="credential-wrapper">
          <p className="credential-text font-ibm">
            You may share your Blockcerts with CHAPI if you have a compatible
            wallet:
          </p>
          <div className="credential-button-wrapper">
            <Button danger> Share Credential</Button>
          </div>
          <p className="credential-note">
            NOTA: the credential remains on the browser and is not stored
            anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
