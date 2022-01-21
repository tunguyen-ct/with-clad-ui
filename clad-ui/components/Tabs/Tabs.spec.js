import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tabs from './Tabs';
import Tab from './Tab';
import ShapeIcon from '../ShapeIcon/ShapeIcon';
import Shop from '../../icons/Shop';

describe('components/Tabs', () => {
  it('should render Tab label text properly', () => {
    const label = 'label A';
    render(<Tab id="tab-index-1" value={1} label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('should render Tab icon label text properly', () => {
    const label = 'label A';
    const ShopIcon = (
      <ShapeIcon size="lg" radius="circle" bg="primary">
        <Shop />
      </ShapeIcon>
    );
    const { container } = render(<Tab id="tab-index-1" value={1} label={label} icon={ShopIcon} />);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('should render Tabs bar properly', () => {
    const labelA = 'label A';
    const labelB = 'label B';
    const Component = () => {
      const [currentTab, setCurrentTab] = useState(0);
      const handleOnchange = (event, value) => {
        event.preventDefault();
        setCurrentTab(value);
      };
      return (
        <Tabs onChange={handleOnchange} value={currentTab}>
          <Tab id="tab-index-1" value={0} label={labelA} />
          <Tab id="tab-index-2" value={1} label={labelB} />
        </Tabs>
      );
    };
    const { container } = render(<Component />);
    const tabOne = container.querySelector('#tab-index-1');
    const tabTwo = container.querySelector('#tab-index-2');
    const [, tabOneIndicator] = tabOne.querySelectorAll('span');

    expect(screen.getByText(labelA)).toBeInTheDocument();
    expect(tabOneIndicator).toBeInTheDocument();
    // change tab
    fireEvent.click(tabTwo);
    const [, tabTwoIndicator] = tabTwo.querySelectorAll('span');
    expect(tabTwoIndicator).toBeInTheDocument();
  });
});
