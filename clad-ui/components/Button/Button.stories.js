import React from 'react';
import { css } from 'linaria';

import Button from './Button';
import IconButton from './IconButton';
// import sx from '../../utils/sx';
import PhoneOutline from '../../icons/PhoneOutline';
import HeartOutline from '../../icons/HeartOutline';
import SpeechBubbles from '../../icons/SpeechBubbles';
import Download from '../../icons/Download';
import Location from '../../icons/Location';

const buttonStories = {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `Renders a standard button element.

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/5d0Y3L)
`,
      },
    },
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    as: {
      options: ['button', 'a'],
      control: {
        type: 'select',
      },
    },
  },
};

export default buttonStories;

// top-most story will have the props breakdown
export const Overview = (args) => <Button {...args} />;
Overview.args = { children: 'Label', as: 'button' };

const storyClass = css`
  & > * {
    margin: 0.5em 1em 0.5em 0;
    vertical-align: middle;
  }
`;

export const ColorsAndWeights = (/* args */) => (
  <div className={storyClass}>
    <Button weight="bold" color="primary">
      PRIMARY
    </Button>
    <Button weight="bold" color="secondary">
      SECONDARY
    </Button>
    <Button weight="bold" color="accent">
      ACCENT
    </Button>
    <Button weight="bold" color="critical">
      CRITICAL
    </Button>
    <Button weight="bold" color="caution">
      CAUTION
    </Button>
    <Button weight="bold" color="positive">
      POSITIVE
    </Button>
    <Button weight="bold" color="info">
      INFO
    </Button>
    <br />
    <Button color="primary">primary</Button>
    <Button color="secondary">secondary</Button>
    <Button color="accent">accent</Button>
    <Button color="critical">critical</Button>
    <Button color="caution">caution</Button>
    <Button color="positive">positive</Button>
    <Button color="info">info</Button>
  </div>
);

export const variantOutline = (/* args */) => (
  <div className={storyClass}>
    <Button weight="bold" color="primary" variant="outline">
      PRIMARY
    </Button>
    <Button weight="bold" color="secondary" variant="outline">
      SECONDARY
    </Button>
    <Button weight="bold" color="accent" variant="outline">
      ACCENT
    </Button>
    <Button weight="bold" color="critical" variant="outline">
      CRITICAL
    </Button>
    <Button weight="bold" color="caution" variant="outline">
      CAUTION
    </Button>
    <Button weight="bold" color="positive" variant="outline">
      POSITIVE
    </Button>
    <Button weight="bold" color="info" variant="outline">
      INFO
    </Button>
    <br />
    <Button color="primary" variant="outline">
      primary
    </Button>
    <Button color="secondary" variant="outline">
      secondary
    </Button>
    <Button color="accent" variant="outline">
      accent
    </Button>
    <Button color="critical" variant="outline">
      critical
    </Button>
    <Button color="caution" variant="outline">
      caution
    </Button>
    <Button color="positive" variant="outline">
      positive
    </Button>
    <Button color="info" variant="outline">
      info
    </Button>
  </div>
);

export const sizes = (/* args */) => (
  <div className={storyClass}>
    <Button color="primary" size="small">
      Small
    </Button>
    <Button color="primary" size="medium">
      Medium
    </Button>
    <Button color="primary" size="large">
      Large
    </Button>
    <Button color="critical" size="small" weight="bold">
      SMALL
    </Button>
    <Button color="critical" size="medium" weight="bold">
      MEDIUM
    </Button>
    <Button color="critical" size="large" weight="bold">
      LARGE
    </Button>
    <br />
    <Button color="info" variant="outline" size="small">
      Small
    </Button>
    <Button color="info" variant="outline" size="medium">
      Medium
    </Button>
    <Button color="info" variant="outline" size="large">
      Large
    </Button>
    <Button color="positive" variant="outline" size="small" weight="bold">
      SMALL
    </Button>
    <Button color="positive" variant="outline" size="medium" weight="bold">
      MEDIUM
    </Button>
    <Button color="positive" variant="outline" size="large" weight="bold">
      LARGE
    </Button>
  </div>
);

