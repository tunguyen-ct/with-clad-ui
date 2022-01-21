import React from 'react';
import { css } from 'linaria';
import theme from '@clad-ui/theme';
import Chip from './Chip';

const { sizes } = theme;

const checkboxStories = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: `Chip is the atom component to be used as stand-alone Badges, or in patterns like Tag Cloud, Tabs.

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/DPdwPmk)
`,
      },
    },
  },
  argTypes: {
    active: {},
    children: {
      defaultValue: 'Nhà ở',
      control: {
        type: 'text',
      },
    },
    minWidth: {
      options: ['initial', ...Object.keys(sizes)],
    },
    href: { control: null },
    as: { control: null },
    onClick: { control: null },
    className: { control: null },
  },
};

export default checkboxStories;

const onChipClicked = (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-alert
  alert('Chip clicked.');
};

export const Overview = (args) => <Chip {...args} />;

export const WithClassName = () => {
  const styleClass = css`
    &:link {
      font-size: 20px;
      padding: 12px 16px;
    }
  `;
  return (
    <>
      <Chip href="" className={styleClass} active onClick={onChipClicked}>
        Nhà ở
      </Chip>
      <Chip href="" className={styleClass} onClick={onChipClicked}>
        Chung cư
      </Chip>
    </>
  );
};

WithClassName.storyName = 'With className';
WithClassName.parameters = {
  docs: {
    description: {
      story:
        'Pass className to overwrite or add more styles to this component. The lowest specificity of this component is `.class:link`',
    },
  },
};

export const WithMinWidth = () => (
  <>
    <Chip minWidth="initial" onClick={onChipClicked}>
      Match content (Default)
    </Chip>
    <br />
    <Chip minWidth="xxxl" active onClick={onChipClicked}>
      XXXL
    </Chip>
    <br />
    <Chip minWidth="quarter" onClick={onChipClicked}>
      A Quarter
    </Chip>
    <br />
    <Chip minWidth="half" active onClick={onChipClicked}>
      A Half
    </Chip>
  </>
);

WithMinWidth.storyName = 'With minWidth';
WithMinWidth.parameters = {
  docs: {
    description: {
      story: 'Define minimum width for short texts.',
    },
  },
};

export const WithAs = () => (
  <>
    <Chip onClick={onChipClicked}>I&apos;m an a</Chip>
    <Chip as="button" onClick={onChipClicked}>
      I&apos;m a button
    </Chip>
    <Chip as="div" onClick={onChipClicked}>
      I&apos;m a div
    </Chip>
    <Chip as="span" onClick={onChipClicked}>
      I&apos;m a span
    </Chip>
  </>
);

WithAs.storyName = 'With as prop';
WithAs.parameters = {
  docs: {
    description: {
      story:
        'By default, this component is rendered as an `<a>` element. Passing a tag name (string) or any React Component to change the component to be rendered as.',
    },
  },
};
