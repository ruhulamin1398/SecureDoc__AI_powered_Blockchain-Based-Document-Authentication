// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocumentManagement {
    address public owner;
    
    struct AuthorityMember {
        address id;
        string name;
        string description;
        bool isActive;
    }
    
    struct InstitutionAdmin {
        address id;
        string name;
        string description;
        bool isActive;
    }
    
    struct Document {
        string id;
        string pdfHash;
        string dataHash;
        string encryptedData;
        string documentType;
        address uploader;
        bool disqualified;
        string disqualificationMessage;
    }
    mapping(string => Document) public documents;
    AuthorityMember[] public authorityMembersList;
    mapping(address => uint256) public authorityMemberIndex;
    
    mapping(address => AuthorityMember) public authorityMembers;
    mapping(address => InstitutionAdmin) public institutionAdmins;
    uint256 public institutionAdminCount; // Counter to keep track of the number of Institution Admins
    
    uint256 public documentCount=0; // Counter to keep track of the number of Institution Admins
    
    event DocumentUploaded(string id, address uploader);
    event DocumentDisqualified(string id, address uploader, string disqualificationMessage);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can call this function");
        _;
    }
    
    modifier onlyAuthorityMember() {
        require(authorityMembers[msg.sender].isActive, "Only active Authority Members can call this function");
        _;
    }
    
    modifier onlyInstitutionAdmin() {
        require(institutionAdmins[msg.sender].isActive, "Only active Institution Administrators can call this function");
        _;
    }
    
    constructor() {
        owner = msg.sender;
    }
    
    function addAuthorityMember(address _id, string memory _name, string memory _description) external onlyOwner {
        authorityMembers[_id] = AuthorityMember(_id, _name, _description, true);
        authorityMembersList.push(authorityMembers[_id]);
        authorityMemberIndex[_id] = authorityMembersList.length - 1;
    }
    
    function removeAuthorityMember(address _id) external onlyOwner {
        require(authorityMembers[_id].isActive, "Authority Member not found or already inactive");
        authorityMembers[_id].isActive = false;
    }
    
    function changeAuthorityMemberStatus(address _id, bool _isActive) external onlyOwner {
        authorityMembers[_id].isActive = _isActive;
    }
    
    function addInstitutionAdmin(address _id, string memory _name, string memory _description) external onlyAuthorityMember {
        institutionAdmins[_id] = InstitutionAdmin(_id, _name, _description, true);
        institutionAdminCount++; // Increment the counter
    }
    
    function removeInstitutionAdmin(address _id) external onlyAuthorityMember {
        require(institutionAdmins[_id].isActive, "Institution Admin not found or already inactive");
        delete institutionAdmins[_id];
        institutionAdminCount--; // Decrement the counter
    }
    
    function changeInstitutionAdminStatus(address _id, bool _isActive) external onlyAuthorityMember {
        institutionAdmins[_id].isActive = _isActive;
    }
    
    function uploadDocument( string memory _pdfHash, string memory _dataHash, string memory _encryptedData, string memory _documentType) external onlyInstitutionAdmin {
        string memory _id = uint256ToString(documentCount);
        documents[_id] = Document(_id, _pdfHash, _dataHash, _encryptedData, _documentType,  msg.sender, false, "");
        documentCount ++;
        emit DocumentUploaded(_id, msg.sender);
    }
    
    function disqualifyDocument(string memory _id, string memory _disqualificationMessage) external {
        require(msg.sender == documents[_id].uploader, "You can only disqualify your own documents");
        documents[_id].disqualified = true;
        documents[_id].disqualificationMessage = _disqualificationMessage;
        emit DocumentDisqualified(_id, msg.sender, _disqualificationMessage);
    }



function getUploaderDocuments(address _uploader) external view returns (Document[] memory) {
    uint256 count = 0;

for (uint256 j = 0; j < documentCount; j++) {

    if(documents[uint256ToString(j)].uploader ==_uploader){
        count ++;
    }
    
}   



    Document[] memory uploaderDocuments = new Document[](count);
uint256 index = 0;
for (uint256 j = 0; j < documentCount; j++) {

    if(documents[uint256ToString(j)].uploader ==_uploader){
        uploaderDocuments[index++] = documents[uint256ToString(j)];
    }
    
}  



//     // Count the number of documents uploaded by the sender
//     for (uint256 i = 0; i < authorityMembersList.length; i++) {
//         if (documents[authorityMembersList[i].id].uploader == _uploader) {
//             count++;
//         }
//     }

//     // Create an array to store the documents
//     Document[] memory uploaderDocuments = new Document[](count);
//     uint256 index = 0;
//     // Retrieve the documents uploaded by the sender
//     for (uint256 j = 0; j < authorityMembersList.length; j++) {
//         string memory docId = authorityMembersList[j].id;
//         if (documents[docId].uploader == _uploader) {
//             uploaderDocuments[index] = documents[docId];
//             index++;
//         }
//     }

    return uploaderDocuments;
// return count;
}




    
    function getAuthorityMemberList() external view onlyOwner returns (AuthorityMember[] memory) {
        return authorityMembersList;
    }
    
    function getInstitutionAdminList() external view returns (InstitutionAdmin[] memory) {
        InstitutionAdmin[] memory result = new InstitutionAdmin[](institutionAdminCount);
        uint256 index = 0;
        for (uint i = 0; i < authorityMembersList.length; i++) {
            if (institutionAdmins[authorityMembersList[i].id].isActive) {
                result[index] = institutionAdmins[authorityMembersList[i].id];
                index++;
            }
        }
        return result;
    }
    

       function encodeDocumentToJson(Document memory _doc) internal pure returns (string memory) {
        return string(abi.encodePacked(
            '{"id":"', _doc.id, '", "pdfHash":"', _doc.pdfHash, '", "dataHash":"', _doc.dataHash,
            '", "encryptedData":"', _doc.encryptedData, '", "documentType":"', _doc.documentType,
            '",  "uploader":"', _doc.uploader,
            '", "disqualified":', (_doc.disqualified ? "true" : "false"),
            ', "disqualificationMessage":"', _doc.disqualificationMessage, '"}'
        ));
    }
    


      function checkPdfHashExistence(string memory _pdfHash) external view returns (bool, string memory) {
        if (bytes(documents[_pdfHash].pdfHash).length == 0) {
            return (false, "");
        }

        return (true, encodeDocumentToJson(documents[_pdfHash]));
    }

 
    function checkDataHashExistence(string memory _dataHash) external view returns (bool, string memory) {
        if (bytes(documents[_dataHash].dataHash).length == 0) {
            return (false,"");
        }

        return (true, encodeDocumentToJson(documents[_dataHash]));
 
    }
    
    function checkDocumentExistence(string memory _id) external view returns (bool, string memory) {
        if (bytes(documents[_id].id).length == 0) {
            return (false,"");
        }
       
        return (true, encodeDocumentToJson(documents[_id]));
 
    }


      function uint256ToString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}
