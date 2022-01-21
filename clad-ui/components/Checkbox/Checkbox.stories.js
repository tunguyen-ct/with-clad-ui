import React, { useState, useEffect } from 'react';
import { css } from 'linaria';
import Checkbox from './Checkbox';
import Grid from '../Grid/Grid';
import Col from '../Grid/Col';
import GuideImage, { guideImageClass } from '../../storybook/components/GuideImage';

const checkboxStories = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `Clad UI Checkbox Component

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/qeVryoz)

## How to use
- Use case: When we want user to select **ONE OR MORE** option.
- Position: Placing it on the right hand side of label text is preferred (support majority of right-handed users).
- Colors: Default is **accent** (orange2), but, we can change it via \`color\` prop.

<img className="${guideImageClass}" src="./checkbox-how.png" />
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

export default checkboxStories;

export const Overview = (args) => {
  const [checkboxLabel, setCheckboxLabel] = useState('Unchecked');

  useEffect(() => {
    if (args.checked && !args.disabled) setCheckboxLabel('Checked');
  }, [args.checked, args.disabled]);

  const onCheckboxChanged = (event) => {
    if (event.target.checked) setCheckboxLabel('Checked');
    else setCheckboxLabel('Unchecked');
  };
  return <Checkbox {...args} name="overview" label={checkboxLabel} onChange={onCheckboxChanged} />;
};
export const WithoutLabel = () => {
  const [message, setMessage] = useState("You haven't checked the checkbox yet.");
  const onCheckboxChanged = (event) => {
    if (event.target.checked) setMessage('You checked the checkbox');
    else setMessage('You unchecked the checkbox');
  };
  return (
    <>
      <Checkbox name="withoutLabel" onChange={onCheckboxChanged} />
      <p>{message}</p>
    </>
  );
};

export const WithLabel = () => {
  const [checkboxLabel, setCheckboxLabel] = useState('Unchecked');
  const onCheckboxChanged = (event) => {
    if (event.target.checked) setCheckboxLabel('Checked');
    else setCheckboxLabel('Unchecked');
  };
  return <Checkbox name="withLabel" label={checkboxLabel} onChange={onCheckboxChanged} />;
};

WithLabel.parameters = {
  docs: {
    description: {
      story: 'Setting the `label` of the checkbox.',
    },
  },
};

export const DefaultChecked = () => {
  const [checkboxLabel1, setCheckboxLabel1] = useState('Default checked');
  const [checkboxLabel2, setCheckboxLabel2] = useState('Unchecked');

  const onCheckbox1Changed = (event) => {
    if (event.target.checked) setCheckboxLabel1('Default checked');
    else setCheckboxLabel1('Unchecked');
  };
  const onCheckbox2Changed = (event) => {
    if (event.target.checked) setCheckboxLabel2('Checked');
    else setCheckboxLabel2('Unchecked');
  };
  return (
    <>
      <Checkbox name="checked" label={checkboxLabel1} onChange={onCheckbox1Changed} checked />
      <br />
      <Checkbox name="checked" label={checkboxLabel2} onChange={onCheckbox2Changed} />
    </>
  );
};

DefaultChecked.parameters = {
  docs: {
    description: {
      story: 'Setting the `checked` of the checkbox.',
    },
  },
};

export const Disabled = () => {
  const [checkboxLabel, setCheckboxLabel] = useState('Unchecked');
  const onCheckboxChanged = (event) => {
    if (event.target.checked) setCheckboxLabel('Checked');
    else setCheckboxLabel('Unchecked');
  };
  return (
    <>
      <Checkbox name="disabled" label="Disabled" disabled />
      <br />
      <Checkbox name="disabled" label={checkboxLabel} onChange={onCheckboxChanged} />
    </>
  );
};

Disabled.parameters = {
  docs: {
    description: {
      story: 'Setting the `disabled` of the checkbox.',
    },
  },
};

export const Colors = () => (
  <>
    <Checkbox color="neutral" label="Neutral" checked />
    <br />
    <Checkbox color="primary" label="Primary" checked />
    <br />
    <Checkbox color="secondary" label="Secondary" checked />
    <br />
    <Checkbox color="accent" label="Accent" checked />
    <br />
    <Checkbox color="critical" label="Critical" checked />
    <br />
    <Checkbox color="caution" label="Caution" checked />
    <br />
    <Checkbox color="positive" label="Positive" checked />
    <br />
    <Checkbox color="info" label="Info" checked />
  </>
);

Colors.parameters = {
  docs: {
    description: {
      story: 'Setting the `color` of the checkbox.',
    },
  },
};

const paddingTopClass = css`
  padding-top: 32px;
`;

export const UsageGuide = () => (
  <>
    <h4>DO&apos;s</h4>
    <GuideImage isGood src="./checkbox-do.png" alt="Checkbox - Do" />
    <h4 className={paddingTopClass}>DON&apos;Ts</h4>
    <Grid rowCols={[1, 2]} gutterx="sm" align="center">
      <Col>
        <GuideImage isBad src="./checkbox-dont-1.png" alt="Checkbox - Dont_1" />
        <p>Our checkboxes don&apos;t have hover state.</p>
      </Col>
      <Col>
        <GuideImage isBad src="./checkbox-dont-2.png" alt="Checkbox - Dont_2" />
        <ul>
          <li>Wrong checkbox shape (these round shapes make them look like Radio Button).</li>
          <li>Unchecked state should be gray.</li>
        </ul>
      </Col>
    </Grid>
  </>
);
UsageGuide.parameters = {
  docs: {
    source: { code: [] },
  },
};
