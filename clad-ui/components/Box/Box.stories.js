import React from 'react';
import theme from '@clad-ui/theme';
import { css } from 'linaria';
import Box from './Box';

const { colors, space, sizes, radii, shadows } = theme;

const keysOfColors = Object.keys(colors);
const keysOfSpace = Object.keys(space);
const keysOfSizes = Object.keys(sizes);
const keysOfRadii = Object.keys(radii);
const keysOfShadows = Object.keys(shadows);

const boxStories = {
  title: 'Style Guide/Layout/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: `Theme-aware replacement for **div** HTML element..

\`🧪Beta\`

Box is the lowest-level component for binding theme-based styles to an individual element on the screen.
By default, Box renders a div element. This can be customised via the \`as\` prop.
`,
      },
    },
  },
  argTypes: {
    borderColor: {
      defaultValue: 'border',
      options: keysOfColors,
    },
    borderWidth: {
      defaultValue: 'sm',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      defaultValue: 'text',
      options: keysOfColors,
    },
    backgroundColor: {
      defaultValue: 'background',
      options: keysOfColors,
    },
    children: {
      defaultValue: 'Box layout',
    },
    padding: {
      defaultValue: 'none',
      options: keysOfSpace,
    },
    paddingx: {
      defaultValue: 'md',
      options: keysOfSpace,
    },
    paddingy: {
      defaultValue: 'md',
      options: keysOfSpace,
    },
    alignItems: {
      defaultValue: 'center',
    },
    width: {
      defaultValue: 'full',
      options: keysOfSizes,
    },
    maxWidth: {
      defaultValue: 'full',
      options: keysOfSizes,
    },
    height: {
      defaultValue: 'xxl',
      options: keysOfSizes,
    },
    borderRadius: {
      defaultValue: 'sm',
      options: keysOfRadii,
    },
    boxShadow: {
      options: keysOfShadows,
    },
    justifyContent: {},
    textAlign: {},
    style: { control: null },
    as: { control: null },
    className: { control: null },
    backgroundImage: { control: null },
    dangerousHtml: { control: null },
  },
};

export default boxStories;

const marginClass = css`
  margin-top: 16px;
`;

const boxItem25Class = css`
  padding: 8px;
  background-color: #cacaca;
  width: 25%;
  border: 1px solid #222222;
`;

const boxItem100Class = css`
  padding: 8px;
  background-color: #cacaca;
  width: 100%;
  border: 1px solid #222222;
`;

export const Overview = (args) => <Box {...args} />;

export const WithBackgroundColor = () => <Box backgroundColor="background">Box layout</Box>;

WithBackgroundColor.storyName = 'With backgroundColor';
WithBackgroundColor.parameters = {
  docs: {
    description: {
      story: "Setting Box's background-color.",
    },
  },
};

export const WithPadding = () => (
  <>
    <p>Fixed paddings</p>
    <Box padding="md" backgroundColor="background" borderWidth="sm">
      Padding
    </Box>
    <div className={marginClass} />
    <Box paddingx="md" backgroundColor="background" borderWidth="sm">
      Horizontal padding
    </Box>
    <div className={marginClass} />
    <Box paddingy="md" backgroundColor="background" borderWidth="sm">
      Vertical padding
    </Box>
    <div className={marginClass} />
    <p>Responsive paddings</p>
    <Box padding={['sm', 'md', 'lg', 'xl']} backgroundColor="background" borderWidth="sm">
      Responsive padding
    </Box>
    <div className={marginClass} />
    <Box paddingx={['sm', 'md', 'lg', 'xl']} backgroundColor="background" borderWidth="sm">
      Responsive horizontal padding
    </Box>
    <div className={marginClass} />
    <Box paddingy={['sm', 'md', 'lg', 'xl']} backgroundColor="background" borderWidth="sm">
      Responsive vertical Paddingy
    </Box>
  </>
);

WithPadding.storyName = 'With padding';
WithPadding.parameters = {
  docs: {
    description: {
      story:
        "Setting Box's padding. Use `padding` for padding, `paddingx` for padding-left and padding-right, `paddingy` for padding-top and padding-bottom. Note that `paddingx` and `paddingy` will override `padding`.",
    },
  },
};

export const WithWidth = () => (
  <>
    <Box width="quarter" padding="md" backgroundColor="background" borderWidth="sm">
      Fixed width
    </Box>
    <div className={marginClass} />
    <Box width="half" padding="md" backgroundColor="background" borderWidth="sm">
      Fixed width
    </Box>
    <div className={marginClass} />
    <Box width="full" padding="md" backgroundColor="background" borderWidth="sm">
      Fixed width
    </Box>
    <div className={marginClass} />
    <Box
      width={['quarter', 'half', 'full']}
      padding="md"
      backgroundColor="background"
      borderWidth="sm"
    >
      Responsive width
    </Box>
  </>
);

