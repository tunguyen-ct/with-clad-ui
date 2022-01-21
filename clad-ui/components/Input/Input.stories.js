import React, { useState, useCallback } from 'react';
import { css } from 'linaria';
import theme from '@clad-ui/theme';
import debounce from 'lodash/debounce';
import Input from './Input';
import Button from '../Button/Button';
import Grid from '../Grid/Grid';
import Col from '../Grid/Col';

const { sizes } = theme;

const inputStories = {
  title: 'Components/Inputs/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `Text Input component that has floating label, caption, and info tooltip.

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/QbbMRp7)
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
    width: {
      options: Object.keys(sizes),
    },
    type: {},
    disabled: {},
    required: {},
    allowClear: {},
    status: {},
    showPassword: {},
    tooltip: {},
    i18n: {},
    inputMode: {},
    id: { control: null },
    name: { control: null },
    value: { control: null },
    onChange: { control: null },
    onBlur: { control: null },
    onFocus: { control: null },
    inputRef: { control: null },
  },
};

export default inputStories;

// top-most story will have the props breakdown
export const Overview = (args) => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
        <p>{value ? `Input value: ${value}` : 'Please enter something.'}</p>
      </Col>
    </Grid>
  );
};

const spaceForTooltipClass = css`
  margin-bottom: 32px;
`;

const formClass = css`
  display: flex;
  flex-direction: column;
`;

export const ValueBinding = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Grid rowCols={[1, 2]}>
        <Col>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            label="Label cum placeholder..."
          />
        </Col>
      </Grid>
      <p>{value ? `Input value: ${value}` : 'Please enter something.'}</p>
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

export const WithHelptext = () => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <Input
          label="Label cum placeholder..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helptext="Helptext"
        />
      </Col>
    </Grid>
  );
};

WithHelptext.parameters = {
  docs: {
    description: {
      story: 'Help text is the small caption below the input box',
    },
  },
};

export const AllowClear = () => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <Input
          allowClear
          label="Label cum placeholder..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Col>
    </Grid>
  );
};

AllowClear.parameters = {
  docs: {
    description: {
      story: '`allowClear` enable a clear icon when input has value',
    },
  },
};

export const WithTooltip = () => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <div className={spaceForTooltipClass}>
          <Input
            tooltip="Describe in detail about your input to the user here."
            label="Label cum placeholder..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>
      </Col>
    </Grid>
  );
};

WithTooltip.parameters = {
  docs: {
    description: {
      story:
        'Setting `tooltip` will let Input display an (i) icon with the tooltip texts appear when hover (desktop) or tap (touch device)',
    },
  },
};

export const ClearAndTooltip = () => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <div className={spaceForTooltipClass}>
          <Input
            allowClear
            tooltip="Describe in detail about your input to the user here."
            label="Label cum placeholder..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </Col>
    </Grid>
  );
};

export const ShowPassword = () => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <Input
          showPassword
          label="Password"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="password"
        />
      </Col>
    </Grid>
  );
};

ShowPassword.parameters = {
  docs: {
    description: {
      story:
        'Enable `showPassword` will let Input display a Hide/Show toggle button for type=password input',
    },
  },
};

export const Required = () => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <Input
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
        <Input
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
      <Input label="Read only" disabled />
    </Col>
  </Grid>
);

Disabled.parameters = {
  docs: {
    description: {
      story:
        'Enable `disabled` will set attribute `disabled` to the HTML input. Effectively, Input is read-only.',
    },
  },
};

export const Internationalization = () => {
  const [value, setValue] = useState('a');
  return (
    <Grid rowCols={[1, 2]} gutterx="sm">
      <Col>
        <Input
          label="Vietnamese (Default)"
          value={value}
          showPassword
          type="password"
          onChange={(e) => setValue(e.target.value)}
        />
      </Col>
      <Col>
        <Input
          label="English"
          value={value}
          showPassword
          type="password"
          onChange={(e) => setValue(e.target.value)}
          i18n={{
            show: 'Show',
            hide: 'Hide',
          }}
        />
      </Col>
      <Col>
        <Input
          label="French"
          value={value}
          showPassword
          type="password"
          onChange={(e) => setValue(e.target.value)}
          i18n={{
            show: 'Montrer',
            hide: 'Cacher',
          }}
        />
      </Col>
      <Col>
        <Input
          label="Japanese"
          value={value}
          showPassword
          type="password"
          onChange={(e) => setValue(e.target.value)}
          i18n={{
            show: '公演',
            hide: '隠す',
          }}
        />
      </Col>
    </Grid>
  );
};

Internationalization.parameters = {
  docs: {
    description: {
      story:
        'Setting `i18n` will change **show** and **hide** button labels in inputs with `type="password"`',
    },
  },
};

export const MultipleInputs = () => {
  const [inputs, setInputs] = useState({});
  const handleForm = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert('Submitting form!');
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((state) => ({ ...state, [name]: value }));
  };
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <form className={formClass} onSubmit={handleForm}>
          <Input
            name="number"
            type="tel"
            label="Phone Number"
            onChange={onInputChange}
            value={inputs?.number}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            onChange={onInputChange}
            value={inputs?.password}
          />
          <Button type="submit" stretch disabled={!(inputs?.number && inputs?.password)}>
            Submit
          </Button>
        </form>
      </Col>
    </Grid>
  );
};

MultipleInputs.storyName = 'Ex: Multiple Inputs';

export const DebounceExample = () => {
  const [text, setText] = useState('');

  const handleFetch = useCallback(
    debounce((query) => {
      // eslint-disable-next-line no-alert
      if (query) alert('Searching for: ' + query);
    }, 1000),
    []
  );
  const handleInputChange = (e) => {
    const { value } = e.target;
    setText(value);
    handleFetch(value);
  };

  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <Input value={text} onChange={handleInputChange} label="Search input example" />
      </Col>
    </Grid>
  );
};

DebounceExample.storyName = 'Ex: Debounce onChange';
