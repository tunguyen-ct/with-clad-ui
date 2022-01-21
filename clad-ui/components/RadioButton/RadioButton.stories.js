import React, { useState, useEffect } from 'react';
import { css } from 'linaria';
import RadioButton from './RadioButton';
import Grid from '../Grid/Grid';
import Col from '../Grid/Col';
import GuideImage, { guideImageClass } from '../../storybook/components/GuideImage';

const radioStories = {
  title: 'Components/Radio Button',
  component: RadioButton,
  parameters: {
    docs: {
      description: {
        component: `Clad UI Radio Button Component

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/wLQpYEE)

## How to use
- Use case: When we want user to select **ONE AND ONLY ONE** option
- Position: Placing it on the right hand side of label text is preferred (support majority of right-handed users).
- Colors: Default is **accent** (orange2), but, we can change it via \`color\` prop.

<img className="${guideImageClass}" src="./radio-how.png" />
`,
      },
    },
  },
  argTypes: {
    checked: {},
    disabled: {},
    color: {},
    label: { control: null },
    id: { control: null },
    className: { control: null },
    name: { control: null },
    value: { control: null },
  },
};

export default radioStories;

export const Overview = (args) => {
  const [radioLabel, setRadioLabel] = useState('Unchecked');

  useEffect(() => {
    if (args.checked && !args.disabled) setRadioLabel('Checked');
  }, [args.checked, args.disabled]);

  const onRadioChanged = (event) => {
    if (event.target.checked) setRadioLabel('Checked');
    else setRadioLabel('Unchecked');
  };
  return <RadioButton {...args} name="overview" label={radioLabel} onChange={onRadioChanged} />;
};

export const WithoutLabel = () => {
  const [message, setMessage] = useState("You haven't chosen any option yet.");
  const onRadioChanged = (event) => {
    setMessage(`You chose option ${event.target.value}.`);
  };
  return (
    <>
      <RadioButton name="withoutLabel" onChange={onRadioChanged} value="1" />
      <br />
      <RadioButton name="withoutLabel" onChange={onRadioChanged} value="2" />
      <p>{message}</p>
    </>
  );
};

export const WithLabel = () => {
  const [message, setMessage] = useState("You haven't chosen any option yet.");
  const onRadioChanged = (event) => {
    setMessage(`You chose option ${event.target.value}.`);
  };
  return (
    <>
      <RadioButton name="withLabel" label="Option 1" onChange={onRadioChanged} value="1" />
      <br />
      <RadioButton name="withLabel" label="Option 2" onChange={onRadioChanged} value="2" />
      <p>{message}</p>
    </>
  );
};

WithLabel.parameters = {
  docs: {
    description: {
      story: 'Setting the `label` of the radio buttons.',
    },
  },
};

export const DefaultChecked = () => {
  const [message, setMessage] = useState('You chose option 1.');
  const onRadioChanged = (event) => {
    setMessage(`You chose option ${event.target.value}.`);
  };
  return (
    <>
      <RadioButton
        name="checked"
        label="Option 1 (default checked)"
        onChange={onRadioChanged}
        value="1"
        checked
      />
      <br />
      <RadioButton name="checked" label="Option 2" onChange={onRadioChanged} value="2" />
      <p>{message}</p>
    </>
  );
};

DefaultChecked.parameters = {
  docs: {
    description: {
      story: 'Setting the `checked` of the radio button.',
    },
  },
};

export const Disabled = () => {
  const [message, setMessage] = useState("You haven't chosen any option yet.");
  const onRadioChanged = (event) => {
    setMessage(`You chose option ${event.target.value}.`);
  };
  return (
    <>
      <RadioButton name="disabled" label="Disabled" disabled />
      <br />
      <RadioButton name="disabled" label="Option 2" onChange={onRadioChanged} value="2" />
      <br />
      <RadioButton name="disabled" label="Option 3" onChange={onRadioChanged} value="3" />
      <p>{message}</p>
    </>
  );
};

Disabled.parameters = {
  docs: {
    description: {
      story: 'Setting the `disabled` of the radio buttons.',
    },
  },
};

export const Colors = () => (
  <>
    <RadioButton color="neutral" label="Neutral" checked />
    <br />
    <RadioButton color="primary" label="Primary" checked />
    <br />
    <RadioButton color="secondary" label="Secondary" checked />
    <br />
    <RadioButton color="accent" label="Accent" checked />
    <br />
    <RadioButton color="critical" label="Critical" checked />
    <br />
    <RadioButton color="caution" label="Caution" checked />
    <br />
    <RadioButton color="positive" label="Positive" checked />
    <br />
    <RadioButton color="info" label="Info" checked />
  </>
);

Colors.parameters = {
  docs: {
    description: {
      story: 'Setting the `color` of the radio buttons.',
    },
  },
};

const paddingTopClass = css`
  padding-top: 32px;
`;

export const UsageGuide = () => (
  <>
    <h4>DO&apos;s</h4>
    <GuideImage isGood src="./radio-do.png" alt="Radio - Do" />
    <h4 className={paddingTopClass}>DON&apos;Ts</h4>
    <Grid rowCols={[1, 3]} gutterx="sm" align="center">
      <Col>
        <GuideImage isBad src="./radio-dont-1.png" alt="Radio - Dont_1" />
        <p>
          Placing radio buttons on the right hand side of label text is preferred (support majority
          of right-handed users and to be more consistent in other cases).
        </p>
      </Col>
      <Col>
        <GuideImage isBad src="./radio-dont-2.png" alt="Radio - Dont_2" />
        <p>Use radio buttons instead of check mark.</p>
      </Col>
      <Col>
        <GuideImage isBad src="./radio-dont-3.png" alt="Radio - Dont_3" />
        <p>There should be no shadow.</p>
      </Col>
    </Grid>
  </>
);
UsageGuide.parameters = {
  docs: {
    source: { code: [] },
  },
};
