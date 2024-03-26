import { Button, Input } from "antd";
import "./Hero.css";
import { useRef, useState } from "react";
const { Search } = Input;
const Hero = () => {
  const fileInputRef = useRef(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showSearch, setShowSearch] = useState(true);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleLoginClick = () => {
    setShowRegistration(true);
    setShowSearch(false);
  };

  const handleSearchClick = () => {
    setShowRegistration(false);
    setShowSearch(true);
  };

  return (
    <div className="hero-wrapper">
      <div className="hero-inner-wrapper">
      <h3 className="hero-title font-ibm">SecureDoc Universal Verifier</h3>
      {showSearch && (
        <div className="search-container">
          <Search
            placeholder="Enter URL"
            allowClear
            enterButton="Verify"
            size="large"
            onClick={handleSearchClick}
            className="url-search"
            // onSearch={onSearch}
          />
        </div>
      )}
      {showRegistration && (
        <div className="login-container">
          <div>
            <Input
              placeholder="Registration"
              size="large"
              className="login-input"
            />
          </div>

          <div>
            <Input.Password
              placeholder="Password"
              size="large"
              className="login-input"
            />
          </div>
          <div>
            <Button
              className="login-button"
              // onClick={HandleLoginClick}
            >
              Login
            </Button>
          </div>
        </div>
      )}
      <div className="pdf-regi-wrapper">
        <div className="pdf-wrapper">
          <input
            type="file"
            id="myfile"
            name="myfile"
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <p onClick={handleButtonClick} className="pdf-text">
            Upload PDF
          </p>
        </div>
        <div>
          {showSearch && (
            <p onClick={handleLoginClick} className="pdf-text">
              {" "}
              login via Registration and password
            </p>
          )}
          {showRegistration && (
            <p onClick={handleSearchClick} className="pdf-text">
              {" "}
              Enter URL
            </p>
          )}
        </div>
      </div>
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