export const borderRadius = (/* args */) => (
  <div className={storyClass}>
    <Button color="positive" radius="normal">
      Solid Normal
    </Button>
    <Button color="positive" radius="pill">
      Solid Pill
    </Button>
    <Button color="critical" variant="outline" radius="normal">
      Outline Normal
    </Button>
    <Button color="critical" variant="outline" radius="pill">
      Outline Pill
    </Button>
  </div>
);

export const disabled = (/* args */) => (
  <div className={storyClass}>
    <Button color="positive" radius="normal" disabled>
      Solid Normal
    </Button>
    <Button color="positive" radius="pill" disabled>
      Solid Pill
    </Button>
    <Button color="critical" variant="outline" radius="normal" disabled>
      Outline Normal
    </Button>
    <Button color="critical" variant="outline" radius="pill" disabled>
      Outline Pill
    </Button>
  </div>
);

disabled.parameters = {
  docs: {
    description: {
      story: 'Disabled state',
    },
  },
};

export const withIcons = (/* args */) => (
  <div className={storyClass}>
    <Button color="positive" size="large">
      <PhoneOutline /> Click to Dial
    </Button>

    <Button color="positive" size="large" variant="outline">
      <SpeechBubbles /> Chat with Seller
    </Button>

    <Button color="critical" size="medium" radius="pill" variant="solid">
      <HeartOutline /> Save
    </Button>

    <Button color="critical" size="medium" radius="pill" variant="outline">
      Save <HeartOutline />
    </Button>

    <Button color="info" size="small" radius="normal" variant="solid">
      Location <Location />
    </Button>

    <Button color="info" size="small" radius="normal" variant="outline">
      <Location /> Location
    </Button>
  </div>
);

export const iconButtons = (/* args */) => (
  <div className={storyClass}>
    <IconButton color="positive" size="large">
      <PhoneOutline />
    </IconButton>

    <IconButton color="positive" size="large" variant="outline">
      <Download />
    </IconButton>

    <IconButton color="critical" size="large" radius="circle">
      <SpeechBubbles />
    </IconButton>

    <IconButton color="critical" size="large" radius="circle" variant="outline">
      <HeartOutline />
    </IconButton>

    <IconButton color="positive" size="medium">
      <PhoneOutline />
    </IconButton>

    <IconButton color="positive" size="medium" variant="outline">
      <Download />
    </IconButton>

    <IconButton color="critical" size="medium" radius="circle">
      <SpeechBubbles />
    </IconButton>

    <IconButton color="critical" size="medium" radius="circle" variant="outline">
      <HeartOutline />
    </IconButton>

    <IconButton color="positive" size="small">
      <PhoneOutline />
    </IconButton>

    <IconButton color="positive" size="small" variant="outline">
      <Download />
    </IconButton>

    <IconButton color="critical" size="small" radius="circle">
      <SpeechBubbles />
    </IconButton>

    <IconButton color="critical" size="small" radius="circle" variant="outline">
      <HeartOutline />
    </IconButton>
  </div>
);

iconButtons.parameters = {
  docs: {
    description: {
      story: `To have square or circle icons, use \`<IconButton>\`. For example:

    import { IconButton } from 'clad-ui'

    <IconButton><Heart /><IconButton>`,
    },
  },
};

const stretchClass = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    flex-basis: calc(50% - 5px);
    margin-bottom: 10px;
  }
`;

export const stretch = (/* args */) => (
  <div className={stretchClass}>
    <div>
      <Button stretch>Login</Button>
    </div>
    <div>
      <Button variant="outline" stretch>
        Register
      </Button>
    </div>
    <Button stretch>Click here to continue</Button>
  </div>
);

stretch.parameters = {
  docs: {
    description: {
      story: '`strech` prop allows the button to expand to full content width of its container',
    },
  },
};

export const extraClasses = (/* args */) => {
  // Below is sample class definition, colors should be from theme
  const extraClass = css`
    /* stylelint-disable declaration-no-important */
    color: #222222 !important;
    text-transform: uppercase;

    :hover {
      background-color: #cc9600 !important;
    }
  `;

  return (
    <div className={storyClass}>
      <Button extraClasses={extraClass}>Customized button</Button>
    </div>
  );
};

extraClasses.parameters = {
  docs: {
    description: {
      story: '`extraClasses` allow to overwrite default styling in some special cases',
    },
  },
};
