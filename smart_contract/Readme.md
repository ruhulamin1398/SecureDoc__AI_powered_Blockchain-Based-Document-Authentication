# Document Verification Project

The purpose of this project is to create a decentralized system that allows users to verify the authenticity of their files. Users will generate a unique hash for their files and submit these hashes using a mapping structure. They can upload multiple file hashes simultaneously.

## Key Requirements

1. **Simultaneous File Hash Submission:** Users should have the ability to submit multiple file hashes in a single transaction.

2. **Uploader Information Tracking:** The system should maintain a record of uploader information for each submitted file hash.

3. **Service Fee for File Upload:** Uploading a file hash should incur a service fee of 641,328,063 gwei, which is automatically transferred to the specified address (0x7f1fe31a172969286b69cca0553dc26097B91fc9).

4. **Disqualification Option:** Uploaders should have the option to modify the state of a submitted file hash in case of an inadvertent or incorrect upload. If a file hash is mistakenly uploaded, the owner can disqualify it, marking it as "disqualified." A new version of the file hash can be added, along with a brief message explaining the disqualification.

5. **Hash Existence Query:** Anyone should be able to query whether a specific file hash exists. If a file hash is disqualified, the system should return the new version file hash along with a descriptive message indicating that it is the updated version.

These requirements define the core functionality of the project, ensuring users can confidently verify the authenticity of their files and make necessary adjustments when needed.
