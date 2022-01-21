import React, { useState, useRef, useCallback } from 'react';
import theme from '@clad-ui/theme';
import debounce from 'lodash/debounce';
import CurrencyInput from './CurrencyInput';
import Grid from '../Grid/Grid';
import Col from '../Grid/Col';

const { sizes } = theme;

const currencyInputStories = {
  title: 'Components/Inputs/Currency Input',
  component: CurrencyInput,
  parameters: {
    docs: {
      description: {
        component: `CurrencyInput component allows users to input money amount with numeric keyboard, automatic thousand separators, currency indicator

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/Vr0G2dw)
`,
      },
    },
  },
  argTypes: {
    label: {
      defaultValue: 'Amount (VND)',
    },
    helptext: {
      defaultValue: 'Please enter whole amount',
    },
    disabled: {},
    required: {},
    status: {},
    width: { options: Object.keys(sizes) },
    suffix: {},
    allowNegativeValue: {},
    decimalsLimit: {},
    maxDigits: {},
    id: { control: null },
    name: { control: null },
    value: { control: null },
    onChange: { control: null },
    onFormatChange: { control: null },
    onBlur: { control: null },
    onFocus: { control: null },
    inputRef: { control: null },
  },
};

export default currencyInputStories;

// top-most story will have the props breakdown
export const Overview = (args) => {
  const [value, setValue] = useState('');
  return (
    <>
      <Grid rowCols={[1, 2]}>
        <Col>
          <CurrencyInput {...args} value={value} onChange={(e) => setValue(e.target.value)} />
        </Col>
      </Grid>
      <p>Input value: {value || 'Please enter something.'}</p>
    </>
  );
};

export const ValueBinding = () => {
  const [value, setValue] = useState('');
  const [formatValue, setFormatValue] = useState('');

  return (
    <>
      <Grid rowCols={[1, 2]}>
        <Col>
          <CurrencyInput
            allowNegativeValue
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFormatChange={(v) => setFormatValue(v)}
            label="Amount (VND)"
          />
        </Col>
      </Grid>
      <p>
        Formatted Value with <b>onFormatChange</b>: {formatValue || 'Please enter something.'}
      </p>
      <p>
        Event Value with <b>onChange (e.target.value)</b>: {value || 'Please enter something.'}
      </p>
    </>
  );
};

ValueBinding.parameters = {
  docs: {
    description: {
      story: 'Currently, Input only support controlled HTML &lt;input /&gt;',
    },
  },
};

export const Required = () => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <CurrencyInput
          label="Required input"
          required
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Col>
    </Grid>
  );
};

Required.parameters = {
  docs: {
    description: {
      story:
        'Enable `required` will let Input display a red * on the label but validation is not forced for now',
    },
  },
};

export const ErrorStatus = () => {
  const [value, setValue] = useState('');
  const status = !value ? 'error' : 'default';
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <CurrencyInput
          status={status}
          label="Required input"
          helptext="is required"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      </Col>
    </Grid>
  );
};

ErrorStatus.parameters = {
  docs: {
    description: {
      story:
        'Set `status="error"` will let Input has red borders and helpText, indicate error status.',
    },
  },
};

export const Disabled = () => (
  <Grid rowCols={[1, 2]}>
    <Col>
      <CurrencyInput allowNegativeValue value={-11111.222} label="Read only" disabled />
    </Col>
  </Grid>
);

Disabled.parameters = {
  docs: {
    description: {
      story:
        'Enable `disabled` will set attribute `disabled` to the HTML input. Effectively, disabled input is read-only.',
    },
  },
};

export const DebounceExample = () => {
  const inputRef = useRef(null);
  const [text, setText] = useState('');

  const handleFetch = useCallback(
    debounce(() => {
      const { value } = inputRef.current;
      // eslint-disable-next-line no-alert
      if (value) alert('Searching for: ' + value);
    }, 1000),
    []
  );
  const handleInputChange = (e) => {
    setText(e.target.value);
    handleFetch();
  };

  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <CurrencyInput
          value={text}
          onChange={handleInputChange}
          label="Search input example"
          inputRef={inputRef}
        />
      </Col>
    </Grid>
  );
};

DebounceExample.storyName = 'Ex: Debounce onChange';
