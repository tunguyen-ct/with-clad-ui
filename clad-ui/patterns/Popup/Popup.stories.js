import React, { useState, useEffect } from 'react';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import Button from '../../components/Button/Button';
import { ArrowLeft, Check } from '../../icons';
import Popup from './Popup';
import Box from '../../components/Box/Box';
import TagCloud from '../TagCloud/TagCloud';
import { guideImageClass } from '../../storybook/components/GuideImage';

const popupStories = {
  title: 'Patterns/Popup',
  component: Popup,
  parameters: {
    docs: {
      description: {
        component: `Popup is a pattern that allow sliding in supplement floating contents (such as filters) on top of current one.

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/jgjzy49)

## How to use

One of Popup popular use cases is for filters and item selections to display a long list of options.
The modal Popup appears when user clicks on a filter or selector like category, brand, model...
This pattern help user aware that the floating contents are extended from the previous page or
to be reduced to a selected item for beneath component.

Left header icon always close the Popup, although, its icon can be customized.

Right header icon is optional and its icon and click action can be customized.

Popup can also have an optional actionable button at bottom.

Below are examples from category selection and dynamic filter:

<img className="${guideImageClass}" src="./popup-how.png" />
`,
      },
    },
  },
  argTypes: {
    title: {
      defaultValue: 'Dynamic Popup',
    },
    btnLabel: {
      defaultValue: 'Button',
    },
    children: {
      defaultValue:
        'Multiline user message. Use \\n to add line break.\nPopup content accepts both string and React components.',
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
    rightIcon: {
      control: {
        type: 'text',
      },
    },
    padding: {},
    desktopSize: {},
    mobileSize: {},
  },
};

export default popupStories;

const marginTopClass = css`
  margin-top: 24px;
`;

const Placeholder = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  height: 1000px;
  border: 5px solid #cacaca;
  background-color: #f4f4f4;

  @media screen and (min-width: 768px) {
    height: 200px;
  }
`;

const onMainBtnClick = () => {
  // eslint-disable-next-line no-alert
  alert('Main button clicked.');
};

const onRightIconClick = () => {
  // eslint-disable-next-line no-alert
  alert('Right Icon clicked.');
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
      <Button onClick={toggleModel}>Open Popup</Button>
      <Popup
        {...args}
        open={open}
        onClose={toggleModel}
        onButtonClick={onMainBtnClick}
        onRightIconClick={args.rightIcon ? onRightIconClick : null}
      />
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
      <p>Popup has string as children.</p>
      <Button onClick={toggleModel1}>String</Button>
      <Popup
        open={open1}
        onClose={toggleModel1}
        onButtonClick={onMainBtnClick}
        title="Dynamic Popup"
        btnLabel="Button"
      >
        Popup&apos;s children in this case is a string.
      </Popup>
      <p className={marginTopClass}>Popup has React component as children.</p>
      <Button onClick={toggleModel2}>React component</Button>
      <Popup
        open={open2}
        onClose={toggleModel2}
        onButtonClick={onMainBtnClick}
        title="Dynamic Popup"
        btnLabel="Button"
      >
        <Placeholder>Popup&apos;s children in this case is a React component.</Placeholder>
      </Popup>
    </>
  );
};

WithChildren.storyName = 'With children';
WithChildren.parameters = {
  docs: {
    description: {
      story: "Popup's children accepts both string and React components.",
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
      <Button onClick={toggleModel}>No Main Button Popup</Button>
      <Popup open={open} onClose={toggleModel} onButtonClick={onMainBtnClick} title="Dynamic Popup">
        <Placeholder>React component</Placeholder>
      </Popup>
    </>
  );
};

WithoutBtnLabel.storyName = 'Without btnLabel';
WithoutBtnLabel.parameters = {
  docs: {
    description: {
      story:
        "Popup won't have main button at the bottom if btnLabel is not found. Popup's children will occupy all Popup's content.",
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
      <p>Medium size Popup</p>
      <Button onClick={toggleModel1}>Medium</Button>
      <Popup
        desktopSize="md"
        open={open1}
        onClose={toggleModel1}
        onButtonClick={onMainBtnClick}
        title="Dynamic Popup"
        btnLabel="Button"
      >
        <Placeholder>React component</Placeholder>
      </Popup>
      <p className={marginTopClass}>Large size Popup</p>
      <Button onClick={toggleModel2}>Large</Button>
      <Popup
        desktopSize="lg"
        open={open2}
        onClose={toggleModel2}
        onButtonClick={onMainBtnClick}
        title="Dynamic Popup"
        btnLabel="Button"
      >
        <Placeholder>React component</Placeholder>
      </Popup>
      <p className={marginTopClass}>Extra-large size Popup</p>
      <Button onClick={toggleModel3}>Extra-large</Button>
      <Popup
        desktopSize="xl"
        open={open3}
        onClose={toggleModel3}
        onButtonClick={onMainBtnClick}
        title="Dynamic Popup"
        btnLabel="Button"
      >
        <Placeholder>React component</Placeholder>
      </Popup>
    </>
  );
};

WithDesktopSize.storyName = 'With desktopSize';
WithDesktopSize.parameters = {
  docs: {
    description: {
      story:
        "Set Popup's `desktopSize` to set its max-width on desktop. `desktopSize` **DOES NOT** have effect on mobile and tablet viewport.",
    },
  },
};

export const WithMobileSize = () => {
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
      <p>Half size Popup</p>
      <Button onClick={toggleModel1}>Half</Button>
      <Popup
        mobileSize="half"
        open={open1}
        onClose={toggleModel1}
        onButtonClick={onMainBtnClick}
        title="Dynamic Popup"
        btnLabel="Button"
      >
        <Placeholder>React component</Placeholder>
      </Popup>
      <p className={marginTopClass}>Full size Popup</p>
      <Button onClick={toggleModel2}>Full</Button>
      <Popup
        mobileSize="full"
        open={open2}
        onClose={toggleModel2}
        onButtonClick={onMainBtnClick}
        title="Dynamic Popup"
        btnLabel="Button"
      >
        <Placeholder>React component</Placeholder>
      </Popup>
    </>
  );
};

WithMobileSize.storyName = 'With mobileSize';
WithMobileSize.parameters = {
  docs: {
    description: {
      story:
        "Set Popup's `mobileSize` to set its max-height on mobile and tablet. `mobileSize` **DOES NOT** have effect on desktop viewport.",
    },
  },
};

export const WithPadding = () => {
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
      <p>No padding Popup</p>
      <Button onClick={toggleModel1}>No padding</Button>
      <Popup
        padding="none"
        open={open1}
        onClose={toggleModel1}
        onButtonClick={onMainBtnClick}
        title="Dynamic Popup"
      >
        <Placeholder>React component</Placeholder>
      </Popup>
      <p className={marginTopClass}>Responsive padding Popup</p>
      <Button onClick={toggleModel2}>Responsive</Button>
      <Popup
        padding={['sm', 'md', 'lg', 'xl']}
        open={open2}
        onClose={toggleModel2}
        onButtonClick={onMainBtnClick}
        title="Dynamic Popup"
        btnLabel="Button"
      >
        <Placeholder>React component</Placeholder>
      </Popup>
    </>
  );
};

WithPadding.storyName = 'With padding';
WithPadding.parameters = {
  docs: {
    description: {
      story:
        "Setting Popup's padding. `padding` will only have effect on Popup's content, not Popup's header.",
    },
  },
};

export const WithIcons = () => {
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
      <p>
        Default closeIcon and <code>&lt;Check /&gt;</code> icon for rightIcon
      </p>
      <Button onClick={toggleModel1}>SVG right icon</Button>
      <Popup
        rightIcon={<Check />}
        onRightIconClick={onRightIconClick}
        open={open1}
        onClose={toggleModel1}
        onButtonClick={onMainBtnClick}
        title="Dynamic Popup"
        btnLabel="Button"
      >
        <Placeholder>React component</Placeholder>
      </Popup>
      <p className={marginTopClass}>
        Override default closeIcon with <code>&lt;ArrowLeft /&gt;</code> icon and use{' '}
        <code>&lt;Check /&gt;</code> icon for rightIcon
      </p>
      <Button onClick={toggleModel2}>Override closeIcon</Button>
      <Popup
        closeIcon={<ArrowLeft />}
        rightIcon={<Check />}
        onRightIconClick={onRightIconClick}
        open={open2}
        onClose={toggleModel2}
        onButtonClick={onMainBtnClick}
        title="Dynamic Popup"
        btnLabel="Button"
      >
        <Placeholder>React component</Placeholder>
      </Popup>
      <p className={marginTopClass}>
        Strings are used instead of icons for both closeIcon and rightIcon.
      </p>
      <Button onClick={toggleModel3}>Strings as icons</Button>
      <Popup
        closeIcon="Close"
        rightIcon="Clear"
        onRightIconClick={onRightIconClick}
        open={open3}
        onClose={toggleModel3}
        onButtonClick={onMainBtnClick}
        title="Dynamic Popup"
        btnLabel="Button"
      >
        <Placeholder>React component</Placeholder>
      </Popup>
    </>
  );
};

WithIcons.storyName = 'With icons';
WithIcons.parameters = {
  docs: {
    description: {
      story:
        "Setting Popup's `closeIcon` and `rightIcon` along with click events. `closeIcon` and `rightIcon` accept both string and React components as icon.",
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
      <Button onClick={toggleModel}>Open Popup</Button>
      <Popup
        rightIcon="Bỏ lọc"
        onRightIconClick={onRightIconClick}
        open={open}
        onClose={toggleModel}
        onButtonClick={toggleModel}
        title="Lưu ý"
        btnLabel="Đồng ý"
      >
        <Box dangerousHtml={html} />
      </Popup>
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

export const TagCloudExample = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [submitValue, setSubmitValue] = useState([]);

  const tagCloudOptions = [
    { value: 'exp', label: 'Experienced' },
    { value: 'patient', label: 'Patient' },
    { value: 'creative', label: 'Creative' },
    { value: 'loyal', label: 'Loyal' },
    { value: 'energetic', label: 'Energetic' },
    { value: 'laborious', label: 'Laborious' },
    { value: 'honest', label: 'Honest' },
    { value: 'dedicated', label: 'Dedicated' },
  ];

  const getLabel = (v) => tagCloudOptions.find((option) => option.value === v).label;
  const submitMessage = submitValue.map((v) => getLabel(v).toLocaleLowerCase()).join(', ');

  const toggleModel = () => {
    setOpen(!open);
  };
  const onTagCloudChanged = ({ target }) => {
    setValue(target.value);
  };
  const onPopupClose = () => {
    setValue(submitValue); // maintain previous value before close
    toggleModel();
  };
  const onPopupClear = () => {
    setValue([]);
  };
  const onPopupSubmit = () => {
    setSubmitValue(value);
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={toggleModel}>Describe yourself</Button>
      <p>
        {submitValue.length === 0 ? 'Describe yourself in 3 words.' : `You are ${submitMessage}.`}
      </p>
      <Popup
        rightIcon="Clear"
        onRightIconClick={onPopupClear}
        open={open}
        onClose={onPopupClose}
        onButtonClick={onPopupSubmit}
        title="Describe yourself"
        btnLabel="Submit"
      >
        <TagCloud
          label={`Describe yourself in 3 words (${value.length}/3)`}
          multiple
          maxSelection={3}
          helptext="Max selection is 3"
          options={tagCloudOptions}
          value={value}
          onChange={onTagCloudChanged}
        />
      </Popup>
    </>
  );
};

TagCloudExample.storyName = 'Ex: With TagCloud';
TagCloudExample.parameters = {
  docs: {
    description: {
      story: "An example of value handling when using TagCloud as Popup's children.",
    },
  },
};
