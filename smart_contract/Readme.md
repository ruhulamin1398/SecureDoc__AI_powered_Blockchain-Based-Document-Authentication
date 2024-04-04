
```javascript

export const contractOwner='0x28f1170de3752bf8c091386801d4d1c3961006ac';
export const contractAddress = "0x14455912260c1dc8bd97a7e34bda6ea20bc3f823";

```


# Authority Member

## Get Authority Member List

```javascript
/**
 * @function getAuthorityMemberList
 * Get the list of authority members.
 */
await transactionsContract.getAuthorityMemberList();

```


## Add Authority Member


```javascript
/**
 * @function addAuthorityMember
 * Add a new authority member.
 * @param {string} id - The ID of the authority member.
 * @param {string} name - The name of the authority member.
 * @param {string} description - Description of the authority member.
 */
const id = "0x27aE72820F05f8B823530d66Bb4FC14b37b6E028";
const name = "Ruhul Account 2";
const description = "this is for testing only";
await transactionsContract.addAuthorityMember(id, name, description);


```


## Get Authority Member Details


```javascript
/**
 * @function authorityMembers
 * Get details of a specific authority member.
 * @param {string} id - The ID of the authority member.
 */
const id = "0x27aE72820F05f8B823530d66Bb4FC14b37b6E028";
await transactionsContract.authorityMembers(id);


```

## Change Authority Member Status

```javascript
/**
 * @function changeAuthorityMemberStatus
 * Change the status of an authority member.
 * @param {string} id - The ID of the authority member.
 * @param {boolean} status - The new status of the authority member.
 */
const id = "0x27aE72820F05f8B823530d66Bb4FC14b37b6E028";
const status = false;
await transactionsContract.changeAuthorityMemberStatus(id, status);


```

## Remove Authority Member


```javascript
/**
 * @function removeAuthorityMember
 * Remove an authority member.
 * @param {string} id - The ID of the authority member to be removed.
 */
const id = "0x27aE72820F05f8B823530d66Bb4FC14b37b6E028";
await transactionsContract.removeAuthorityMember(id);


```

# Intitutions

## 1. Get Institutions List


```javascript
/**
 * @function getInstitutionAdminList
 * Get the list of institutions.
 */
const institutions = await transactionsContract.getInstitutionAdminList();
console.log(JSON.stringify(institutions));



```




## 1. Add Institutions Admin


```javascript
/**
 * @function addInstitutionAdmin
 * Add a new institution admin.
 * @param {string} id - The ID of the institution admin.
 * @param {string} name - The name of the institution admin.
 * @param {string} description - Description of the institution admin.
 */
const id = "0x28F1170dE3752Bf8C091386801D4d1c3961006AC";
const name = "Siu";
const description = "SIU";
await transactionsContract.addInstitutionAdmin(id, name, description);



```




##  Get Institutions Admin Details


```javascript

/**
 * @function institutionAdmins
 * Get details of a specific institution admin.
 * @param {string} id - The ID of the institution admin.
 */
const id = "0x27aE72820F05f8B823530d66Bb4FC14b37b6E028";
data = await transactionsContract.institutionAdmins(id);



```




## Change Institutions Admin Status

```javascript
/**
 * @function changeInstitutionAdminStatus
 * Change the status of an institution admin.
 * @param {string} id - The ID of the institution admin.
 * @param {boolean} status - The new status of the institution admin.
 */
const id = "0x27aE72820F05f8B823530d66Bb4FC14b37b6E028";
const status = false;
await transactionsContract.changeInstitutionAdminStatus(id, status);



```




## Remove Institutions Admin


```javascript
/**
 * @function removeInstitutionAdmin
 * Remove an institution admin.
 * @param {string} id - The ID of the institution admin to be removed.
 */
const id = "0x27aE72820F05f8B823530d66Bb4FC14b37b6E028";
await transactionsContract.removeInstitutionAdmin(id);



```

# Document 



## Upload New Document

```javascript
/**
 * @function uploadDocument
 * Upload a new document.
 * @param {string} pdfHash - The hash of the PDF document.
 * @param {string} dataHash - The hash of the document data.
 * @param {string} encryptedData - Encrypted data of the document.
 * @param {string} documentType - Type of the document.
 */
const pdfHash = "9e9465e36826bb361103b0b614a0685bf547ce10e4a9b244aed4d4354908b8";
const dataHash = "6fe6021f948f23a378d338e5aae048b05bbf2a796101e6e5b10cf15dd09178";
const encryptedData = "S9WVhp2Ww2paZYYm3YlCPxYwd+cYqrFE91brrCY6BLU5ukLxDgZ8fHShS0vtce0oOZbIGqXfwV6u5O6+SLhpuQAHCL1UXnJi4iAhF4TURTPRh6kOzjt0GdQ66oMUowT/qo+x3mcYFIvkR8cRbn8vFnXhe+lNsNM6PWkNa2SvEp8=";
const documentType = "testData";
await transactionsContract.uploadDocument(pdfHash, dataHash, encryptedData, documentType);



```




## Disqualify Document


```javascript


/**
 * @function disqualifyDocument
 * Disqualify a document.
 * @param {string} pdfHash - The hash of the PDF document.
 * @param {string} msg - Message explaining the disqualification reason.
 * @param {string} newPdfHash - The new hash for the disqualified document.
 */
const pdfHash = "9e9465e36826bb361103b0b614a0685bf547ce10e4a9b244aed4d4354908b500";
const msg = "there was an issue";
const newPdfHash = "9e9465e36826bb361103b0b614a0685bf547ce10e4a9b244aed4d4354908b500";
await transactionsContract.disqualifyDocument(pdfHash, msg, newPdfHash);



```




## Verify Document via Data Hash


```javascript


/**
 * @function checkDataHashExistence
 * Verify a document using its data hash.
 * @param {string} dataHash - The hash of the document data.
 * @returns {boolean} - Status of the document existence.
 */
const dataHash = "6fe6021f948f23a378d338e5aae048b05bbf2a796101e6e5b10cf15dd0917a00";
console.log("Status:", await transactionsContract.checkDataHashExistence(dataHash));



```




##  Verify Document via PDF Hash


```javascript


/**
 * @function checkPdfHashExistence
 * Verify a document using its PDF hash.
 * @param {string} pdfHash - The hash of the PDF document.
 * @returns {boolean} - Status of the document existence.
 */
const pdfHash = "6fe6021f948f23a378d338e5aae048b05bbf2a796101e6e5b10cf15dd09178";
console.log("Status:", await transactionsContract.checkPdfHashExistence(pdfHash));


```




## Verify Document via Document ID


```javascript

/**
 * @function checkDocumentExistence
 * Verify a document using its ID.
 * @param {number} id - The ID of the document.
 * @returns {boolean} - Status of the document existence.
 */
console.log("Status:", await transactionsContract.checkDocumentExistence(2));

```



