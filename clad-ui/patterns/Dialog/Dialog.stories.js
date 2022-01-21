import React, { useState, useEffect } from 'react';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import Button from '../../components/Button/Button';
import { ArrowRight } from '../../icons';
import CtC2C from '../../brand/CtC2C';
import Dialog from './Dialog';
import Box from '../../components/Box/Box';
import { guideImageClass } from '../../storybook/components/GuideImage';

const dialogStories = {
  title: 'Patterns/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: `Dialog informs users about critical information or require decisions.

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/MyM80Vl)

## How to use

Dialog appears in front of page content to provide critical information or ask for a decision.
Dialog is purposefully interruptive, so they should be used sparingly.

Right icon on the top will close Dialog, although, its icon can be customized.

Dialog can also have an optional actionable button at bottom.

Below is an example of Dialog being used to inform critical information:

<img className="${guideImageClass}" src="./dialog-how.png" />
`,
      },
    },
  },
  argTypes: {
    title: {
      defaultValue: 'Dialog title',
    },
    btnLabel: {
      defaultValue: 'Button',
    },
    children: {
      defaultValue:
        'Multiline user message. Use \\n to add line break.\nDialog content accepts both string and React components.',
      control: {
        type: 'text',
      },
    },
    open: {},
    closeIcon: {
      control: {
        type: 'text',
      },
    },
    desktopSize: {},
    className: { control: null },
    mainIcon: { control: null },
  },
};

export default dialogStories;

const marginTopClass = css`
  margin-top: 24px;
`;

const Placeholder = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  height: 200px;
  border: 5px solid #cacaca;
  background-color: #f4f4f4;
`;

const onMainBtnClick = () => {
  // eslint-disable-next-line no-alert
  alert('Main button clicked.');
};

export const Overview = (args) => {
  const [open, setOpen] = useState(false);
  const toggleModel = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setOpen(args.open);
  }, [args.open]);
  return (
    <>
      <Button onClick={toggleModel}>Open Dialog</Button>
      <Dialog {...args} open={open} onClose={toggleModel} onButtonClick={onMainBtnClick} />
    </>
  );
};

export const WithChildren = () => {
  const [open1, setOpen1] = useState(false);
  const toggleModel1 = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = useState(false);
  const toggleModel2 = () => {
    setOpen2(!open2);
  };
  return (
    <>
      <p>Dialog has string as children.</p>
      <Button onClick={toggleModel1}>String</Button>
      <Dialog
        open={open1}
        onClose={toggleModel1}
        onButtonClick={onMainBtnClick}
        title="Dialog title"
        btnLabel="Button"
      >
        Dialog&apos;s children in this case is a string.
      </Dialog>
      <p className={marginTopClass}>Dialog has React component as children.</p>
      <Button onClick={toggleModel2}>React component</Button>
      <Dialog
        open={open2}
        onClose={toggleModel2}
        onButtonClick={onMainBtnClick}
        title="Dialog title"
        btnLabel="Button"
      >
        <Placeholder>Dialog&apos;s children in this case is a React component.</Placeholder>
      </Dialog>
    </>
  );
};

WithChildren.storyName = 'With children';
WithChildren.parameters = {
  docs: {
    description: {
      story: "Dialog's children accepts both string and React components.",
    },
  },
};

export const WithoutBtnLabel = () => {
  const [open, setOpen] = useState(false);
  const toggleModel = () => {
    setOpen(!open);
  };
  return (
    <>
      <Button onClick={toggleModel}>No Main Button Dialog</Button>
      <Dialog open={open} onClose={toggleModel} onButtonClick={onMainBtnClick} title="Dialog title">
        <Placeholder>React component</Placeholder>
      </Dialog>
    </>
  );
};

WithoutBtnLabel.storyName = 'Without btnLabel';
WithoutBtnLabel.parameters = {
  docs: {
    description: {
      story:
        "Dialog won't have main button at the bottom if btnLabel is not found. Dialog's children will occupy all Dialog's content.",
    },
  },
};

export const WithDesktopSize = () => {
  const [open1, setOpen1] = useState(false);
  const toggleModel1 = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = useState(false);
  const toggleModel2 = () => {
    setOpen2(!open2);
  };
  const [open3, setOpen3] = useState(false);
  const toggleModel3 = () => {
    setOpen3(!open3);
  };
  return (
    <>
      <p>Medium size Dialog</p>
      <Button onClick={toggleModel1}>Medium</Button>
      <Dialog
        desktopSize="md"
        open={open1}
        onClose={toggleModel1}
        onButtonClick={onMainBtnClick}
        title="Dialog title"
        btnLabel="Button"
      >
        <Placeholder>React component</Placeholder>
      </Dialog>
      <p className={marginTopClass}>Large size Dialog</p>
      <Button onClick={toggleModel2}>Large</Button>
      <Dialog
        desktopSize="lg"
        open={open2}
        onClose={toggleModel2}
        onButtonClick={onMainBtnClick}
        title="Dialog title"
        btnLabel="Button"
      >
        <Placeholder>React component</Placeholder>
      </Dialog>
      <p className={marginTopClass}>Extra-large size Dialog</p>
      <Button onClick={toggleModel3}>Extra-large</Button>
      <Dialog
        desktopSize="xl"
        open={open3}
        onClose={toggleModel3}
        onButtonClick={onMainBtnClick}
        title="Dialog title"
        btnLabel="Button"
      >
        <Placeholder>React component</Placeholder>
      </Dialog>
    </>
  );
};

