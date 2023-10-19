// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
contract FileHashStorage {
    address public owner;
    mapping(bytes32 => bool) fileHashExists;
    bytes32[] fileHashArray;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function addFileHash(bytes32 fileHash) public onlyOwner {
        require(!fileHashExists[fileHash], "File hash already exists");
        fileHashArray.push(fileHash);
        fileHashExists[fileHash] = true;
    }

    function getFileHashes() public view returns (bytes32[] memory) {
        return fileHashArray;
    }

    function verifyFileHashExists(bytes32 fileHash) public view returns (bool) {
        return fileHashExists[fileHash];
    }
}
