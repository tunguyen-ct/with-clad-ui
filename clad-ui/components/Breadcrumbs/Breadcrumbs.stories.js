/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { css } from 'linaria';
import Breadcrumbs from './Breadcrumbs';
import Button from '../Button/Button';
import Box from '../Box/Box';
import { guideImageClass } from '../../storybook/components/GuideImage';

const gridClass = css`
  /* stylelint-disable declaration-no-important */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 -8px !important;

  & > div {
    padding: 0 8px;
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    & > div {
      width: 50%;
    }
  }
`;

const breadcrumbsStories = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component: `Breadcrumbs displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

\`🧪Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/25elJqe)

## How to use

Use Breadcrumbs as a wrapper element to wrap \`a\` tags as children. Those \`a\` tags will be mapped automatically into Breadcrumbs items.

Currently, Breadcrumbs children only accepts:

- \`a\` tags
- \`a\` tags with **ONE** wrapper tag

Elements with wrong format will not be rendered.

The last item will have its \`a\` tag replaced with \`span\`.

<div className="${gridClass}">
  <div>
    <p>On mobile, Breadcrumbs is scrollable if necessary.</p>
    <img className="${guideImageClass}" src="./breadcrumbs-how-1.png" />
  </div>

  <div>
    <p>On desktop, Breadcrumbs is not scrollable. Overflow text content will be truncated.</p>
    <img className="${guideImageClass}" src="./breadcrumbs-how-2.png" />
  </div>
</div>
`,
      },
    },
  },
  argTypes: {
    isShow: {},
    children: { control: null },
    className: { control: null },
  },
};

export default breadcrumbsStories;

export const Overview = (args) => (
  <Breadcrumbs {...args}>
    <a href="/">Chợ Tốt</a>
    <a href="/toan-quoc/mua-ban">Toàn quốc</a>
    <a href="/toan-quoc/mua-ban-do-gia-dung-noi-that-cay-canh">Đồ gia dụng, nội thất, cây cảnh</a>
  </Breadcrumbs>
);

/**
 * Mimic `next/link` component
 */
const Link = React.forwardRef(({ href, children }, ref) => {
  const handleClick = (event) => {
    // stop default hyperlink redirection
    event.preventDefault();

    // eslint-disable-next-line no-alert
    alert(`Simulated Next.js Link click to ${href}`);
  };

  return React.cloneElement(children, {
    href,
    ref,
    onClick: handleClick,
  });
});

export const ChildrenWithWrapper = () => (
  <Breadcrumbs>
    <Link href="/">
      <a>Chợ Tốt</a>
    </Link>
    <Link href="/toan-quoc/mua-ban">
      <a>Toàn quốc</a>
    </Link>
    <Link href="/toan-quoc/mua-ban-do-gia-dung-noi-that-cay-canh">
      <a>Đồ gia dụng, nội thất, cây cảnh</a>
    </Link>
  </Breadcrumbs>
);

ChildrenWithWrapper.storyName = 'Children with wrapper';
ChildrenWithWrapper.parameters = {
  docs: {
    description: {
      story:
        'Breadcrumbs will only inject meta data into `a` tags inside wrapper tags, it will not modify original behavior, which means we can safely use `Link` component in Next.js for client-side routing as children.',
    },
  },
};

export const WithIsShow = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Breadcrumbs isShow={open}>
        <a href="/">Chợ Tốt</a>
        <a href="/toan-quoc/mua-ban">Toàn quốc</a>
        <a href="/toan-quoc/mua-ban-do-gia-dung-noi-that-cay-canh">
          Đồ gia dụng, nội thất, cây cảnh
        </a>
      </Breadcrumbs>
      <br />
      <Button onClick={() => setOpen((prevOpen) => !prevOpen)}>Toggle Breadcrumbs</Button>
    </>
  );
};

WithIsShow.storyName = 'With isShow';

export const LongBreadcrumbsExample = () => (
  <Box maxWidth={['full', '$md']}>
    <Breadcrumbs>
      <a href="/">Chợ Tốt</a>
      <a href="/ho-chi-minh/">Tp Hồ Chí Minh</a>
      <a href="/ho-chi-minh/quan-1">Quận 1</a>
      <a href="/ho-chi-minh/quan-1/phuong-ben-nghe">Phường Bến Nghé</a>
      <a href="/ho-chi-minh/quan-1/phuong-ben-nghe/do-dien-tu">Đồ điện tử</a>
      <a href="/ho-chi-minh/quan-1/phuong-ben-nghe/dien-thoai">Điện thoại</a>
      <a href="/ho-chi-minh/quan-1/phuong-ben-nghe/dien-thoai/samsung">Samsung</a>
      <a href="/ho-chi-minh/quan-1/phuong-ben-nghe/galaxy-note-fan-edition">
        Galaxy Note Fan Edition
      </a>
    </Breadcrumbs>
  </Box>
);

LongBreadcrumbsExample.storyName = 'Ex: Long Breadcrumbs';
LongBreadcrumbsExample.parameters = {
  docs: {
    description: {
      story: "Demonstrate how Breadcrumbs will look like when it's too long.",
    },
  },
};
