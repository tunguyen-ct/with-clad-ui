import React, { useState, useRef } from 'react';
import { css } from 'linaria';
import theme from '@clad-ui/theme';
import Dropdown from './Dropdown';
import Grid from '../Grid/Grid';
import Col from '../Grid/Col';
import Popup from '../../patterns/Popup/Popup';
import Button from '../Button/Button';

const { sizes } = theme;

const defaultDropdown = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: `Dropdown component that wraps around HTML Select element.

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/QbbMRp7)
`,
      },
    },
  },
  argTypes: {
    options: {
      defaultValue: [
        { value: 'hcm', label: 'Tp Hồ Chí Minh' },
        { value: 'hn', label: 'Hà Nội' },
      ],
    },
    label: {
      defaultValue: 'Chọn tỉnh thành',
    },
    helptext: {
      defaultValue: 'Vui lòng chọn tỉnh thành',
    },
    width: { options: Object.keys(sizes) },
    disabled: {},
    required: {},
    status: {},
    id: { control: null },
    name: { control: null },
    value: { control: null },
    onChange: { control: null },
    onBlur: { control: null },
    onFocus: { control: null },
    inputRef: { control: null },
  },
};

export default defaultDropdown;

// top-most story will have the props breakdown
export const Overview = (args) => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <Dropdown
          id="overview"
          name="overview"
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Col>
    </Grid>
  );
};

export const ValueBinding = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Grid rowCols={[1, 2]}>
        <Col>
          <Dropdown
            value={value}
            onChange={(e) => setValue(e.target.value)}
            label="Chọn tỉnh thành"
            options={[
              { value: 'hcm', label: 'Tp Hồ Chí Minh' },
              { value: 'hn', label: 'Hà Nội' },
            ]}
          />
        </Col>
      </Grid>
      <p>{value || 'Please select an option.'}</p>
    </>
  );
};

ValueBinding.parameters = {
  docs: {
    description: {
      story: 'Currently, Dropdown only support controlled HTML &lt;select /&gt;',
    },
  },
};

export const WithHelptext = () => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <Dropdown
          label="Chọn tỉnh thành"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helptext="Vui lòng chọn tỉnh thành"
          options={[
            { value: 'hcm', label: 'Tp Hồ Chí Minh' },
            { value: 'hn', label: 'Hà Nội' },
          ]}
        />
      </Col>
    </Grid>
  );
};

WithHelptext.parameters = {
  docs: {
    description: {
      story: 'Help text is the small caption below the Dropdown box',
    },
  },
};

export const Required = () => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <Dropdown
          label="Chọn tỉnh thành"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          options={[
            { value: 'hcm', label: 'Tp Hồ Chí Minh' },
            { value: 'hn', label: 'Hà Nội' },
          ]}
        />
      </Col>
    </Grid>
  );
};

Required.parameters = {
  docs: {
    description: {
      story:
        'Enable `required` will let Dropdown display a red * on the label but validation is not forced for now',
    },
  },
};

export const ErrorStatus = () => {
  const [value, setValue] = useState('');
  const status = !value ? 'error' : 'default';
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <Dropdown
          status={status}
          label="Chọn tỉnh thành"
          helptext="Vui lòng chọn tỉnh thành"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          options={[
            { value: 'hcm', label: 'Tp Hồ Chí Minh' },
            { value: 'hn', label: 'Hà Nội' },
          ]}
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
        'Set `status="error"` will let Dropdown has red borders and helpText, indicate error status.',
    },
  },
};

export const Disabled = () => (
  <Grid rowCols={[1, 2]}>
    <Col>
      <Dropdown
        label="Chọn tỉnh thành"
        disabled
        options={[
          { value: 'hcm', label: 'Tp Hồ Chí Minh' },
          { value: 'hn', label: 'Hà Nội' },
        ]}
      />
    </Col>
  </Grid>
);

Disabled.parameters = {
  docs: {
    description: {
      story:
        'Enable `disabled` will set attribute `disabled` to the HTML select. Effectively, Dropdown is read-only.',
    },
  },
};

export const CustomClass = () => {
  const customClass = css`
    cursor: help;

    /* override wrapper */
    .wrapper {
      background: #ffffff;
      border-color: #cacaca;
    }

    /* override select button */
    .select {
      background: #ffffff;
      cursor: help;
    }

    /* override label */
    .label {
      text-transform: capitalize;
    }

    /* override helptext */
    .helptext {
      color: #4a90e2;
    }
  `;

  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <Dropdown
          className={customClass}
          label="Chọn tỉnh thành"
          disabled
          options={[
            { value: 'hcm', label: 'Tp Hồ Chí Minh' },
            { value: 'hn', label: 'Hà Nội' },
          ]}
          helptext="This Dropdown is disabled but looks like normal"
        />
      </Col>
    </Grid>
  );
};

CustomClass.parameters = {
  docs: {
    description: {
      story:
        'Pass a custom `className` with descendant selectors to `.wrapper`, `.select`, `.label`, `.helptext` to override dropdown styles. Click on Show code to see an example.',
    },
  },
};

export const CustomDropdownExample = () => {
  const inputRef = useRef(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleClick = (event) => {
    // prevent the native option panel to open
    event.preventDefault();
    inputRef.current?.focus();
    setPopupOpen(true);
  };

  const handleOptionClick = (event) => {
    setValue(event.target.dataset.value);
    setPopupOpen(false);
    inputRef.current?.focus();
  };

  return (
    <>
      <Grid rowCols={[1, 2]}>
        <Col>
          <Dropdown
            value={value}
            onClick={handleClick}
            inputRef={inputRef}
            label="Chọn tỉnh thành"
            options={[
              { value: 'hcm', label: 'Tp Hồ Chí Minh' },
              { value: 'hn', label: 'Hà Nội' },
            ]}
          />
        </Col>
      </Grid>
      <Popup open={popupOpen} onClose={() => setPopupOpen(false)}>
        <Button onClick={handleOptionClick} data-value="hcm">
          Tp Hồ Chí Minh
        </Button>{' '}
        <Button onClick={handleOptionClick} data-value="hn">
          Hà Nội
        </Button>
      </Popup>
    </>
  );
};

CustomDropdownExample.storyName = 'Ex: Custom Dropdown';
CustomDropdownExample.parameters = {
  docs: {
    description: {
      story:
        'This example demonstrate it is possible to prevent the default browser option dropdown and use a custom selector (with the help of Popup pattern). The key ingredient of this setup is `event.preventDefault()` in Dropdown `onClick` handler.',
    },
  },
};
