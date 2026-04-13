# SecureDoc: AI-Powered Blockchain-Based Certificate Authentication

SecureDoc is a complete certificate issuance and verification platform that merges AI-powered validation with blockchain-backed trust. The system helps institutions issue, verify, and revoke academic certificates with robust auditability and tamper-resistant provenance.

## Key Benefits

- **Tamper-proof certificate records** stored on Ethereum
- **AI-assisted validation** to prevent duplicates and detect inconsistencies
- **Role-based workflow** for administrators, issuers, students, and verifiers
- **Verifiers validate certificates** using tokens, PDFs, or blockchain proof
- **Upgrade-safe smart contract architecture** using UUPS proxy patterns

## Project Workflow

```
╔══════════════════════════════════════════╗
║  🏫  STEP 1 — Certificate Upload         ║
║  Staff uploads PDF + Registration Number ║
╚══════════════════════╦═══════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════╗
║  📊  STEP 2 — Data Verification          ║
║  API fetches student metadata from DB    ║
╚══════════════════════╦═══════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════╗
║  🤖  STEP 3 — AI Validation              ║
║  Detect duplicates & inconsistencies     ║
╚═══════════╦══════════════════╦═══════════╝
            ║                  ║
       ✅ Clean           ⚠️ Issue Found
            ║                  ║
            ║    ╔═════════════╩═══════════╗
            ║    ║  Flag for Review /       ║
            ║    ║  Recommend Disqualify    ║
            ║    ╚═════════════╦═══════════╝
            ║                  ║
            ╚═════════╦════════╝
                      ║
                      ▼
╔══════════════════════════════════════════╗
║  📋  STEP 4 — Document Issuer Review     ║
║  Manual verification of PDF + metadata  ║
╚═══════════╦══════════════════╦═══════════╝
            ║                  ║
       ✅ Approved        ❌ Rejected
            ║                  ║
            ║    ╔═════════════╩═══════════╗
            ║    ║  Return for Correction   ║
            ║    ╚═════════════╦═══════════╝
            ║                  ║
            ║                  ╚══► Back to Step 1
            ║
            ▼
╔══════════════════════════════════════════╗
║  ⛓️   STEP 5 — Blockchain Anchoring      ║
║  Certificate hash stored on Ethereum    ║
╚══════════════════════╦═══════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════╗
║  🎓  STEP 6 — Student Access             ║
║  Receive token, QR code & share link    ║
╚══════════════════════╦═══════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════╗
║  🔍  STEP 7 — Verifier Validation        ║
║  Submit token / upload PDF              ║
╚═══════════╦══════════════════╦═══════════╝
            ║                  ║
    ✅ Valid Cert         ❌ Not Found
            ║                  ║
╔═══════════╩══════╗  ╔════════╩══════════╗
║ Certificate info ║  ║ Invalid / Expired  ║
║ shown & download ║  ║ access denied      ║
╚══════════════════╝  ╚═══════════════════╝
```

## Institution Registration Flow

```
╔══════════════════════════════════════════╗
║  🏛️   STEP 1 — Institution Request       ║
║  Institution submits name, country,      ║
║  short code & accreditation ID           ║
╚══════════════════════╦═══════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════╗
║  🛡️   STEP 2 — SecureDoc Admin Review    ║
║  Admin verifies institution details     ║
╚═══════════╦══════════════════╦═══════════╝
            ║                  ║
       ✅ Approved        ❌ Rejected
            ║                  ║
            ║    ╔═════════════╩═══════════╗
            ║    ║  Institution not added   ║
            ║    ║  Notify applicant        ║
            ║    ╚═════════════════════════╝
            ║
            ▼
╔══════════════════════════════════════════╗
║  ✅  STEP 3 — Institution Registered     ║
║  Stored on-chain with unique ID         ║
╚══════════════════════╦═══════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════╗
║  👤  STEP 4 — Assign Authority Admin:     ║
║  SecureDoc Admin assigns an Authority   ║
║  Admin wallet to the institution        ║
╚══════════════════════╦═══════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════╗
║  📋  STEP 5 — Authority Admin Active     ║
║  Authority Admin can now manage         ║
║  their institution's issuers            ║
╚══════════════════════╦═══════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════╗
║  🖊️   STEP 6 — Add Document Issuers      ║
║  Authority Admin registers staff as     ║
║  Document Issuers for the institution   ║
╚═══════════╦══════════════════╦═══════════╝
            ║                  ║
  ✅ Issuer Active       ❌ Invalid Address
            ║                  ║
╔═══════════╩══════════╗  ╔════╩══════════════╗
║ Issuer can now sign  ║  ║ Registration fails  ║
║ & issue certificates ║  ║ retry required      ║
╚══════════════════════╝  ╚════════════════════╝
```

