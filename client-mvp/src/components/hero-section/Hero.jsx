import { Button, Input } from "antd";
import "./Hero.css";
import { useRef } from "react";
const { Search } = Input;
const Hero = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="hero-wrapper">
      <h3 className="hero-title font-ibm">SecureDoc Universal Verifier</h3>
      <div className="search-container">
        <Search
          placeholder="Enter URL"
          allowClear
          enterButton="Verify"
          size="large"
          // onSearch={onSearch}
        />
      </div>
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
          <p className="pdf-text"> login via Registration and password</p>
        </div>
      </div>
      <div className="credential-wrapper">
        <p>
          You may share your Blockcerts with CHAPI if you have a compatible
          wallet:
        </p>
        <div className="credential-button-wrapper">
          <Button danger>Credential</Button>
        </div>
        <p>
          NOTA: the credential remains on the browser and is not stored
          anywhere.
        </p>
      </div>
    </div>
  );
};

export default Hero;
