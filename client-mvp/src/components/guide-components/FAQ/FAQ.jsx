import { Divider } from "antd";

const FAQ = () => {
  return (
    <div>
      <h1 className="guide-title">FAQ</h1>
      <Divider />
      <div>
        <h3 className="guide-subtitle">
          Which blockchain does Blockcerts use?
        </h3>
        <p className="guide-text">
          Blockcerts was built as a technical standard to work across any
          blockchain. It started in 2016 with the Bitcoin blockchain and then
          soon expanded to Ethereum. Development work continues for making
          Blockcerts to work across public chains, and to be easily extended for
          private chains as well.
        </p>
        <h3 className="guide-subtitle">
          Is private information now available on the blockchain?
        </h3>
        <p className="guide-text">
          The short answer is no. What is stored on the blockchain is a 1-way
          hash. This makes it useful only for verification; i.e. you can hash a
          certificate and compare to what is on the blockchain. And given what
          is on the blockchain, the original data cannot be feasibly recovered.
          This makes it easy for a recipient to reveal a certificate only to
          intended third parties.
        </p>
        <h3 className="guide-subtitle">
          Are blockchain certificates tamper-proof?
        </h3>
        <p className="guide-text">
          Yes, the blockchain is an immutable and distributed store of
          transactions, with each block building upon the last. When a
          certificate is issued, its data is compressed into a hash and logged
          on the blockchain. This generates a “receipt” that can always be
          checked at a later date. The verification service validates the
          signature of the issuer and the certificate data; it also ensures that
          the certificate status has not expired or been revoked.
          <br /> <br />
          The friendly version of the certificate displayed online may shift
          visually, depending on the device displaying it. For instance, it may
          appear one way in a mobile app and slightly differently in a web
          browser. While this display may be optimized for different
          circumstances, the data within the certificate can never be changed.
        </p>
        <h3 className="guide-subtitle">
          Can blockchain certificates be spoofed?
        </h3>
        <p className="guide-text">
          The friendly display of certificates could be spoofed to trick a
          non-technical viewer. This is why it is important to use a separate
          verification service when circumstances are important. While the
          issuer may include a friendly verification button below a certificate,
          the most secure way to ensure a certificate is valid is to use a
          separate verification service to check the blockchain. That cannot be
          spoofed.
        </p>
        <h3 className="guide-subtitle">Can issued certificates be edited?</h3>
        <p className="guide-text">
          Certificates are immutable and cannot be updated. We recommend
          defining batches as a logical grouping of recipients that are not
          expected to change, e.g. “Graduates of 2017” vs “Graduates.” The
          issuer may revoke certificates that have mistakes, or, if they simply
          left out an eligible recipient, the issuer may issue another batch.
        </p>
        <h3 className="guide-subtitle">
          Can blockchain certificates allow for selective disclosure of
          information?
        </h3>
        <p className="guide-text">
          In general, we anticipate the need for a range of solutions balancing
          convenience, privacy, and security. For example, a recipient may want
          it to be easy for third parties to view and verify that they graduated
          with a B.A. from a university with a certain GPA, but only want to
          expose basic transcript information.
          <br />
          <br />
          This can currently be achieved through issuing separate certificates,
          one for high-level information and another with detailed personal
          information for use in very specific situations.
          <br />
          <br />
          Fully-featured selective disclosure within a single certificate is
          theoretically possible by spreading the contents of a document across
          a merkle tree. This may be addressed in future releases.
        </p>
        <h3 className="guide-subtitle">
          Can an issuer create a public catalog of issued certificates?
        </h3>
        <p className="guide-text">
          Issuers must handle recipient information with care. In some previous
          deployments, participants (issuers and recipients) have chosen to make
          the original certificates easily discoverable through a certificate
          web site. This is because the certificates didn’t contain private or
          sensitive information, and the recipients wanted to promote their
          certificates.
          <br /> <br />
          However, certificates containing personal information, such as the
          recipient’s address, should be shielded from public disclosure. So,
          the basic implementation can omit this certificate browsing
          capability. This is similar to the Proof of Existence approach, which
          avoids disclosing any information unless the recipient chooses to do
          so.
        </p>
        <h3 className="guide-subtitle">
          Why use a blockchain instead of a PKI infrastructure?
        </h3>
        <p className="guide-text">
          In Blockcerts, the issuer uses their digital signature to provide a
          credential to a recipient, identified by a recipient-owned public key,
          and issued on the blockchain. The recipient’s credential contains the
          Merkle proof linking the credential with a specific blockchain
          transaction. This is used to establish integrity of the credential;
          i.e. that it hasn’t been tampered with. Additionally, the
          recipient-owned public key embedded in the credentials allows the
          recipient to prove ownership.
          <br />
          <br />
          To establish authenticity, one must establish that the issuer owned
          the issuing key at the time the credential was issued. This is why a
          reliable timestamp is needed. This could be done through use of a
          timestamping authority (TSA) – more commonly used in a PKI solution –
          but that places a dependency on a trusted third party.
          <br />
          <br />
          In contrast, blockchain provides permanent, trusted timestamping by
          design. It requires massive computational effort – rewriting the
          entire blockchain – to tamper with the timestamps. Read more on
          blockcerts wiki
        </p>
        <h3 className="guide-subtitle">
          What exactly is in the Bitcoin transaction?
        </h3>
        <p className="guide-text">
          One Bitcoin transaction is performed for every batch of certificates.
          There is no limit to the number of certificates that may be included
          in a batch, so typically batches are defined in logical groups such as
          “Graduates of Fall 2017 Robotics Class”.
          <br />
          <br />
          The transaction inputs and outputs are as follows:
          <br />
          <br />
          Input:
          <br />
          Minimal amount of bitcoin (currently ~$.80 USD) from Issuer’s Bitcoin
          address Outputs:
          <br />
          OP_RETURN field, storing a hash of the batch of certificates Optional:
          change to an issuer address
          <br />
          The OP_RETURN output is used to prove the validity of the certificate
          batch. This output stores data, which is the hash of the Merkle root
          of the certificate batch. At any time, we can look up this value on
          the blockchain to help confirm a claim
        </p>
        <h3 className="guide-subtitle">What is an OP_RETURN code?</h3>
        <p className="guide-text">
          A Bitcoin transaction is determined by the size of the transaction and
          the transaction fee. Blockcerts transaction sizes are static and small
          – they add a single fixed-size OP_RETURN output on top of a standard
          single-input, single-output transaction. This is true no matter the
          number of certificates in a batch.
          <br />
          <br />
          So the cost to issue a batch of Blockcerts is largely influenced by
          the transaction fee, which is a fee paid to miners to ensure timely
          mining of transactions. The recommended fee changes over time; current
          recommended values can be obtained from ‘To get in next block’ of
          Recommended Bitcoin Network Transaction Fees.
          <br />
          <br />
          In the cert-issuer project, the transaction fee is configurable. The
          default value was selected as a higher value to reduce wait time. This
          setting can be overridden in the config file to reduce the cost, but
          it may result in long waits.
        </p>
        <h3 className="guide-subtitle">What determines the cost?</h3>
        <p className="guide-text">
          A Bitcoin transaction is determined by the size of the transaction and
          the transaction fee.
          <br />
          <br />
          Blockcerts transaction sizes are static and small – they add a single
          fixed-size OP_RETURN output on top of a standard single-input,
          single-output transaction. This is true no matter the number of
          certificates in a batch.
          <br />
          <br />
          So the cost to issue a batch of Blockcerts is largely influenced by
          the transaction fee, which is a fee paid to miners to ensure timely
          mining of transactions. The recommended fee changes over time; current
          recommended values can be obtained from ‘To get in next block’ of
          Recommended Bitcoin Network Transaction Fees.
          <br />
          <br />
          In the cert-issuer project, the transaction fee is configurable. The
          default value was selected as a higher value to reduce wait time. This
          setting can be overridden in the config file to reduce the cost, but
          it may result in long waits.
        </p>
        <h3 className="guide-subtitle">
          Does this project prove the identity of an individual or issuer?
        </h3>
        <p className="guide-text">
          Blockcerts has a claims-orientation to identity. This means that
          identity is always self-curated by the individual through the claims
          about themselves that they disclose. All claims have to be assessed in
          some manner. Those claims that are blockchain verifiable are
          guaranteed to represent what was originally issued. So, Blockcerts is
          not attempting to prove identity directly. In other words, this
          solution does not certify the mapping of public keys to individuals or
          organizations. Further, there is no registration process in this
          system, so any issuer may issue certificates and recipients may
          provide any Bitcoin address. However, it is in the issuer’s and
          recipient’s interest to provide public addresses they own, because
          this is the only way either can demonstrate ownership of or revoke
          certificates.
        </p>
        <h3 className="guide-subtitle">
          Why is identity separate from claims?
        </h3>
        <p className="guide-text">
          The primary reason is that separation of identity is desirable from an
          architectural layering perspective. For a certification system, it’s
          reasonable that adopters will want to establish identity in different
          ways, and we want to give them this flexibility. At the same time, our
          design doesn’t preclude identity association. Since the Bitcoin
          addresses can be any address, recipients and issuers can choose ones
          associated with a curated profile (e.g. Blockstack profiles).
        </p>
        <h3 className="guide-subtitle">
          How do you know a certificate is valid?
        </h3>
        <p className="guide-text">
          The verification process answers questions about the certificate’s
          integrity and validity:
          <br />
          <br />
          Is the certificate the same as when the issuer issued it? (i.e. How do
          I know it wasn’t tampered with?)
          <br />
          Was the certificate revoked?
          <br />
          The verification process ensures that the certificate you see wasn’t
          tampered with by comparing hashes with what is registered on the
          blockchain. It ensures the certificate wasn’t revoked through a
          convention that relies on spending transaction outputs. See detailed
          steps.
        </p>
        <h3 className="guide-subtitle">
          How does the issuer or recipient prove their association with a
          certificate?
        </h3>
        <p className="guide-text">
          This codebase allows the issuer and the recipient to make
          cryptographically strong claims: if either party owns a certificate’s
          issued-by or issued-to address, then they can also sign a statement
          with their corresponding private key. Only the owner of the
          corresponding private key can do this.
          <br />
          The wallet (mobile app) and issuer software will provide a capacity to
          prove ownership if requested. Currently, the issuer provides a link to
          their credentials in the certificate, and the standard validation
          process performs a cryptographic check that the public key at that
          link actually signed the certificate.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
