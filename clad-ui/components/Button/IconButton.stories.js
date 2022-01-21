import React from 'react';

import IconButton from './IconButton';
import * as iconComponents from '../../icons';

// get the list of monochrome icon names
const icons = Object.keys(iconComponents).filter(
  (iconName) => iconComponents[iconName].type === 'monochrome'
);

const iconButtonStories = {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: `Icons as interactive buttons / links. It has the same props list as [Button component](../?path=/docs/components-buttons-button--overview)

\`🧪 Beta\`
`,
      },
    },
  },
  argTypes: {
    as: {
      options: ['button', 'a'],
      control: {
        type: 'select',
      },
    },
  },
};

export default iconButtonStories;

// First exported Template will be used as args explorer
export const Overview = (args) => {
  const Icon = iconComponents[args.children];
  return (
    <IconButton {...args}>
      <Icon />
    </IconButton>
  );
};

Overview.argTypes = {
  children: {
    options: icons,
    control: {
      type: 'select',
    },
  },
};

// define mdx args and story's controls and their initial value
Overview.args = {
  children: 'Heart',
  as: 'button',
  color: 'critical',
  size: 'medium',
  radius: 'circle',
};