WithWidth.storyName = 'With width';
WithWidth.parameters = {
  docs: {
    description: {
      story: "Setting Box's width.",
    },
  },
};

export const WithHeight = () => (
  <>
    <Box height="xl" backgroundColor="background" borderWidth="sm">
      Fixed height
    </Box>
    <div className={marginClass} />
    <Box height="xxl" backgroundColor="background" borderWidth="sm">
      Fixed height
    </Box>
    <div className={marginClass} />
    <Box height="xxxl" backgroundColor="background" borderWidth="sm">
      Fixed height
    </Box>
    <div className={marginClass} />
    <Box height={['xl', 'xxl', 'xxxl']} backgroundColor="background" borderWidth="sm">
      Responsive height
    </Box>
  </>
);

WithHeight.storyName = 'With height';
WithHeight.parameters = {
  docs: {
    description: {
      story: "Setting Box's height.",
    },
  },
};

export const WithBorder = () => (
  <>
    <Box borderWidth="md" borderColor="muted">
      Box layout
    </Box>
    <div className={marginClass} />
    <Box borderWidth="md">
      Since borderColor is missing, currentColor is automatically used instead
    </Box>
  </>
);

WithBorder.storyName = 'With border styles';
WithBorder.parameters = {
  docs: {
    description: {
      story:
        "Setting Box's border. If borderWidth is passed but borderColor is not, Box will use currentColor.",
    },
  },
};

export const WithBorderRadius = () => (
  <>
    <Box borderRadius="md" padding="md" backgroundColor="background" borderWidth="sm">
      Fixed border radius
    </Box>
    <div className={marginClass} />
    <Box
      borderRadius={['sm', 'md', 'xl']}
      padding="md"
      backgroundColor="background"
      borderWidth="sm"
    >
      Responsive border radius
    </Box>
  </>
);

WithBorderRadius.storyName = 'With borderRadius';
WithBorderRadius.parameters = {
  docs: {
    description: {
      story: "Setting Box's border-radius.",
    },
  },
};

export const WithShadows = () => (
  <>
    <Box boxShadow="md" padding="md" backgroundColor="background" borderWidth="sm">
      Fixed shadows
    </Box>
    <div className={marginClass} />
    <Box
      boxShadow={['none', 'md', 'lg']}
      padding="md"
      backgroundColor="background"
      borderWidth="sm"
    >
      Responsive shadows
    </Box>
  </>
);

WithShadows.storyName = 'With boxShadow';
WithShadows.parameters = {
  docs: {
    description: {
      story: "Setting Box's box-shadow.",
    },
  },
};

export const WithTextAlign = () => (
  <>
    <p>textAlign=&quot;left&quot;</p>
    <Box textAlign="left" padding="md" backgroundColor="background" borderWidth="sm">
      Left
    </Box>
    <p className={marginClass}>textAlign=&quot;center&quot;</p>
    <Box textAlign="center" padding="md" backgroundColor="background" borderWidth="sm">
      Center
    </Box>
    <p className={marginClass}>textAlign=&quot;right&quot;</p>
    <Box textAlign="right" padding="md" backgroundColor="background" borderWidth="sm">
      Right
    </Box>
    <p className={marginClass}>textAlign=&quot;justify&quot; (and width=&quot;quarter&quot;)</p>
    <Box
      width="quarter"
      textAlign="justify"
      padding="md"
      backgroundColor="background"
      borderWidth="sm"
    >
      This box has long content and textAlign set to justify. Therefore, each line left space as
      well as right space are always identical.
    </Box>
  </>
);

WithTextAlign.storyName = 'With textAlign';
WithTextAlign.parameters = {
  docs: {
    description: {
      story: "Setting Box's text-align",
    },
  },
};

export const WithAlignItems = () => (
  <>
    <p>alignItems=&quot;flex-start&quot;</p>
    <Box
      alignItems="flex-start"
      height="xxxxl"
      padding="md"
      backgroundColor="background"
      borderWidth="sm"
    >
      <div className={boxItem100Class}>Item with 100% width</div>
    </Box>
    <p className={marginClass}>alignItems=&quot;center&quot;</p>
    <Box
      alignItems="center"
      height="xxxxl"
      padding="md"
      backgroundColor="background"
      borderWidth="sm"
    >
      <div className={boxItem100Class}>Item with 100% width</div>
    </Box>
    <p className={marginClass}>alignItems=&quot;flex-end&quot;</p>
    <Box
      alignItems="flex-end"
      height="xxxxl"
      padding="md"
      backgroundColor="background"
      borderWidth="sm"
    >
      <div className={boxItem100Class}>Item with 100% width</div>
    </Box>
    <p className={marginClass}>alignItems=&quot;stretch&quot;</p>
    <Box
      alignItems="stretch"
      height="xxxxl"
      padding="md"
      backgroundColor="background"
      borderWidth="sm"
    >
      <div className={boxItem100Class}>Item with 100% width</div>
    </Box>
    <p className={marginClass}>alignItems=&quot;baseline&quot;</p>
    <Box alignItems="baseline" padding="md" backgroundColor="background" borderWidth="sm">
      <div className={boxItem25Class} style={{ paddingTop: '36px' }}>
        Item with 25% width
      </div>
      <div className={boxItem25Class} style={{ paddingBottom: '36px' }}>
        Item with 25% width
      </div>
      <div className={boxItem25Class}>Item with 25% width</div>
      <div className={boxItem25Class} style={{ padding: '16px' }}>
        Item with 25% width
      </div>
    </Box>
  </>
);

