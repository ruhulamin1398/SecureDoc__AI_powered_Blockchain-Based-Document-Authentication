import React from 'react';
import { Document, Page } from '@react-pdf/renderer';

const PDFViewer: React.FC = () => {
  const pdfURL = "../../../../files/2016331520.pdf";

  return (
    <div>
      <h1>This is pdf Viewer</h1>
      <Document file={pdfURL}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
