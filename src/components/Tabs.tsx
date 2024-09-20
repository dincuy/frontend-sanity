import React from 'react';
import { Nav } from 'react-bootstrap';

type TabProps = {
  tabs: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
};

const Tabs: React.FC<TabProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <Nav variant="tabs" className="tabs">
      {tabs.map((tab) => (
        <Nav.Item key={tab}>
          <Nav.Link
            active={activeTab === tab}
            onClick={() => onTabClick(tab)}
          >
            {tab}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Tabs;
