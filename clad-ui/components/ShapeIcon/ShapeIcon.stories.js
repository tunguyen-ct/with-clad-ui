import React from 'react';
import theme from '@clad-ui/theme';

import ShapeIcon from './ShapeIcon';
import * as iconComponents from '../../icons';

// get the list of monochrome icon names
const icons = Object.keys(iconComponents).filter(
  (iconName) => iconComponents[iconName].type === 'monochrome'
);

const shapeIconStories = {
  title: 'Components/ShapeIcon',
  component: ShapeIcon,
  argTypes: {
    as: {
      options: ['span', 'i', 'button'],
    },
    bg: {
      options: ['none', ...Object.keys(theme.colors)],
    },
    color: {
      options: Object.keys(theme.colors),
    },
    size: {
      options: Object.keys(theme.sizes),
    },
    radius: {
      options: Object.keys(theme.radii),
    },
  },
};

export default shapeIconStories;

// First exported Template will be used as args explorer
export const Overview = (args) => {
  const Icon = iconComponents[args.children];
  return (
    <ShapeIcon {...args}>
      <Icon />
    </ShapeIcon>
  );
};

Overview.argTypes = {
  children: {
    control: {
      options: icons,
    },
  },
};

// define mdx args and story's controls and their initial value
Overview.args = {
  children: 'Heart',
  as: 'span',
  color: 'white',
  bg: 'positive',
  size: 'md',
  radius: 'circle',
};

// eslint-disable-next-line arrow-body-style
const AllIconTemplate = (args) => {
  return icons.map((iconName) => {
    const Icon = iconComponents[iconName];
    return (
      <ShapeIcon key={iconName} {...args} style={{ margin: '0.5em' }}>
        <Icon />
      </ShapeIcon>
    );
  });
};

export const CircleIcons = AllIconTemplate.bind({});

CircleIcons.args = {
  as: 'span',
  bg: 'primary',
  color: 'white',
  radius: 'circle',
  size: 'md',
};

export const RoundedIcons = AllIconTemplate.bind({});

RoundedIcons.args = {
  as: 'span',
  bg: 'info',
  color: 'white',
  radius: 'sm',
  size: 'md',
};