WithDesktopSize.storyName = 'With desktopSize';
WithDesktopSize.parameters = {
  docs: {
    description: {
      story:
        "Set Dialog's `desktopSize` to set its max-width on desktop. `desktopSize` **DOES NOT** have effect on mobile and tablet viewport.",
    },
  },
};

export const WithIcons = () => {
  const mainIconClass = css`
    & > .main-icon {
      font-size: 52px;
      font-style: italic;
      color: #fe9900;
      font-weight: bold;
    }
  `;

  const [open1, setOpen1] = useState(false);
  const toggleModel1 = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = useState(false);
  const toggleModel2 = () => {
    setOpen2(!open2);
  };
  return (
    <>
      <p>
        Override default closeIcon with <code>&lt;ArrowRight /&gt;</code> icon and mainIcon with{' '}
        <code>&lt;CtC2C /&gt;</code> icon
      </p>
      <Button onClick={toggleModel1}>Override both icons</Button>
      <Dialog
        closeIcon={<ArrowRight />}
        mainIcon={<CtC2C />}
        open={open1}
        onClose={toggleModel1}
        onButtonClick={onMainBtnClick}
        title="Dialog title"
        btnLabel="Button"
      >
        <Placeholder>React component</Placeholder>
      </Dialog>
      <p className={marginTopClass}>
        Strings are used instead of icons for both closeIcon and mainIcon.
      </p>
      <Button onClick={toggleModel2}>Strings as icons</Button>
      <Dialog
        className={mainIconClass}
        closeIcon="Close"
        mainIcon="Chợ Tốt"
        open={open2}
        onClose={toggleModel2}
        onButtonClick={onMainBtnClick}
        title="Dialog title"
        btnLabel="Button"
      >
        <Placeholder>React component</Placeholder>
      </Dialog>
    </>
  );
};

WithIcons.storyName = 'With icons';
WithIcons.parameters = {
  docs: {
    description: {
      story: `Setting Dialog's \`closeIcon\` and \`mainIcon\`. \`closeIcon\` and \`mainIcon\` accept both string and React component as icon.

String in \`mainIcon\` should also come with custom styles. Styles can be applied by targeting \`main-icon\` class in Dialog.
        `,
    },
  },
};

export const BoxExample = () => {
  const [open, setOpen] = useState(false);
  const toggleModel = () => {
    setOpen(!open);
  };
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
    <>
      <Button onClick={toggleModel}>Open Dialog</Button>
      <Dialog
        open={open}
        onClose={toggleModel}
        onButtonClick={toggleModel}
        title="Lưu ý"
        btnLabel="Đồng ý"
      >
        <Box dangerousHtml={html} />
      </Dialog>
    </>
  );
};

BoxExample.storyName = 'Ex: HTML content';
BoxExample.parameters = {
  docs: {
    description: {
      story: 'Render HTML via `dangerousHtml` prop in Box component.',
    },
  },
};

export const InformExample = () => {
  const [open, setOpen] = useState(false);
  const toggleModel = () => {
    setOpen(!open);
  };

  const linkClass = css`
    text-align: center;
    text-decoration: underline;
  `;
  return (
    <>
      <Button onClick={toggleModel}>ĐẢM BẢO</Button>
      <Dialog
        open={open}
        onClose={toggleModel}
        onButtonClick={toggleModel}
        title="Cửa Hàng Đảm Bảo bởi Chợ Tốt"
        btnLabel="Đã hiểu"
      >
        <ul>
          <li>
            Cửa Hàng cam kết Chất Lượng và Pháp Lý Xe (không tai nạn, không tranh chấp, kiện tụng,
            không phạt nguội)
          </li>
          <li>Cửa Hàng đảm bảo Xe 3-6 tháng sau khi mua</li>
          <li>Chợ Tốt hỗ trợ giải quyết khiếu nại phát sinh</li>
        </ul>
        <div className={linkClass}>
          <a href="/" target="_blank">
            Tìm hiểu thêm
          </a>
        </div>
      </Dialog>
    </>
  );
};

InformExample.storyName = 'Ex: Provide information';
InformExample.parameters = {
  docs: {
    description: {
      story: 'A example of using Dialog to provide critical information.',
    },
  },
};