## Certificate Disqualification Flow

```
╔══════════════════════════════════════════╗
║  ⚠️   STEP 1 — Error Identified          ║
║  Issued certificate has an error or      ║
║  must be recalled                        ║
╚══════════════════════╦═══════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════╗
║  🖊️   STEP 2 — Document Issuer Acts      ║
║  Issuer calls disqualifyCertificate     ║
║  with reason & optional replacement     ║
╚═══════════╦══════════════════╦═══════════╝
            ║                  ║
   ✅ Cert Found         ❌ Cert Not Found
            ║                  ║
            ║    ╔═════════════╩═══════════╗
            ║    ║  Transaction reverts     ║
            ║    ╚═════════════════════════╝
            ║
            ▼
╔══════════════════════════════════════════╗
║  🚫  STEP 3 — Certificate Marked Invalid ║
║  isDisqualified = true stored on-chain  ║
║  Reason & disqualifier address logged   ║
╚══════════════════════╦═══════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════╗
║  📝  STEP 4 — Prepare Replacement        ║
║  Staff prepares corrected certificate   ║
╚══════════════════════╦═══════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════╗
║  🖊️   STEP 5 — Issue New Certificate     ║
║  Issuer calls issueCertificate with     ║
║  new document hash                      ║
╚══════════════════════╦═══════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════╗
║  ⛓️   STEP 6 — New Hash Anchored         ║
║  New certificate hash stored on-chain  ║
║  References old disqualified hash       ║
╚══════════════════════╦═══════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════╗
║  🔍  STEP 7 — Verifier Lookup            ║
║  Old hash shows ❌ disqualified          ║
║  New hash shows ✅ valid                 ║
╚══════════════════════════════════════════╝
```

## System Overview

SecureDoc follows a structured flow from document upload through on-chain issuance:

1. **Certificate Upload**
   - An assistant controller uploads the student certificate PDF and enters the registration details.
   - The system extracts the student identity and certificate metadata.

2. **Data Verification**
   - A backend API retrieves the student record from the database.
   - The system compares the PDF data with the stored student information.

3. **AI Review**
   - AI inspects the student history to identify duplicates, mismatches, or suspicious entries.
   - If anomalies appear, the system flags the certificate for manual review.

4. **Manual Approval**
   - The exam controller verifies the final certificate and metadata.
   - On approval, the certificate is signed and prepared for blockchain registration.

5. **Blockchain Anchoring**
   - The certificate hash and issuance metadata are recorded on-chain.
   - This creates an immutable certificate proof that can be verified later.

6. **Student Access**
   - Students receive a secure token, password, or QR code.
   - They can download the certificate PDF and share the verifier link.

7. **Verifier Validation**
   - Verifiers submit the token/password or upload the certificate PDF.
   - The system checks the blockchain record and confirms authenticity.

## Architecture

SecureDoc is organized into separate functional areas:

- `smart-contract/` — upgradeable Solidity contracts, deployment scripts, and test suites. 
## Roles and Responsibilities

- **Assistant Controller** – uploads certificate data and triggers validation.
- **Document Issuer** – approves certificates and initiates blockchain issuance.
- **AI Engine** – detects duplicate certificates and verifies PDF metadata.
- **Student** – receives certificate access tokens and shares credentials.
- **Verifier** – validates certificate authenticity through the platform.

## Getting Started

### Prerequisites

- Node.js and npm/yarn for frontend/API parts
- Foundry for smart contract development
- An Ethereum RPC endpoint for deployment

### Recommended Setup

```bash
cd smart-contract
forge install
forge build
```

For the backend and frontend, follow the respective `README.md` files in `API/`, `mvp/admin/`, and `mvp/client/`.

## Smart Contract Notes

For developer details, see `smart-contract/README.md`.

- UUPS proxy-based upgradeability
- Role-based access control for administrators and issuers
- Certificate issuance, revocation, and verification workflows
- Solidity version `^0.8.30`

## Screenshots

![SecureDoc Interface](https://github.com/ruhulamin1398/SecureDoc__AI_powered_Blockchain-Based-Document-Authentication/assets/43258231/efe566c4-11c0-4d65-819b-86859b5030b9)

## Contributions

Contributions are welcome. Please:

1. Fork the repository.
2. Create a feature branch.
3. Add tests for any new behavior.
4. Submit a pull request.

## License

This project is released under the MIT License.
