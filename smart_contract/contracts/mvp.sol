// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SecureDoc {
    struct Document {
        string id;
        address uploader;
        string pdfHash;
        string dataHash;
        string documentType;
        bool disqualified;
        string disqualificationMessage;
    }

    mapping(string => Document) private documents;
    mapping(string => bool) private pdfHashExists;
    mapping(string => bool) private dataHashExists;

    event DocumentUploaded(
        address indexed uploader,
        string id,
        string pdfHash,
        string dataHash,
        string documentType
    );

    event DocumentDisqualified(
        string indexed id,
        address disqualifier,
        string newPdfHash,
        string newDisqualificationMessage
    );

    // Modifier to check if the caller is the uploader of the document
    modifier onlyUploader(string memory _id) {
        require(
            documents[_id].uploader == msg.sender,
            "You are not the uploader of this document"
        );
        _;
    }

    // Modifier to check if the document with given id exists
    modifier documentExists(string memory _id) {
        require(bytes(documents[_id].id).length != 0, "Document does not exist");
        _;
    }

    function uploadDocument(string memory _id, string memory _pdfHash, string memory _dataHash, string memory _documentType) external {
        require(!pdfHashExists[_pdfHash], "Document with this pdfHash already exists");
        require(!dataHashExists[_dataHash], "Document with this dataHash already exists");

        documents[_id] = Document({
            id: _id,
            uploader: msg.sender,
            pdfHash: _pdfHash,
            dataHash: _dataHash,
            documentType: _documentType,
            disqualified: false,
            disqualificationMessage: ""
        });

        pdfHashExists[_pdfHash] = true;
        dataHashExists[_dataHash] = true;

        emit DocumentUploaded(msg.sender, _id, _pdfHash, _dataHash, _documentType);
    }

    function disqualifyDocument(string memory _id, string memory _newPdfHash, string memory _disqualificationMessage) external onlyUploader(_id) documentExists(_id) {
        documents[_id].disqualified = true;
        documents[_id].disqualificationMessage = _disqualificationMessage;

        pdfHashExists[documents[_id].pdfHash] = false;
        pdfHashExists[_newPdfHash] = true;

        emit DocumentDisqualified(_id, msg.sender, _newPdfHash, _disqualificationMessage);

        documents[_id].pdfHash = _newPdfHash;
    }

    function checkPdfHashExistence(string memory _pdfHash) external view returns (bool) {
        return pdfHashExists[_pdfHash];
    }

    function checkDataHashExistence(string memory _dataHash) external view returns (bool) {
        return dataHashExists[_dataHash];
    }

    function checkDocumentExistence(string memory _id) external view returns (bool) {
        return bytes(documents[_id].id).length != 0;
    }
}
