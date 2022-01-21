import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import CurrencyInput from '../../components/CurrencyInput/CurrencyInput';
import GiftOutline from '../../icons/GiftOutline';
import PhoneOutline from '../../icons/PhoneOutline';
import Info from '../../icons/Info';
import InputGroup from './InputGroup';
import { guideImageClass } from '../../storybook/components/GuideImage';

const inputStories = {
  title: 'Patterns/Input Group',
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component: `Input Group is a pattern that allow grouping Inputs, Buttons and Dropdowns together.

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/jgjzy49)

## How to use

Input Group is used for grouping components (Input, Button, Dropdown) into a combined unit.

Below are examples from group of components:

<img className="${guideImageClass}" src="./input-group-how.png" />
`,
      },
    },
  },
  argTypes: {
    children: {
      defaultValue:
        'Should be Input, Dropwdown or Button',
      control: {
        type: 'text',
      },
    },
  },
};

export default inputStories;

export const Overview = (args) => (
  <InputGroup
    {...args}
  >
    <Button type="primary">
      Button
    </Button>
    <Input
      label="Label cum placeholder..."
    />
    <Dropdown
      width="third"
      label="Unit"
      options={[
        { value: 'km', label: 'km' },
        { value: 'm', label: 'm' },
      ]}
    />
  </InputGroup>
);


export const WithHelptext = () => (
  <InputGroup
    helptext="Help Text"
  >
    <Button type="primary">
      Button
    </Button>
    <Input
      label="Label cum placeholder..."
    />
  </InputGroup>
);

WithHelptext.parameters = {
  docs: {
    description: {
      story: 'Help text is the small caption below the input box',
    },
  },
};


export const ErrorStatus = () => (
  <InputGroup
    status="error"
    helptext="Error Text"
  >
    <Button type="primary">
      Button
    </Button>
    <Input
      label="Label cum placeholder..."
    />
  </InputGroup>
);

ErrorStatus.parameters = {
  docs: {
    description: {
      story:
        'Set `status="error"` will let Input has red borders and helpText, indicate error status.',
    },
  },
};

export const UnitDropdownExample = () => (
  <InputGroup>
    <Input
      required
      label="Diện tích nhà đất"
    />
    <Dropdown
      width="third"
      label=""
      value="m2"
      options={[
        { value: 'm2', label: 'm2' },
        { value: 'm', label: 'm' },
      ]}
    />
  </InputGroup>
);

UnitDropdownExample.storyName = 'Ex: Input + Unit Dropdown';

export const CurrencyExample = () => {
  const [value, setValue] = useState('');
  return (
    <InputGroup>
      <Button color="positive" size="large">
        <GiftOutline />
      </Button>

      <CurrencyInput
        allowNegativeValue
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Amount"
      />
      <Dropdown
        width="third"
        label=""
        value="year"
        options={[
          { value: 'year', label: 'per year' },
          { value: 'month', label: 'per month' },
        ]}
      />
    </InputGroup>
  );
};

CurrencyExample.storyName = 'Ex: Currency Input + Unit Dropdown';

export const CombinedButtonExample = () => (
  <InputGroup>
    <Button type="primary" size="large">
      Button 1
    </Button>
    <Button type="primary" size="large" color="info">
      Button 2
    </Button>
    <Button color="positive" size="large">
      <GiftOutline />
    </Button>
    <Button color="critical" size="large">
      <PhoneOutline />
    </Button>
  </InputGroup>
);

CombinedButtonExample.storyName = 'Ex: Button + Button';


export const CombinedButtonInputDropdOwnExample = () => (
  <InputGroup>
    <Button type="primary" size="large">
      <Info />
    </Button>
    <Input
      required
      label="Diện tích nhà đất"
    />
    <Dropdown
      width="third"
      label=""
      value="m2"
      options={[
        { value: 'm2', label: 'm2' },
        { value: 'm', label: 'm' },
      ]}
    />
  </InputGroup>
);

CombinedButtonInputDropdOwnExample.storyName = 'Ex: Button + Input + Dropdown';
