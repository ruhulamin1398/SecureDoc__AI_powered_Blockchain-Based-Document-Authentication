
# SecureDoc: AI-Powered Blockchain-Based Certificate Authentication


https://github.com/user-attachments/assets/b15daa9e-3c62-4ad2-8146-6276aa9827da




**Overview:**
SecureDoc leverages the power of AI and blockchain technology to create a robust system for certificate authentication. This project ensures the integrity and authenticity of academic certificates by embedding them onto the Ethereum blockchain, making them tamper-proof and easily verifiable.

## Process:

### Certificate Upload and Verification:
1. The Assistant Controller enters the student's registration number and uploads the PDF of the certificate.
2. An API retrieves the student's data from the database, generating a JSON file with crucial details such as the student's name, department, and scores.
3. The Assistant Exam Controller verifies the consistency between the registration number in the PDF and the JSON file.

### AI Assistance and Duplicate Prevention:
- The AI system reviews the student's previous exam results and other data to detect any discrepancies and check for previously issued certificates.
- This step helps the Exam Controller by preventing the issuance of duplicate certificates and recommending the disqualification of any duplicate entries.

### Blockchain Deployment:
- The Exam Controller conducts a final manual verification of the PDF and JSON files.
- Upon confirmation, the Exam Controller signs the certificate and deploys it to the Ethereum blockchain.

## Student Interaction:
- Students log in to generate a new password or token, setting its validity.
- They can reset the validity as needed.
- Students can download and share the certificate PDF along with a verifier via a password, token, or QR code.

## Verifier Interaction:
- Verifiers enter the token/password or upload the certificate PDF.
- They retrieve the PDF and data from local storage.
- The verifier queries the blockchain to validate the data and certificate.
- All information is accessible, and the certificate can be downloaded for records.

SecureDoc thus combines the immutable nature of blockchain with AI's analytical capabilities to streamline the certificate authentication process, ensuring security and authenticity at every step.





https://github.com/ruhulamin1398/SecureDoc__AI_powered_Blockchain-Based-Document-Authentication/assets/43258231/37d4ac3b-171b-4bea-a52b-086c7fcd9b5a



https://github.com/ruhulamin1398/SecureDoc__AI_powered_Blockchain-Based-Document-Authentication/assets/43258231/02111902-fa06-4dbe-8c92-8ef40c06617a

![Secure doc(3)](https://github.com/ruhulamin1398/SecureDoc__AI_powered_Blockchain-Based-Document-Authentication/assets/43258231/efe566c4-11c0-4d65-819b-86859b5030b9)
