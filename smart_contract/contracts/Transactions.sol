// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocumentVerification {
    address public owner;
    mapping(address => mapping(string => bool)) private documents;
    mapping(string => bool) private disqualified;
    mapping(string => string) private newVersion;
    mapping(string => string) private disqualificationReason;

    uint256 public serviceFee = 641328063; // in gwei
    address payable public feeReceiver = payable(0x7f1fe31a172969286b69cca0553dc26097B91fc9);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function uploadDocuments(string[] memory documentHashes) public payable {
        require(msg.value >= serviceFee * documentHashes.length, "Insufficient service fee");

        for (uint256 i = 0; i < documentHashes.length; i++) {
            documents[msg.sender][documentHashes[i]] = true;
        }

        feeReceiver.transfer(msg.value);
    }

    function disqualifyDocument(string memory documentHash, string memory newHash, string memory reason) public onlyOwner {
        require(documents[msg.sender][documentHash], "Document not found");

        disqualified[documentHash] = true;
        newVersion[documentHash] = newHash;
        disqualificationReason[documentHash] = reason;
    }

    function verifyDocument(address uploader, string memory documentHash) public view returns (bool, string memory) {
        if (disqualified[documentHash]) {
            return (false, newVersion[documentHash]);
        }
        return (documents[uploader][documentHash], "");
    }

    function getDisqualificationReason(string memory documentHash) public view returns (string memory) {
        return disqualificationReason[documentHash];
    }
}
