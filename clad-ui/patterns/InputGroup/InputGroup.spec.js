import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputGroup from './InputGroup';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';

afterEach(cleanup);

describe('components/InputGroup', () => {
  it('should handle value properly', () => {
    let value = 'chotot.com';
    const onChange = jest.fn((event) => {
      value = event.target.value;
    });
    const result = render(
      <InputGroup>
        <Button type="primary">Button</Button>
        <Input id="test" label="Test 1" value={value} onChange={onChange} />
      </InputGroup>
    );
    const input = result.container.querySelector('#test');
    expect(input.value).toBe('chotot.com');
  });

  it('should have text button properly', () => {
    let value = 'chotot.com';
    const onChange = jest.fn((event) => {
      value = event.target.value;
    });
    const result = render(
      <InputGroup>
        <Button type="primary">Button 1</Button>
        <Input id="test" label="Test 1" value={value} onChange={onChange} />
      </InputGroup>
    );
    const linkElement = result.getByText(/Button 1/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should render dropdown properly', () => {
    const result = render(
      <InputGroup>
        <Button type="primary">Button 1</Button>
        <Dropdown
          width="third"
          label="Unit 2"
          options={[
            { value: 'km', label: 'km' },
            { value: 'm', label: 'm' },
          ]}
        />
      </InputGroup>
    );
    expect(result.innerHTML).toMatchSnapshot();
  });
});
