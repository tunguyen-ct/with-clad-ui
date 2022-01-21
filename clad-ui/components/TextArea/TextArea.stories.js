import React, { useState, useRef, useCallback } from 'react';
import theme from '@clad-ui/theme';
import debounce from 'lodash/debounce';
import TextArea from './TextArea';
import Grid from '../Grid/Grid';
import Col from '../Grid/Col';

const { sizes } = theme;

const textAreaStories = {
  title: 'Components/Inputs/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: `TextArea component that has floating label, caption and resizability.

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/9PW0DdP)
`,
      },
    },
  },
  argTypes: {
    label: {
      defaultValue: 'TextArea label',
    },
    helptext: {
      defaultValue: 'Help text',
    },
    placeholder: {
      defaultValue: 'Multiline placeholder\nUse \\n to add line break',
    },
    width: {
      control: {
        type: 'select',
      },
      options: Object.keys(sizes),
    },
    characterLimit: {
      control: {
        type: 'number',
        min: 0,
      },
    },
    disabled: {},
    required: {},
    status: {},
    resize: {},
    lines: {},
    id: { control: null },
    name: { control: null },
    value: { control: null },
    onChange: { control: null },
    onBlur: { control: null },
    onFocus: { control: null },
    inputRef: { control: null },
    inputMode: { control: null },
  },
};

export default textAreaStories;

export const Overview = (args) => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <TextArea
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
          <TextArea
            id="value-binding"
            label="TextArea label"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Col>
      </Grid>
      <p>{value || 'Please enter something.'}</p>
    </>
  );
};

ValueBinding.parameters = {
  docs: {
    description: {
      story: 'Currently, TextArea only support controlled HTML &lt;textarea /&gt;',
    },
  },
};

export const WithLines = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  return (
    <Grid rowCols={[1, 2]} gutter="sm">
      <Col>
        <TextArea
          id="with-5-lines"
          label="TextArea with 5 lines (default)"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </Col>
      <Col>
        <TextArea
          id="with-2-lines"
          label="TextArea with 2 lines"
          lines={2}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </Col>
      <Col>
        <TextArea
          id="with-4-lines"
          label="TextArea with 4 lines"
          lines={4}
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
        />
      </Col>
      <Col>
        <TextArea
          id="with-6-lines"
          label="TextArea with 6 lines"
          lines={6}
          value={value4}
          onChange={(e) => setValue4(e.target.value)}
        />
      </Col>
    </Grid>
  );
};

WithLines.storyName = 'With lines';
WithLines.parameters = {
  docs: {
    description: {
      story: 'Set TextArea number of lines (before being resized).',
    },
  },
};

export const WithResize = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  return (
    <Grid rowCols={[1, 2]} gutter="sm">
      <Col>
        <TextArea
          id="resize-none"
          label="Resize none (default)"
          lines={2}
          resize="none"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </Col>
      <Col>
        <TextArea
          id="resize-horizontally"
          label="Resize horizontally"
          lines={2}
          resize="horizontal"
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
        />
      </Col>
      <Col>
        <TextArea
          id="resize-vertically"
          label="Resize vertically"
          lines={2}
          resize="vertical"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </Col>
      <Col>
        <TextArea
          id="resize-both"
          label="Resize both vertically and horizontally"
          lines={2}
          resize="both"
          value={value4}
          onChange={(e) => setValue4(e.target.value)}
        />
      </Col>
    </Grid>
  );
};

WithResize.storyName = 'With resize';
WithResize.parameters = {
  docs: {
    description: {
      story: 'Allow user to resize TextArea vertically or horizontally or both.',
    },
  },
};

export const Required = () => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <TextArea
          id="required"
          label="Required TextArea"
          required
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Col>
    </Grid>
  );
};

Required.storyName = 'With required';
Required.parameters = {
  docs: {
    description: {
      story:
        'Enable `required` will let TextArea display a red * on the label but validation is not forced for now',
    },
  },
};

export const WithPlaceholder = () => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <TextArea
          id="with-placeholder"
          label="Mô tả chi tiết"
          placeholder={
            'Nên mô tả bằng tiếng Việt có dấu:\n- Tình trạng chiếc xe\n- Thời gian sử dụng xe\n- Bảo trì xe: bao lâu/ lần, tại hãng hay không\n- Tình trạng giấy tờ'
          }
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Col>
    </Grid>
  );
};

WithPlaceholder.storyName = 'With placeholder';
WithPlaceholder.parameters = {
  docs: {
    description: {
      story: 'Set TextArea placeholder (use `\\n` to add line break).',
    },
  },
};

export const WithHelptext = () => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <TextArea
          id="with-helptext"
          label="TextArea label"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helptext="Help text"
        />
      </Col>
    </Grid>
  );
};

WithHelptext.storyName = 'With helptext';
WithHelptext.parameters = {
  docs: {
    description: {
      story: 'Help text is the small caption below the input box',
    },
  },
};

export const ErrorStatus = () => {
  const [value, setValue] = useState('');
  const status = !value ? 'error' : 'default';
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <TextArea
          id="custom-status-and-message"
          label="Required TextArea"
          status={status}
          helptext="is required"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      </Col>
    </Grid>
  );
};

ErrorStatus.storyName = 'With status';
ErrorStatus.parameters = {
  docs: {
    description: {
      story:
        'Set `status="error"` will let TextArea has red borders and helptext, indicate error status.',
    },
  },
};

export const Disabled = () => (
  <Grid rowCols={[1, 2]}>
    <Col>
      <TextArea id="disabled" label="Read only" disabled />
    </Col>
  </Grid>
);

Disabled.storyName = 'With disabled';
Disabled.parameters = {
  docs: {
    description: {
      story:
        'Enable `disabled` will set attribute `disabled` to the HTML textarea. Effectively, TextArea is read-only.',
    },
  },
};

export const WithCharacterLimit = () => {
  const [value, setValue] = useState('');
  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <TextArea
          id="character-limit"
          label="Limited to 20 characters"
          characterLimit={20}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Col>
    </Grid>
  );
};

WithCharacterLimit.storyName = 'With characterLimit';
WithCharacterLimit.parameters = {
  docs: {
    description: {
      story: 'Use `characterLimit` to limit number of character of TextArea',
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
    const { value } = e.target;
    setText(value);
    handleFetch();
  };

  return (
    <Grid rowCols={[1, 2]}>
      <Col>
        <TextArea
          id="debounce"
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
