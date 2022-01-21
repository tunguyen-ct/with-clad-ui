import React from 'react';

import ButtonLink from './ButtonLink';

const buttonLinkStories = {
  title: 'Components/Buttons/ButtonLink',
  component: ButtonLink,
  parameters: {
    docs: {
      description: {
        component: `Hypelinks (anchor tags) that appear like buttons. It has the same props list as [Button component](../?path=/docs/components-buttons-button--overview)
except the \`as\` prop is always \`a\`.

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
  },
};
export default buttonLinkStories;

// top-most story will have the props breakdown
export const Overview = (args) => <ButtonLink href="#" {...args} />;
Overview.args = { children: 'This is a button link' };
