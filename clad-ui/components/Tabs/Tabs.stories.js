import React, { useState } from 'react';
import propTypes from 'prop-types';
import Tab from './Tab';
import Tabs from './Tabs';
import Suitcase from '../../icons/Suitcase';
import Shop from '../../icons/Shop';
import ShapeIcon from '../ShapeIcon/ShapeIcon';

const tabsStories = {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: { Tab },
  parameters: {
    docs: {
      description: {
        component: `Tabs is used to navigate between groups of content that are related and at the same level of hierarchy.

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/oY8Z2MD)
          `,
      },
    },
  },
  argTypes: {
    variant: {
      options: ['fullWidth', 'standard'],
      control: {
        type: 'select',
      },
    },
    children: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
    value: {
      control: { disable: true },
    },
  },
};

export default tabsStories;

const SuitcaseIcon = (
  <ShapeIcon size="lg" radius="circle" bg="primary" color="white">
    <Suitcase />
  </ShapeIcon>
);

const ShopIcon = (
  <ShapeIcon size="lg" radius="circle" bg="primary" color="white">
    <Shop />
  </ShapeIcon>
);

const AppStory = (props) => (
  <div
    style={{
      width: '50%',
      boxShadow: '2px 2px 14px rgba(0,0,0,.3)',
    }}
  >
    {props.children}
  </div>
);

AppStory.propTypes = { children: propTypes.node.isRequired };

export const Overview = (args) => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleOnchange = (event, value) => {
    event.preventDefault();
    setCurrentTab(value);
  };
  return (
    <AppStory>
      <Tabs variant="fullWidth" {...args} value={currentTab} onChange={handleOnchange}>
        <Tab id="tab-0" value={0} label="Tất cả" />
        <Tab id="tab-1" value={1} label="Cá nhân" />
        <Tab id="tab-2" value={2} label="Bán chuyên" />
      </Tabs>
      <div style={{ padding: 16 }}>{`Item ${currentTab}`}</div>
    </AppStory>
  );
};

Overview.args = {
  variant: 'fullWidth',
};

export const WithIconMobile = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleOnchange = (event, value) => {
    event.preventDefault();
    setCurrentTab(value);
  };
  return (
    <AppStory>
      <Tabs value={currentTab} onChange={handleOnchange}>
        <Tab value={0} label="Tiêu đề A" icon={SuitcaseIcon} />
        <Tab value={1} label="Tiêu đề B" icon={ShopIcon} />
      </Tabs>
    </AppStory>
  );
};

export const WithIconDesktop = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleOnchange = (event, value) => {
    event.preventDefault();
    setCurrentTab(value);
  };
  return (
    <AppStory>
      <Tabs value={currentTab} onChange={handleOnchange}>
        <Tab variant="desktop" value={0} label="Tiêu đề A" icon={SuitcaseIcon} />
        <Tab variant="desktop" value={1} label="Tiêu đề B" icon={ShopIcon} />
      </Tabs>
    </AppStory>
  );
};

export const Scrollable = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleOnchange = (event, value) => {
    event.preventDefault();
    setCurrentTab(value);
  };
  return (
    <AppStory>
      <Tabs value={currentTab} onChange={handleOnchange}>
        <Tab variant="desktop" value={0} label="Tiêu đề A" icon={SuitcaseIcon} />
        <Tab variant="desktop" value={1} label="Tiêu đề B" icon={ShopIcon} />
        <Tab variant="desktop" value={2} label="Tiêu đề B" icon={ShopIcon} />
        <Tab variant="desktop" value={3} label="Tiêu đề B" icon={ShopIcon} />
        <Tab variant="desktop" value={4} label="Tiêu đề B" icon={ShopIcon} />
      </Tabs>
    </AppStory>
  );
};

export const WithHrefLink = () => (
  <AppStory>
    <Tabs variant="fullWidth" value={0}>
      <Tab
        as="a"
        href="http://localhost:8000/?path=/docs/components-tabs--overview"
        value={0}
        label="Tất cả"
      />
      <Tab
        as="a"
        href="http://localhost:8000/?path=/docs/components-tabs--overview"
        value={1}
        label="Cá nhân"
      />
      <Tab
        as="a"
        href="http://localhost:8000/?path=/docs/components-tabs--overview"
        value={2}
        label="Bán chuyên"
      />
    </Tabs>
  </AppStory>
);
