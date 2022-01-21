import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrencyInput from './CurrencyInput';

afterEach(cleanup);

describe('test Currency Input component', () => {
  it('should Currency Input value change properly', () => {
    let value = '';
    const onChange = jest.fn((e) => {
      value = e.target.value;
    });
    const { getByLabelText, rerender } = render(
      <CurrencyInput id="test" label="input test" value={value} onChange={onChange} />
    );
    const input = getByLabelText('input test');
    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: '2100000' } });
    expect(onChange).toBeCalledTimes(1);
    rerender(<CurrencyInput id="test" label="input test" value={value} onChange={onChange} />);
    expect(input.value).toBe('2.100.000');
  });

  it('should Currency Input separator change properly', () => {
    let value = '';
    const onChange = jest.fn((e) => {
      value = e.target.value;
    });
    const { getByLabelText, rerender } = render(
      <CurrencyInput
        separator=","
        decimalSeparator="."
        decimalsLimit={3}
        id="test"
        label="input test"
        value={value}
        onChange={onChange}
      />
    );
    const input = getByLabelText('input test');
    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: '23000000.50' } });
    expect(onChange).toBeCalledTimes(1);
    rerender(
      <CurrencyInput
        separator=","
        decimalSeparator="."
        decimalsLimit={3}
        id="test"
        label="input test"
        value={value}
        onChange={onChange}
      />
    );
    expect(input.value).toBe('23,000,000.50');
  });

  it('should Currency Input limit with max length properly', () => {
    let value = '';
    const onChange = jest.fn((e) => {
      value = e.target.value;
    });
    const { getByLabelText, rerender } = render(
      <CurrencyInput id="test" label="input test" value={value} maxDigits={6} onChange={onChange} />
    );
    const input = getByLabelText('input test');
    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: '230000' } });
    rerender(
      <CurrencyInput
        separator=","
        id="test"
        label="input test"
        maxDigits={6}
        value={value}
        onChange={onChange}
      />
    );
    expect(input.value).toBe('230,000');
  });

  it('should Currency Input change negative value properly', () => {
    let value = '';
    const onChange = jest.fn((e) => {
      value = e.target.value;
    });
    const { getByLabelText, rerender } = render(
      <CurrencyInput
        id="test"
        allowNegativeValue
        label="input test"
        value={value}
        onChange={onChange}
      />
    );
    const input = getByLabelText('input test');
    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: '-230000' } });
    rerender(
      <CurrencyInput
        allowNegativeValue
        separator=","
        id="test"
        label="input test"
        value={value}
        onChange={onChange}
      />
    );
    expect(input.value).toBe('-230,000');
  });

  it('should Currency Input change decimal part properly', () => {
    let value = '';
    const onChange = jest.fn((e) => {
      value = e.target.value;
    });
    const { getByLabelText, rerender } = render(
      <CurrencyInput
        decimalsLimit={3}
        id="test"
        label="input test"
        value={value}
        onChange={onChange}
      />
    );
    const input = getByLabelText('input test');
    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: '23500,45' } });
    rerender(
      <CurrencyInput
        decimalsLimit={3}
        id="test"
        label="input test"
        value={value}
        onChange={onChange}
      />
    );
    expect(input.value).toBe('23.500,45');
  });

  it('should Currency Input border change on error status', () => {
    const { container } = render(<CurrencyInput status="error" />);
    expect(container.querySelector('div > div > div')).toHaveClass('error');
  });
});
