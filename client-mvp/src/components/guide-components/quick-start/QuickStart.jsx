import { Divider } from "antd";

const QuickStart = () => {
    return (
        <div>
            <div>
      <h1 className="guide-title">Quick Start</h1>
      <Divider />
      <p className="guide-text">
        Blockcerts is an open standard for building apps that issue and verify
        blockchain-based official records. These may include certificates for
        civic records, academic credentials, professional licenses, workforce
        development, and more.
        <br />
        <br />
        Blockcerts consists of open-source libraries, tools, and mobile apps
        enabling a decentralized, standards-based, recipient-centric ecosystem,
        enabling trustless verification through blockchain technologies.
        <br />
        <br />
        Blockcerts uses and encourages consolidation on open standards.
        Blockcerts is committed to self-sovereign identity of all participants,
        and enabling recipient control of their claims through easy-to-use tools
        such as the certificate wallet (mobile app). Blockcerts is also
        committed to availability of credentials, without single points of
        failure.
        <br />
        <br />
        These open-source repos may be utilized by other research projects and
        commercial developers. It contains components for creating, issuing,
        viewing, and verifying certificates across any blockchain. These
        components form all the parts needed for a complete ecosystem.
      </p>

      <div>
        <h3 className="guide-subtitle">How it Works</h3>
        {/* <Image src={HowItWorks} preview={false} /> */}
      </div>

      <div>
        <h3 className="guide-subtitle">Community Forum</h3>
        <p className="guide-text">
          To get involved with the community as a developer, or simply a
          supporter, join the public community forum. The Blockcerts forum is
          the place to get started, whether it be asking technical questions,
          posing topics for discussion, or simply sharing news. Join the
          Community!
        </p>
      </div>
    </div>
        </div>
    );
};

export default QuickStart;