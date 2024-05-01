import "./Certificate.css";
import CV from "../../../../assets/pdf/White and Gold Certificate of Appreciation.png";
import { Col, Image, Row } from "antd";

const Certificate = () => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <h1 className="font-ibm name-title">
            Name: <span className="name-span">Raisul Karim</span>
          </h1>
          <h2 className="name-title">
            Registration: <span className="name-span">33456167</span>
          </h2>
        </Col>
        <Col span={12}>
          <Image src={CV} preview={false} />
        </Col>
      </Row>
    </div>
  );
};

export default Certificate;
