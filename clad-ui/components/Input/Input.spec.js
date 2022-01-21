import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

afterEach(cleanup);

describe('components/Input', () => {
  it('should handle value properly', () => {
    let value = '';
    const onChange = jest.fn((event) => {
      value = event.target.value;
    });
    const { getByLabelText, rerender } = render(
      <Input id="test" label="input test" value={value} onChange={onChange} />
    );
    const input = getByLabelText('input test');
    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: 'chotot.com' } });
    expect(onChange).toBeCalledTimes(1);
    rerender(<Input id="test" label="input test" value={value} onChange={onChange} />);
    expect(input.value).toBe('chotot.com');
  });

  it('should handle type="number" properly', () => {
    let value = '';

    // test for invalid value cases
    const onInvalidChange = jest.fn((event) => {
      value = event.target.value;
    });
    const { getByLabelText: getInvalidInputLabel, rerender: rerenderInvalidInputValue } = render(
      <Input id="test" type="number" label="input test" value={value} onChange={onInvalidChange} />
    );
    const invalidInput = getInvalidInputLabel('input test');
    expect(invalidInput.value).toBe('');

    fireEvent.change(invalidInput, { target: { value: '--2' } });
    expect(onInvalidChange).toBeCalledTimes(0);
    rerenderInvalidInputValue(
      <Input id="test" type="number" label="input test" value={value} onChange={onInvalidChange} />
    );
    expect(invalidInput.value).toBe('');

    fireEvent.change(invalidInput, { target: { value: '++2' } });
    expect(onInvalidChange).toBeCalledTimes(0);
    rerenderInvalidInputValue(
      <Input id="test" type="number" label="input test" value={value} onChange={onInvalidChange} />
    );
    expect(invalidInput.value).toBe('');

    fireEvent.change(invalidInput, { target: { value: '12345-' } });
    expect(onInvalidChange).toBeCalledTimes(0);
    rerenderInvalidInputValue(
      <Input id="test" type="number" label="input test" value={value} onChange={onInvalidChange} />
    );
    expect(invalidInput.value).toBe('');

    fireEvent.change(invalidInput, { target: { value: '12345++' } });
    expect(onInvalidChange).toBeCalledTimes(0);
    rerenderInvalidInputValue(
      <Input id="test" type="number" label="input test" value={value} onChange={onInvalidChange} />
    );
    expect(invalidInput.value).toBe('');

    // test for valid negative value case
    value = '';
    const onValidNegativeChange = jest.fn((event) => {
      value = event.target.value;
    });
    const {
      getByLabelText: getValidNegativeInputLabel,
      rerender: rerenderValidNegativeInput,
    } = render(
      <Input
        id="test-negative"
        type="number"
        label="input test negative"
        value={value}
        onChange={onValidNegativeChange}
      />
    );
    const validNegativeInput = getValidNegativeInputLabel('input test negative');
    expect(validNegativeInput.value).toBe('');

    fireEvent.change(validNegativeInput, { target: { value: '-2' } });
    expect(onValidNegativeChange).toBeCalledTimes(1);
    rerenderValidNegativeInput(
      <Input
        id="test-negative"
        type="number"
        label="input test negative"
        value={value}
        onChange={onValidNegativeChange}
      />
    );
    expect(validNegativeInput.value).toBe('-2');

    // test for valid positive value case
    value = '';
    const onValidPositiveChange = jest.fn((event) => {
      value = event.target.value;
    });
    const {
      getByLabelText: getValidPositiveInputLabel,
      rerender: rerenderValidPositiveInput,
    } = render(
      <Input
        id="test-positive"
        type="number"
        label="input test positive"
        value={value}
        onChange={onValidPositiveChange}
      />
    );
    const validPositiveInput = getValidPositiveInputLabel('input test positive');
    expect(validPositiveInput.value).toBe('');

    fireEvent.change(validPositiveInput, { target: { value: '12345' } });
    expect(onValidPositiveChange).toBeCalledTimes(1);
    rerenderValidPositiveInput(
      <Input
        id="test-positive"
        type="number"
        label="input test positive"
        value={value}
        onChange={onValidPositiveChange}
      />
    );
    expect(validPositiveInput.value).toBe('12345');
  });

  it('should empty value when clear button clicked', () => {
    let value = 'chotot.com';
    const onChange = jest.fn((event) => {
      value = event.target.value;
    });
    const { getByLabelText, getByRole, rerender } = render(
      <Input id="test" label="input test" value={value} onChange={onChange} allowClear />
    );
    const input = getByLabelText('input test');
    expect(input.value).toBe('chotot.com');

    const clearBtn = getByRole('button');
    fireEvent.click(clearBtn);
    expect(onChange).toBeCalledTimes(1);
    rerender(<Input id="test" label="input test" value={value} onChange={onChange} allowClear />);
    expect(input.value).toBe('');
  });

  it('should show password when show password button clicked', () => {
    const { getByRole, rerender, container } = render(
      <Input type="password" showPassword value="my password" />
    );
    const showPasswordBtn = getByRole('button');
    fireEvent.click(showPasswordBtn);
    rerender(<Input type="password" showPassword value="my password" />);
    // show password button turns type="password" into type="text"
    expect(container.querySelector('input[type="text"]')).not.toBeNull();

    fireEvent.click(showPasswordBtn);
    rerender(<Input type="password" showPassword value="my password" />);
    // hide password button turn type="text" into type="password"
    expect(container.querySelector('input[type="password"]')).not.toBeNull();
  });

  it('should change border on error status', () => {
    const { container } = render(<Input status="error" />);
    expect(container.querySelector('div > div > div')).toHaveClass('error');
  });

  it('should render tooltip', () => {
    const { container } = render(<Input tooltip="tooltip" />);
    expect(container.querySelector('.tooltip-right')).toBeDefined();
  });
});
