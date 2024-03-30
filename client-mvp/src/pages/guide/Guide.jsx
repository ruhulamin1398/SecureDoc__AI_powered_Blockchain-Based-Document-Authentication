import { useState } from 'react';
import { Col, Row } from 'antd';
import './Guide.css';
import Introduction from '../../components/guide-components/guide-introduction/GuideIntro';
import FAQ from '../../components/guide-components/FAQ/FAQ';
import QuickStart from '../../components/guide-components/quick-start/QuickStart';
import RecipientExperience from '../../components/guide-components/recipient-experience/RecipientExperience';

const Guide = () => {
  const [activeComponent, setActiveComponent] = useState('Introduction');

  const handleItemClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Introduction':
        return <Introduction />;
      case 'FAQ':
        return <FAQ />;
      case 'QuickStart':
        return <QuickStart />;
      case 'RecipientExperience':
        return <RecipientExperience />;
      default:
        return null;
    }
  };

  return (
    <div className="guide-wrapper">
      <Row className="guide-inner-wrapper">
        <Col span={6} className="font-ibm">
          {/* List of items on the left */}
          <h4 className="guide-left-intro">TABLE OF CONTENTS</h4>
          <p className={`guide-left-text ${activeComponent === 'Introduction' && 'active'}`} onClick={() => handleItemClick('Introduction')}>Introduction</p>
          <p className={`guide-left-text ${activeComponent === 'FAQ' && 'active'}`} onClick={() => handleItemClick('FAQ')}>FAQ</p>
          <p className={`guide-left-text ${activeComponent === 'QuickStart' && 'active'}`} onClick={() => handleItemClick('QuickStart')}>Quick Start</p>
          <p className={`guide-left-text ${activeComponent === 'RecipientExperience' && 'active'}`} onClick={() => handleItemClick('RecipientExperience')}>Recipient Experience</p>
        </Col>
        <Col span={16} className="font-ibm">
          {renderActiveComponent()}
        </Col>
      </Row>
    </div>
  );
};

export default Guide;
