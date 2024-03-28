import { Divider, Image } from "antd";
import quickStartImage from "./images/issuing_process.png";

const QuickStart = () => {
  return (
    <div>
      <div>
        <h1 className="guide-title">Quick Start</h1>
        <Divider />

        <div>
          <h3 className="guide-subtitle">Viewing and verifying certificates</h3>
          <p className="guide-text">
            The easiest way for developers to get familiar with Blockchain
            Certificates is to clone the blockcerts-verifier repo and perform
            the steps in the README to launch. After this, you will be able to
            view and verify sample certificates locally.
            <br />
            <br />
            Developers wishing to create their own UI but leverage Blockcerts
            tooling for verification can use the cert-verifier-js project. This
            Javascript library for Blockcerts verification can be used in a
            Node.js app or a browser. We are currently using this library for
            blockcerts-verifier, the Blockcerts iOS wallet, and the Android
            wallet.
            <br />
            <br />
            If developing a separate library or those looking for more
            information about the verification process, that can be found here.
            <br />
            <br />
            Some examples of certificates can be found in the cert-schema repo.
          </p>
          <h3 className="guide-subtitle">Community Forum</h3>
          <Image src={quickStartImage} preview={false} />

          <p className="guide-text">
            You can create, issue, and view your own certificates in test modes,
            which doesn’t require spending Bitcoin. We highly recommend trying
            this process in test mode before issuing certificates on the live
            Bitcoin blockchain.
            <br />
            <br />
            The full process is:
            <br />
            <br />
            Create certificates with cert-tools or skip this step to use the
            sample ones in cert-issuer.
            <br />
            Copy the certificates and issue them with cert-issuer. Follow the
            quick-start-using-docker guide to get started easily.
            <br />
            Run the blockcerts-verifier project to verify the certificates you
            just issued. You can drag and drop them directly onto the browser.
            <br />
            Import them into the iOS wallet or the Android wallet to verify them
            there as well.
          </p>
          <h1 className="guide-title">Repository Summary</h1>
          <Divider />
          <p className="guide-text">
            Below is a quick summary of the main Blockcerts repositories we have
            that are currently in use. Check out the README.md page for each of
            them to get a better understanding.
            <br />
            <br />
            cert-schema: The schemas and specifications for Blockcerts. Includes
            a python library for verifying schema & JSON-LD.
            <br />
            cert-tools: Python library for creating customizable Blockcerts for
            a list of recipients.
            <br />
            cert-issuer: Python library for issuing Blockcerts onto the Bitcoin
            or Ethereum blockchain.
            <br />
            cert-verifier-js: Javascript library for Blockcerts verification
            that can be used in a Node.js app or a browser.
            <br />
            blockcerts-verifier: A standalone universal viewer & verifier for
            Blockcerts credentials.
            <br />
            wallet-iOS: iOS wallet for adding Blockcerts issuers, maintaining
            keys, and holding Blockcerts.
            <br />
            wallet-android: Android wallet for adding Blockcerts issuers,
            maintaining keys, and holding Blockcerts.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickStart;
