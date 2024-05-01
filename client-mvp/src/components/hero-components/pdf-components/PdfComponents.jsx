import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

const PdfComponents = ({ setPdfSrc, pdfSrc }) => {
  const pdfInputRef = useRef(null);
  const [selectedPdfFile, setSelectedPdfFile] = useState(null);

  const handleSelectPdf = () => {
    pdfInputRef.current.click();
  };

  const handlePdfChange = (e) => {
    setSelectedPdfFile(e.target.files[0]);
    console.log("uploading.......");
  };

  const handleUploadPdf = () => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPdfSrc(fileReader.result);
      console.log(pdfSrc);
    };
    fileReader.readAsDataURL(selectedPdfFile);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Button onClick={handleSelectPdf}>Choose a PDF</Button>
        <input
          type="file"
          id="myfile"
          name="myfile"
          ref={pdfInputRef}
          style={{ display: "none" }}
          onChange={handlePdfChange}
        />
        {selectedPdfFile && <p>{selectedPdfFile.name}</p>}
      </div>
      <div>
        <Button disabled={!selectedPdfFile} onClick={handleUploadPdf}>
          Upload PDF
        </Button>
      </div>
    </div>
  );
};

PdfComponents.propTypes = {
  setPdfSrc: PropTypes.func.isRequired,
  pdfSrc: PropTypes.string.isRequired,
};

export default PdfComponents;