WithAlignItems.storyName = 'With alignItems';
WithAlignItems.parameters = {
  docs: {
    description: {
      story:
        "Setting Box's align-items (Box's css display property will be set to flex if alignItems value is not `initial`).",
    },
  },
};

export const WithJustifyContent = () => (
  <>
    <p>justifyContent=&quot;flex-start&quot;</p>
    <Box justifyContent="flex-start" padding="md" backgroundColor="background" borderWidth="sm">
      <div className={boxItem25Class}>Item with 25% width</div>
      <div className={boxItem25Class}>Item with 25% width</div>
      <div className={boxItem25Class}>Item with 25% width</div>
    </Box>
    <p className={marginClass}>justifyContent=&quot;center&quot;</p>
    <Box justifyContent="center" padding="md" backgroundColor="background" borderWidth="sm">
      <div className={boxItem25Class}>Item with 25% width</div>
      <div className={boxItem25Class}>Item with 25% width</div>
      <div className={boxItem25Class}>Item with 25% width</div>
    </Box>
    <p className={marginClass}>justifyContent=&quot;flex-end&quot;</p>
    <Box justifyContent="flex-end" padding="md" backgroundColor="background" borderWidth="sm">
      <div className={boxItem25Class}>Item with 25% width</div>
      <div className={boxItem25Class}>Item with 25% width</div>
      <div className={boxItem25Class}>Item with 25% width</div>
    </Box>
    <p className={marginClass}>justifyContent=&quot;space-around&quot;</p>
    <Box justifyContent="space-around" padding="md" backgroundColor="background" borderWidth="sm">
      <div className={boxItem25Class}>Item with 25% width</div>
      <div className={boxItem25Class}>Item with 25% width</div>
      <div className={boxItem25Class}>Item with 25% width</div>
    </Box>
    <p className={marginClass}>justifyContent=&quot;space-between&quot;</p>
    <Box justifyContent="space-between" padding="md" backgroundColor="background" borderWidth="sm">
      <div className={boxItem25Class}>Item with 25% width</div>
      <div className={boxItem25Class}>Item with 25% width</div>
      <div className={boxItem25Class}>Item with 25% width</div>
    </Box>
    <p className={marginClass}>justifyContent=&quot;space-evenly&quot;</p>
    <Box justifyContent="space-evenly" padding="md" backgroundColor="background" borderWidth="sm">
      <div className={boxItem25Class}>Item with 25% width</div>
      <div className={boxItem25Class}>Item with 25% width</div>
      <div className={boxItem25Class}>Item with 25% width</div>
    </Box>
  </>
);

WithJustifyContent.storyName = 'With justifyContent';
WithJustifyContent.parameters = {
  docs: {
    description: {
      story:
        "Setting Box's justify-content (Box's css display property will be set to flex if justifyContent value is not `initial`).",
    },
  },
};

export const HtmlContentExample = () => {
  const html = `
    <p>
      <strong>Mô tả bằng tiếng Việt có dấu:</strong>
    </p>
    <ul>
      <li>Tiện ích xung quanh.</li>
      <li>Nội thất cơ bản hoặc liệt kê nội thất có sẵn.</li>
      <li>Thời gian bàn giao/ lưu trú</li>
      <li>Độ mới cũ, sửa chữa/tân trang.</li>
    </ul>`;
  return (
    <Box
      padding="sm"
      backgroundColor="teal4"
      color="darkblue2"
      borderRadius="sm"
      dangerousHtml={html}
    />
  );
};

HtmlContentExample.storyName = 'Ex: HTML content';

HtmlContentExample.parameters = {
  docs: {
    description: {
      story:
        "Box component has a special `dangerousHtml` prop which accepts HTML string which will be lightly sanitized (so it's still dangerous), automatically wrapped in `{__html}` and passed to `dangerouslySetInnerHTML` of the rendered styled container. Avoid passing user's input directly to this prop and the HTML string should be properly sanitized at server side.",
    },
  },
};
