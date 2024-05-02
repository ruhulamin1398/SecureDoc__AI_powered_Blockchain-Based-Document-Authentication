import { useState, useContext, useEffect } from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined, CheckCircleFilled, WarningOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch, Col, Row, Typography } from 'antd';
const { Text, Link } = Typography;
import { handleDecrypt, handleEncrypt, customShortenAddress } from "../utils/constrants";

import { TransactionContext } from "../context/TransactionContext";
const { Meta } = Card;


function Result() {

  const { isLoading, verificationStatus, verificationResult } = useContext(TransactionContext);


  const getData = () => {


    let decryptedData = handleDecrypt(verificationResult.encryptedData)
    decryptedData = JSON.parse(decryptedData)
    decryptedData = JSON.parse(decryptedData)

    // decryptedData=  JSON.parse(decryptedData);

    // console.log("2 " , decryptedData);  
    // console.log("keys   " , Object.keys(decryptedData))


    return decryptedData;
  }

  const printUploader = (data)=>{
    return "uploaded By : "+data; 
  }

  return (
    <div  >

      {verificationStatus || isLoading ? (<>

        <>
          <Card style={{ width: 600, marginTop: 18 }} loading={isLoading}>
            <Meta
              avatar={<CheckCircleFilled style={{ fontSize: 48, color: '#030' }} />}
              title="This is a valid certificate"
              description= {printUploader(verificationResult.pdfHash)} 
            />

            <Row style={{ marginTop: 20 }}>

              <Col span={18} push={4}>
                {getData().id}
              </Col>

              <Col span={4} pull={18}>
                <Text strong > ID : </Text>
              </Col>

            </Row>
            <Row style={{ marginTop: 20 }}>

              <Col span={18} push={4}>
                {getData().name}
              </Col>

              <Col span={4} pull={18}>
                <Text strong > Name : </Text>
              </Col>

            </Row>
            <Row style={{ marginTop: 20 }}>

              <Col span={18} push={4}>
                {getData().University}
              </Col>

              <Col span={4} pull={18}>
                <Text strong > University : </Text>
              </Col>

            </Row>
            <Row style={{ marginTop: 20 }}>

              <Col span={18} push={4}>
                {getData().CGPA}
              </Col>

              <Col span={4} pull={18}>
                <Text strong > CGPA : </Text>
              </Col>

            </Row>
            <Row style={{ marginTop: 20 }}>

              <Col span={18} push={4}>
                {customShortenAddress(verificationResult.pdfHash, 35)}
              </Col>

              <Col span={4} pull={18}>
                <Text strong >  PDF Hash : </Text>
              </Col>

            </Row>


            <Row style={{ marginTop: 20 }}>

              <Col span={18} push={4}>
                {customShortenAddress(verificationResult.dataHash, 35)}
              </Col>

              <Col span={4} pull={18}>
                <Text strong >  Data Hash : </Text>
              </Col>

            </Row>


            <Row style={{ marginTop: 20 }}>

              <Col span={18} push={4}>
                {customShortenAddress(verificationResult.pdfHash, 35)}
              </Col>

              <Col span={4} pull={18}>
                <Text strong >  PDF Hash : </Text>
              </Col>

            </Row>


          </Card>


        </>


      </>) : (<>

        <Card style={{ width: 600, marginTop: 16 }} loading={isLoading}>
          <Meta
            avatar={<WarningOutlined style={{ fontSize: '46px', color: '#f00' }} />}
            title={verificationResult}
            description="Enter Valid Certificate Hash"
          />
        </Card>






      </>)}

    </div>
  );
}

export default Result;